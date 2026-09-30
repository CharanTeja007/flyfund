import type { ReactNode } from 'react'

export function FormField({
  id,
  label,
  required,
  optional,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  hint?: ReactNode
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <span className="ml-0.5 text-teal-deep" aria-hidden>
            *
          </span>
        )}
        {optional && <span className="ml-1.5 font-normal text-slate">(Optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="field-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function describedBy(id: string, error?: string, hint?: boolean) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

/** Honeypot field for Netlify spam filtering — hidden from people, visible to naive bots. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <p className="hidden" aria-hidden="true">
      <label>
        Leave this field empty
        <input name="bot-field" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </p>
  )
}
