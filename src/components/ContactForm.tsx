import { useRef, useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { FormField, Honeypot, describedBy } from './FormField'
import { studyCountries, site } from '@/data/site'
import { submissionTimestamp, submitNetlifyForm, validateEmail, validateName, validatePhone } from '@/lib/forms'

type Fields = { name: string; phone: string; email: string; country: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { name: '', phone: '', email: '', country: '', message: '' }

function validate(f: Fields): Errors {
  const errors: Errors = {}
  const name = validateName(f.name)
  if (name) errors.name = name.replace('full name', 'name')
  const phone = validatePhone(f.phone)
  if (phone) errors.phone = phone
  const email = validateEmail(f.email)
  if (email) errors.email = email.replace('email ID', 'email')
  if (!f.message.trim()) errors.message = 'Please enter a short message.'
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [bot, setBot] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      await submitNetlifyForm('contact', {
        name: fields.name.trim(),
        phone: fields.phone.trim(),
        email: fields.email.trim(),
        country: fields.country,
        message: fields.message.trim(),
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
      <div role="status" className="result-enter py-10 text-center">
        <CheckCircle2 size={36} strokeWidth={1.25} className="mx-auto text-teal-deep" aria-hidden />
        <h3 className="mt-4 text-xl">Message received</h3>
        <p className="mx-auto mt-2 max-w-sm text-slate">
          Thank you for reaching out. A FlyFund representative will contact you shortly.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary btn-sm mt-6">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Honeypot value={bot} onChange={setBot} />

      <FormField id="contact-name" label="Name" required error={errors.name}>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="field-input"
          value={fields.name}
          onChange={set('name')}
          maxLength={100}
          required
          aria-invalid={!!errors.name}
          aria-describedby={describedBy('contact-name', errors.name)}
        />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="contact-phone" label="Phone" required error={errors.phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field-input"
            value={fields.phone}
            onChange={set('phone')}
            maxLength={20}
            required
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('contact-phone', errors.phone)}
          />
        </FormField>
        <FormField id="contact-email" label="Email" required error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field-input"
            value={fields.email}
            onChange={set('email')}
            maxLength={120}
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('contact-email', errors.email)}
          />
        </FormField>
      </div>
      <FormField id="contact-country" label="Country" optional>
        <select id="contact-country" name="country" className="field-input" value={fields.country} onChange={set('country')}>
          <option value="">Select your study destination</option>
          {studyCountries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="contact-message" label="Message" required error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="field-input min-h-[7.5rem] resize-y"
          value={fields.message}
          onChange={set('message')}
          maxLength={2000}
          required
          aria-invalid={!!errors.message}
          aria-describedby={describedBy('contact-message', errors.message)}
        />
      </FormField>

      {status === 'error' && (
        <div role="alert" className="rounded-md border border-[#ecd3cf] bg-[#fbf4f3] px-4 py-3 text-sm leading-relaxed text-[#7d3f37]">
          We couldn't send your message just now. Please try again, or email us at{' '}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
            {site.email}
          </a>
          .
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
