import { useRef, useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { FormField, Honeypot, describedBy } from './FormField'
import { studyCountries, site } from '@/data/site'
import { submissionTimestamp, submitNetlifyForm, validateEmail, validateName, validatePhone } from '@/lib/forms'

type Fields = { name: string; phone: string; email: string; country: string; referral: string }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { name: '', phone: '', email: '', country: '', referral: '' }

function validate(f: Fields): Errors {
  const errors: Errors = {}
  const name = validateName(f.name)
  if (name) errors.name = name
  const phone = validatePhone(f.phone)
  if (phone) errors.phone = phone
  const email = validateEmail(f.email)
  if (email) errors.email = email
  if (!f.country) errors.country = 'Please select your preferred study country.'
  if (f.referral.length > 120) errors.referral = 'Please keep the referral name / code under 120 characters.'
  return errors
}

export function ApplyForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [bot, setBot] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      await submitNetlifyForm('apply', {
        name: fields.name.trim(),
        phone: fields.phone.trim(),
        email: fields.email.trim(),
        country: fields.country,
        referral: fields.referral.trim(),
        submitted_at: submissionTimestamp(),
        'bot-field': bot,
      })
      setStatus('success')
      setFields(empty)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="result-enter rounded-lg border border-[#d6e6e4] bg-[#f3f8f7] p-8 text-center sm:p-12">
        <CheckCircle2 size={40} strokeWidth={1.25} className="mx-auto text-teal-deep" aria-hidden />
        <h2 className="mt-5 text-2xl">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-md text-[1.0625rem] leading-relaxed text-slate">
          Thank you! Your details have been received. A FlyFund representative will contact you shortly.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary btn-sm mt-8">
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      name="apply"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="apply" />
      <Honeypot value={bot} onChange={setBot} />

      <FormField id="apply-name" label="Full Name" required error={errors.name}>
        <input
          id="apply-name"
          name="name"
          type="text"
          autoComplete="name"
          className="field-input"
          placeholder="As per your passport"
          value={fields.name}
          onChange={set('name')}
          required
          maxLength={100}
          aria-invalid={!!errors.name}
          aria-describedby={describedBy('apply-name', errors.name)}
        />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="apply-phone" label="Phone Number" required error={errors.phone}>
          <input
            id="apply-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+91 98765 43210"
            value={fields.phone}
            onChange={set('phone')}
            required
            maxLength={20}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('apply-phone', errors.phone)}
          />
        </FormField>
        <FormField id="apply-email" label="Email ID" required error={errors.email}>
          <input
            id="apply-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field-input"
            placeholder="you@example.com"
            value={fields.email}
            onChange={set('email')}
            required
            maxLength={120}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('apply-email', errors.email)}
          />
        </FormField>
      </div>

      <FormField id="apply-country" label="Preferred Study Country" required error={errors.country}>
        <select
          id="apply-country"
          name="country"
          className="field-input"
          value={fields.country}
          onChange={set('country')}
          required
          aria-invalid={!!errors.country}
          aria-describedby={describedBy('apply-country', errors.country)}
        >
          <option value="" disabled>
            Select a country
          </option>
          {studyCountries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id="apply-referral"
        label="Referral Name / Code"
        optional
        hint="If someone referred you to FlyFund, enter their name or referral code here."
        error={errors.referral}
      >
        <input
          id="apply-referral"
          name="referral"
          type="text"
          className="field-input"
          value={fields.referral}
          onChange={set('referral')}
          maxLength={120}
          aria-invalid={!!errors.referral}
          aria-describedby={describedBy('apply-referral', errors.referral, true)}
        />
      </FormField>

      {status === 'error' && (
        <div role="alert" className="rounded-md border border-[#ecd3cf] bg-[#fbf4f3] px-4 py-3 text-sm leading-relaxed text-[#7d3f37]">
          We couldn't submit your details just now. Please check your connection and try again, or reach us directly at{' '}
          <a href={`tel:${site.phones[0].tel}`} className="font-semibold underline underline-offset-2">
            {site.phones[0].display}
          </a>
          .
        </div>
      )}

      <div className="pt-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto sm:min-w-[14rem]" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden /> Submitting…
            </>
          ) : (
            'Submit Application'
          )}
        </button>
        <p className="mt-4 text-xs leading-relaxed text-slate">
          By submitting this form, you agree to be contacted by FlyFund regarding education-loan assistance and related
          services.
        </p>
      </div>
    </form>
  )
}
