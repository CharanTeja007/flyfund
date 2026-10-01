/**
 * Netlify Forms submission helper.
 *
 * Forms are registered at build time via the static skeleton in
 * `public/__forms.html`. Submissions must POST to that static path (not `/`),
 * otherwise the SSR function intercepts the request before Netlify's form
 * handler sees it.
 */
export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>,
) {
  const body = new URLSearchParams({
    'form-name': formName,
    ...fields,
  }).toString()

  const res = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!res.ok) {
    throw new Error(`Form submission failed (${res.status})`)
  }
}

/** Submission timestamp in a spreadsheet-friendly, India-local format: 2026-09-30 14:05:12 IST */
export function submissionTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')} IST`
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEmail(value: string) {
  if (!value.trim()) return 'Please enter your email ID.'
  if (!EMAIL_RE.test(value.trim())) return 'Please enter a valid email address.'
  return ''
}

export function validatePhone(value: string) {
  const v = value.trim()
  if (!v) return 'Please enter your phone number.'
  if (!/^\+?[\d\s-]+$/.test(v)) return 'Phone number can contain only digits, spaces, "+" and "-".'
  const digits = v.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 15) return 'Please enter a valid phone number (10–15 digits).'
  return ''
}

export function validateName(value: string) {
  const v = value.trim()
  if (!v) return 'Please enter your full name.'
  if (v.length < 2) return 'Please enter your full name.'
  return ''
}
