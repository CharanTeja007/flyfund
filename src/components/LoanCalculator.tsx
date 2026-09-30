import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FormField, describedBy } from './FormField'
import { calculateLoan, formatINR, sanitizeNumeric } from '@/lib/calculator'
import type { CalculatorResult } from '@/lib/calculator'

type Key = 'loanAmount' | 'interestRate' | 'moratoriumYears' | 'pmi' | 'tenureYears'
type Values = Record<Key, string>
type Errors = Partial<Record<Key, string>>

const LIMITS = {
  loanAmount: 100_000_000_000, // ₹10,000 Cr — generous sanity ceiling
  interestRate: 50,
  moratoriumYears: 10,
  pmi: 100_000_000,
  tenureYears: 30,
}

const fields: {
  key: Key
  label: string
  placeholder: string
  unit: string
  decimal: boolean
  hint?: string
}[] = [
  { key: 'loanAmount', label: 'Loan Amount', placeholder: 'INR', unit: '₹', decimal: false },
  { key: 'interestRate', label: 'Interest Rate', placeholder: '%', unit: '% p.a.', decimal: true },
  { key: 'moratoriumYears', label: 'Moratorium Period', placeholder: 'Years', unit: 'years', decimal: true, hint: 'Usually course duration plus a grace period. Enter 0 if none.' },
  { key: 'pmi', label: 'PMI — Pre-Monthly Instalment', placeholder: 'INR', unit: '₹ / month', decimal: false, hint: 'The monthly amount provided by your bank/lender during the moratorium. Enter 0 if none.' },
  { key: 'tenureYears', label: 'Loan Tenure', placeholder: 'Years', unit: 'years', decimal: true, hint: 'Repayment period in years — e.g. 10 means 10 years.' },
]

function validate(v: Values): Errors {
  const e: Errors = {}
  const num = (k: Key) => Number(v[k])

  if (v.loanAmount === '') e.loanAmount = 'Please enter your loan amount.'
  else if (!(num('loanAmount') > 0)) e.loanAmount = 'Loan amount must be greater than 0.'
  else if (num('loanAmount') > LIMITS.loanAmount) e.loanAmount = 'Please enter a realistic loan amount.'

  if (v.interestRate === '') e.interestRate = 'Please enter the interest rate.'
  else if (!Number.isFinite(num('interestRate')) || num('interestRate') < 0) e.interestRate = 'Interest rate must be 0 or greater.'
  else if (num('interestRate') > LIMITS.interestRate) e.interestRate = `Interest rate should be ${LIMITS.interestRate}% or less.`

  if (v.moratoriumYears === '') e.moratoriumYears = 'Please enter the moratorium period (enter 0 if none).'
  else if (!Number.isFinite(num('moratoriumYears')) || num('moratoriumYears') < 0) e.moratoriumYears = 'Moratorium period must be 0 or greater.'
  else if (num('moratoriumYears') > LIMITS.moratoriumYears) e.moratoriumYears = `Moratorium period should be ${LIMITS.moratoriumYears} years or less.`

  if (v.pmi === '') e.pmi = 'Please enter the PMI amount from your lender (enter 0 if none).'
  else if (!Number.isFinite(num('pmi')) || num('pmi') < 0) e.pmi = 'PMI must be 0 or greater.'
  else if (num('pmi') > LIMITS.pmi) e.pmi = 'Please enter a realistic PMI amount.'

  if (v.tenureYears === '') e.tenureYears = 'Please enter the loan tenure in years.'
  else if (!(num('tenureYears') > 0)) e.tenureYears = 'Loan tenure must be greater than 0.'
  else if (num('tenureYears') > LIMITS.tenureYears) e.tenureYears = `Loan tenure should be ${LIMITS.tenureYears} years or less.`
  else if (num('tenureYears') * 12 < 1) e.tenureYears = 'Loan tenure must be at least one month.'

  return e
}

const initial: Values = { loanAmount: '', interestRate: '', moratoriumYears: '', pmi: '', tenureYears: '' }

export function LoanCalculator() {
  const [values, setValues] = useState<Values>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [resultKey, setResultKey] = useState(0)

  const onChange = (key: Key, decimal: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = sanitizeNumeric(e.target.value, decimal)
    setValues((v) => ({ ...v, [key]: cleaned }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = (Object.keys(found) as Key[])[0]
    if (first) {
      setResult(null)
      e.currentTarget.querySelector<HTMLInputElement>(`#calc-${first}`)?.focus()
      return
    }
    const r = calculateLoan({
      loanAmount: Number(values.loanAmount),
      interestRate: Number(values.interestRate),
      moratoriumYears: Number(values.moratoriumYears),
      pmi: Number(values.pmi),
      tenureYears: Number(values.tenureYears),
    })
    if (!r) {
      setErrors({ loanAmount: 'These values could not be calculated. Please review your inputs.' })
      setResult(null)
      return
    }
    setResult(r)
    setResultKey((k) => k + 1)
  }

  const onReset = () => {
    setValues(initial)
    setErrors({})
    setResult(null)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-10" aria-label="Education loan calculator">
        <div className="space-y-6">
          {fields.map((f) => {
            const id = `calc-${f.key}`
            const err = errors[f.key]
            return (
              <FormField key={f.key} id={id} label={f.label} required hint={f.hint} error={err}>
                <div className="relative">
                  <input
                    id={id}
                    name={f.key}
                    type="text"
                    inputMode={f.decimal ? 'decimal' : 'numeric'}
                    autoComplete="off"
                    placeholder={f.placeholder}
                    className="field-input pr-24 tabular-nums"
                    value={values[f.key]}
                    onChange={onChange(f.key, f.decimal)}
                    aria-invalid={!!err}
                    aria-describedby={describedBy(id, err, !!f.hint)}
                    maxLength={f.decimal ? 8 : 13}
                  />
                  <span aria-hidden className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-slate">
                    {f.unit}
                  </span>
                </div>
                {(f.key === 'loanAmount' || f.key === 'pmi') && values[f.key] && Number(values[f.key]) > 0 && !err && (
                  <p className="mt-1.5 text-xs tabular-nums text-teal-deep">{formatINR(Number(values[f.key]))}</p>
                )}
              </FormField>
            )
          })}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="btn btn-primary sm:min-w-[10rem]">
            Calculate
          </button>
          <button type="button" onClick={onReset} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>

      <div aria-live="polite" className="lg:sticky lg:top-28 lg:self-start">
        {result ? (
          <div key={resultKey} className="result-enter rounded-xl border border-line bg-mist/60 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Your estimate</p>
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-slate">Estimated Monthly Instalment After Moratorium</h2>
              <p className="mt-2 text-[2.5rem] font-medium leading-none tracking-[-0.02em] text-navy tabular-nums sm:text-5xl">
                {formatINR(result.emi)}
                <span className="ml-1 text-base font-normal text-slate">/ month</span>
              </p>
              <p className="mt-2 text-sm text-slate">for {result.tenureMonths} months</p>
            </div>
            <dl className="mt-8 divide-y divide-line-strong/70 border-t border-line-strong/70">
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-[0.9375rem] text-ink">
                  Total PMI During Moratorium
                  <span className="block text-xs text-slate">{result.moratoriumMonths} months</span>
                </dt>
                <dd className="text-xl font-semibold tabular-nums text-navy">{formatINR(result.totalPmi)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-[0.9375rem] text-ink">Total EMI Repayment</dt>
                <dd className="text-xl font-semibold tabular-nums text-navy">{formatINR(result.totalEmiRepayment)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-[0.9375rem] font-semibold text-ink">
                  Estimated Total Repayment During Loan Tenure
                  <span className="block text-xs font-normal text-slate">Total PMI + total EMI repayment</span>
                </dt>
                <dd className="text-2xl font-semibold tabular-nums text-navy">{formatINR(result.totalOutflow)}</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-slate">All figures are estimates, rounded to the nearest rupee.</p>
          </div>
        ) : (
          <div className="flex h-full min-h-[18rem] flex-col justify-center rounded-xl border border-dashed border-line-strong bg-paper p-8 text-center sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Your estimate</p>
            <p className="mx-auto mt-4 max-w-xs text-[1.0625rem] leading-relaxed text-slate">
              Enter your loan details and select <span className="font-semibold text-navy">Calculate</span> to see your
              estimated monthly instalment and total repayment.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
