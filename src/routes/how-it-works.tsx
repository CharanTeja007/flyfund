import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { processSteps } from '@/data/steps'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { Timeline } from '@/components/Timeline'
import { FinalCta } from '@/components/FinalCta'

export const Route = createFileRoute('/how-it-works')({
  head: () =>
    seo({
      title: 'How It Works | Study Abroad Education Loan Process | FlyFund',
      description:
        'See how FlyFund guides you from one simple application to lender approval and disbursement — profile review, provider shortlisting and documentation support for your overseas education loan.',
      path: '/how-it-works',
    }),
  component: HowItWorks,
})

const details = [
  'Share your name, contact details, study destination and the amount you expect to need. It takes a couple of minutes.',
  'A FlyFund team member looks at your admission stage, course, destination and co-applicant situation to understand your requirement.',
  'Based on your profile, we help you understand which secured or unsecured options from available providers may suit you.',
  'We guide you on the documents each lender asks for and help coordinate your application so nothing is missed.',
  'The lender makes the final decision. If approved, disbursement follows the lender’s own policies, terms and schedule.',
]

function HowItWorks() {
  return (
    <>
      <PageHeader eyebrow="How It Works" title="A clear path from application to disbursement">
        <p>One application, personal guidance at every step, and zero processing fee across the lenders displayed by FlyFund.</p>
      </PageHeader>

      <section aria-label="Process overview" className="section">
        <div className="container-page">
          <Timeline steps={processSteps} />
        </div>
      </section>

      <section aria-labelledby="detail-heading" className="section border-t border-line bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">In detail</p>
            <h2 id="detail-heading" className="mt-4 text-[1.875rem] sm:text-[2.375rem]">
              What happens at each step
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
              Final eligibility, interest rate, loan amount and approval are always determined by the respective lender.
            </p>
            <Link to="/apply" className="btn btn-primary mt-8">
              Apply Now
            </Link>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-8">
                <span className="text-sm font-semibold tabular-nums text-teal-deep">{String(i + 1).padStart(2, '0')} —</span>
                <div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate">{details[i]}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="section pb-0">
        <FinalCta />
      </div>
    </>
  )
}
