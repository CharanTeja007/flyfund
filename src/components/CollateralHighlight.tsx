import { Link } from '@tanstack/react-router'
import { Reveal } from './Reveal'

export function CollateralHighlight() {
  return (
    <Reveal className="grid gap-8 rounded-xl border border-line bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:p-14">
      <div>
        <p className="eyebrow">Collateral</p>
        <h2 className="mt-4 text-[1.875rem] sm:text-[2.25rem]">Worried About Collateral?</h2>
      </div>
      <div>
        <p className="text-xl font-medium leading-snug text-navy">
          You may still have education-loan options without traditional collateral.
        </p>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
          Unsecured education-loan options may be available for eligible students depending on factors such as
          university, course, academic profile, country, co-applicant profile and lender policy.
        </p>
        <Link to="/apply" className="btn btn-secondary mt-7">
          Check your options
        </Link>
      </div>
    </Reveal>
  )
}
