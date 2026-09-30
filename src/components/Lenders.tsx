import { lenderDisclaimer, lenders } from '@/data/lenders'
import { Reveal } from './Reveal'

const pillTones = [
  'bg-mist text-navy border-[#d9e8ee]',
  'bg-[#edf4f3] text-teal-deep border-[#d6e6e4]',
  'bg-[#f1f5fa] text-[#35597a] border-[#dde6f0]',
  'bg-[#f4f7f2] text-[#4c6a55] border-[#e1eadc]',
]

/** Continuous left-to-right lender name banner. Text-only — no lender logos are used. */
export function LenderTicker() {
  const loop = [...lenders, ...lenders]
  return (
    <div className="ticker relative overflow-hidden py-2" role="region" aria-label="Education loan providers">
      <ul className="sr-only">
        {lenders.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
      <div className="ticker-track" aria-hidden="true">
        {loop.map((l, i) => (
          <span
            key={`${l.name}-${i}`}
            className={`mx-2 inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold tracking-[0.01em] sm:text-[0.9375rem] ${
              pillTones[i % pillTones.length]
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            {l.name}
          </span>
        ))}
      </div>
    </div>
  )
}

function FeePill() {
  return (
    <span className="inline-flex items-center rounded-full bg-[#e8f2f1] px-3 py-1 text-sm font-semibold text-teal-deep">
      0%
    </span>
  )
}

/** Lender comparison. Table on tablet/desktop, stacked rows on mobile. */
export function LenderTable() {
  return (
    <div>
      {/* Desktop / tablet */}
      <div className="hidden overflow-hidden rounded-lg border border-line bg-white shadow-soft md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Education loan comparison: lender, loan amount, interest rate and processing fee
          </caption>
          <thead>
            <tr className="border-b border-line bg-paper">
              {['Lender', 'Loan Amount', 'Interest Rate', 'Processing Fee'].map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate lg:px-8 ${
                    i === 0 ? '' : 'text-right'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lenders.map((l) => (
              <tr
                key={l.name}
                className="border-b border-line transition-colors duration-200 last:border-b-0 hover:bg-mist/50"
              >
                <th scope="row" className="px-6 py-4 font-semibold text-navy lg:px-8">
                  {l.name}
                </th>
                <td className="px-6 py-4 text-right tabular-nums text-ink lg:px-8">{l.loanAmount}</td>
                <td className="px-6 py-4 text-right tabular-nums text-ink lg:px-8">
                  {l.interestRate}
                </td>
                <td className="px-6 py-4 text-right lg:px-8">
                  <FeePill />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-white shadow-soft md:hidden">
        {lenders.map((l) => (
          <li key={l.name} className="px-5 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-navy">{l.name}</p>
              <FeePill />
            </div>
            <dl className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="col-span-2">
                <dt className="text-xs text-slate">Loan Amount</dt>
                <dd className="font-medium tabular-nums text-ink">{l.loanAmount}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate">Interest Rate</dt>
                <dd className="font-medium tabular-nums text-ink">{l.interestRate}</dd>
              </div>
              <div className="sr-only">
                <dt>Processing Fee</dt>
                <dd>{l.processingFee}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate md:hidden">Processing fee shown on the right of each lender.</p>
    </div>
  )
}

export function LenderDisclaimer() {
  return (
    <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate sm:text-[0.8125rem]">
      {lenderDisclaimer}
    </p>
  )
}

export function ZeroFeeHighlight() {
  return (
    <Reveal className="relative mt-16 overflow-hidden rounded-xl border border-[#d6e6e4] bg-gradient-to-br from-[#f1f7f6] via-white to-mist px-6 py-12 sm:px-12 lg:mt-20 lg:px-16 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="flex items-baseline gap-3">
          <span className="text-[4.5rem] font-light leading-none tracking-[-0.04em] text-navy sm:text-[6rem]">0%</span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-deep">
            Processing
            <br />
            Fee
          </span>
        </div>
        <div className="lg:border-l lg:border-[#d6e6e4] lg:pl-16">
          <h3 className="text-2xl sm:text-[2rem]">Zero Processing Fee</h3>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-slate">
            FlyFund helps students explore education-loan options with zero processing fee across the lenders
            displayed on this website, subject to applicable lender/program terms.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
