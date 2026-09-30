import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { Reveal } from './Reveal'
import { SectionHeading } from './PageHeader'

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .replace(/[^A-Za-z]/g, '')
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  const hasSamples = testimonials.some((t) => t.isSample)
  return (
    <section aria-labelledby="testimonials-heading" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Student stories" title={<span id="testimonials-heading">Students Moving Closer to Their Dreams</span>} />
          {hasSamples && (
            <p className="max-w-xs text-xs leading-relaxed text-slate md:text-right">
              Sample testimonials shown for illustration. Verified student stories will be published here.
            </p>
          )}
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={(i % 3) * 90}
              className={`flex ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <figure className="flex w-full flex-col rounded-lg border border-line bg-white p-7 shadow-soft transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-lift lg:p-8">
              <Quote size={20} strokeWidth={1.5} className="text-teal" aria-hidden />
              <blockquote className="mt-5 flex-1 text-[1rem] leading-[1.75] text-ink">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-sm font-semibold text-navy"
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-slate">
                    {t.program} • {t.country}
                  </p>
                </div>
                {t.isSample && (
                  <span className="ml-auto rounded-full border border-line px-2.5 py-0.5 text-[0.6875rem] font-medium text-slate">
                    Sample
                  </span>
                )}
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
