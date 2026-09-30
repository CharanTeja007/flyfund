import type { ReactNode } from 'react'

/** Calm, left-aligned page introduction used on inner pages. */
export function PageHeader({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  aside?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-mist/70 to-white">
      <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:py-24">
        <div className="hero-enter max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-[2.125rem] leading-[1.12] sm:text-5xl lg:text-[3.25rem]">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{children}</div>}
        </div>
        {aside && <div className="hero-enter lg:justify-self-end">{aside}</div>}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'left',
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
  as?: 'h2' | 'h3'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>}
      <Tag className="mt-4 text-[1.875rem] sm:text-[2.375rem]">{title}</Tag>
      {children && <div className="mt-4 text-[1.0625rem] leading-relaxed text-slate">{children}</div>}
    </div>
  )
}
