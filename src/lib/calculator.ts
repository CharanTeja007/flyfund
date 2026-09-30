/**
 * FlyFund education-loan estimate.
 *
 * PMI (pre-monthly instalment) is supplied by the lender and entered by the
 * student — it is an input, never derived here.
 *
 *   N = tenureYears × 12
 *   M = moratoriumYears × 12
 *   r = annualRate / 12 / 100
 *   Total PMI = PMI × M
 *   EMI = P × r × (1+r)^N / ((1+r)^N − 1)     (EMI = P / N when r = 0)
 *   Total EMI repayment = EMI × N
 *   Estimated total outflow = Total PMI + Total EMI repayment
 *
 * PMI payments are not added back to the principal.
 */
export interface CalculatorInput {
  loanAmount: number
  interestRate: number
  moratoriumYears: number
  pmi: number
  tenureYears: number
}

export interface CalculatorResult {
  emi: number
  totalPmi: number
  totalEmiRepayment: number
  totalOutflow: number
  tenureMonths: number
  moratoriumMonths: number
}

export function calculateLoan({
  loanAmount: P,
  interestRate,
  moratoriumYears,
  pmi,
  tenureYears,
}: CalculatorInput): CalculatorResult | null {
  const N = tenureYears * 12
  const M = moratoriumYears * 12
  const r = interestRate / 12 / 100

  if (!(P > 0) || !(N > 0) || r < 0 || M < 0 || pmi < 0) return null

  let emi: number
  if (r === 0) {
    emi = P / N
  } else {
    const growth = Math.pow(1 + r, N)
    emi = (P * r * growth) / (growth - 1)
  }

  const totalPmi = pmi * M
  const totalEmiRepayment = emi * N
  const totalOutflow = totalPmi + totalEmiRepayment

  const values = [emi, totalPmi, totalEmiRepayment, totalOutflow]
  if (!values.every(Number.isFinite)) return null

  return { emi, totalPmi, totalEmiRepayment, totalOutflow, tenureMonths: N, moratoriumMonths: M }
}

/** Rounds to the nearest rupee and formats with Indian digit grouping. */
export function formatINR(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(value))
}

/** Strips everything except digits and a single decimal point. */
export function sanitizeNumeric(raw: string, allowDecimal = true) {
  let cleaned = raw.replace(allowDecimal ? /[^\d.]/g : /\D/g, '')
  if (allowDecimal) {
    const firstDot = cleaned.indexOf('.')
    if (firstDot !== -1) {
      cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, '')
    }
  }
  return cleaned
}
