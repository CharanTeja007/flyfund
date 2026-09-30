import { Link, createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { seo } from '@/lib/seo'
import { cdn, cdnSrcSet } from '@/lib/image'
import { PageHeader, SectionHeading } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { CollateralHighlight } from '@/components/CollateralHighlight'
import { LenderDisclaimer, LenderTable, LenderTicker } from '@/components/Lenders'
import { FinalCta } from '@/components/FinalCta'

export const Route = createFileRoute('/education-loans')({
  head: () =>
    seo({
      title: 'Education Loans for Study Abroad | Secured & Unsecured Options | FlyFund',
      description:
        'Explore secured and unsecured overseas education loans for the USA, UK, Canada, Australia, Germany, Ireland and more — compare 15+ providers with zero processing fee through FlyFund.',
      path: '/education-loans',
      image: '/img/campus-students.jpg',
    }),
  component: EducationLoans,
})

const coverage = [
  'Tuition fees',
  'University fees',
  'Accommodation',
  'Living expenses',
  'Travel expenses',
  'Books/study materials',
  'Other eligible education-related expenses',
]

const types = [
  {
    label: 'Secured',
    title: 'Secured Education Loans',
    text: 'Education financing where collateral/security may be required depending on lender policy.',
  },
  {
    label: 'Unsecured',
    title: 'Unsecured Education Loans',
    text: 'Education financing options that may not require traditional collateral, subject to eligibility and lender criteria.',
  },
]

const IMG = '/img/campus-students.jpg'

function EducationLoans() {
  return (
    <>
      <PageHeader eyebrow="Education Loans" title="Education Loans for Your Global Education Journey">
        <p>
          FlyFund helps students explore suitable education-loan options for studying abroad through multiple financial
          institutions — for Master's, Bachelor's, MBA, MS / MSc / MTech, PhD and other higher-education programs.
        </p>
      </PageHeader>

      <section aria-labelledby="loan-types" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Loan types" title={<span id="loan-types">Two ways to fund your studies</span>} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {types.map((t, i) => (
              <Reveal key={t.title} delay={i * 100} className="bg-white p-8 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep">
                  {t.label}
                </span>
                <h3 className="mt-6 text-2xl">{t.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="coverage" className="section border-y border-line bg-paper">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <picture>
              <source type="image/avif" srcSet={cdnSrcSet(IMG, [640, 960, 1264], 'avif')} sizes="(min-width: 1024px) 560px, 92vw" />
              <source type="image/webp" srcSet={cdnSrcSet(IMG, [640, 960, 1264], 'webp')} sizes="(min-width: 1024px) 560px, 92vw" />
              <img
                src={cdn(IMG, 960)}
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
                alt="Two students walking together through a university campus abroad"
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-soft"
              />
            </picture>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Coverage" title={<span id="coverage">What Education Loans May Cover</span>} />
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {coverage.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[1.0625rem] text-ink">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f2f1] text-teal-deep">
                    <Check size={12} strokeWidth={2.5} aria-hidden />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-teal/60 pl-4 text-sm leading-relaxed text-slate">
              Actual coverage depends on the lender and the approved loan structure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <CollateralHighlight />
        </div>
      </section>

      <section aria-labelledby="compare" className="section border-t border-line pt-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Providers" title={<span id="compare">Compare Education Loan Options</span>}>
              Multiple providers. One application. Zero processing fee.
            </SectionHeading>
            <Link to="/loan-calculator" className="btn btn-secondary btn-sm self-start md:self-auto">
              Estimate your EMI
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <LenderTicker />
        </div>
        <div className="container-page mt-12">
          <Reveal className="mx-auto max-w-4xl">
            <LenderTable />
          </Reveal>
          <LenderDisclaimer />
        </div>
      </section>

      <FinalCta />
    </>
  )
}
