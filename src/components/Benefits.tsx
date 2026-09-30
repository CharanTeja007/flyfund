import { BadgePercent, Compass, Layers, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const benefits = [
  {
    icon: Layers,
    title: '15+ Providers',
    text: 'Explore education-loan options from multiple financial institutions through one application.',
  },
  {
    icon: BadgePercent,
    title: 'Zero Processing Fee',
    text: 'Zero processing fee across the lenders displayed by FlyFund, subject to applicable lender/program terms.',
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: 'With or Without Collateral',
    text: 'Explore secured and unsecured education-loan options depending on eligibility and lender requirements.',
  },
  {
    icon: Compass,
    title: 'Personal Guidance',
    text: 'Get support with the education-loan process, documentation and lender coordination.',
  },
]

// Hairline dividers between cells for 1, 2 and 4 column layouts
const cellBorders = [
  'sm:pl-0',
  'border-t sm:border-t-0 sm:border-l',
  'border-t sm:pl-0 lg:border-t-0 lg:border-l lg:pl-8',
  'border-t sm:border-l lg:border-t-0',
]

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="border-y border-line bg-paper">
      <h2 id="benefits-heading" className="sr-only">
        Why students choose FlyFund
      </h2>
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 80}
            className={`py-10 sm:px-6 lg:px-8 lg:py-14 border-line ${cellBorders[i]}`}
          >
            <b.icon size={22} strokeWidth={1.5} className={b.highlight ? 'text-teal-deep' : 'text-sky'} aria-hidden />
            <h3 className={`mt-5 text-lg ${b.highlight ? 'text-navy' : ''}`}>
              {b.title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{b.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
