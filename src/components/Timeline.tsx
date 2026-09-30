import { Reveal } from './Reveal'

interface Step {
  title: string
  text: string
}

/** Numbered process timeline: vertical on mobile/tablet, horizontal on desktop. */
export function Timeline({ steps }: { steps: Step[] }) {
  const cols = steps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-5'
  return (
    <ol className={`relative grid gap-0 lg:gap-8 ${cols}`}>
      {/* desktop connector */}
      <span aria-hidden className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-line-strong lg:block" />
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 110}
          className="relative grid grid-cols-[2.75rem_1fr] gap-5 pb-10 last:pb-0 lg:block lg:pb-0"
        >
          {/* mobile connector */}
          {i < steps.length - 1 && (
            <span aria-hidden className="absolute bottom-0 left-[1.375rem] top-11 w-px bg-line-strong lg:hidden" />
          )}
          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-white text-sm font-semibold tabular-nums text-navy shadow-soft">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="pt-2 lg:pt-7 lg:pr-4">
            <h3 className="text-[1.0625rem]">{s.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
