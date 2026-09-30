import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { LoanCalculator } from '@/components/LoanCalculator'
import { FinalCta } from '@/components/FinalCta'

export const Route = createFileRoute('/loan-calculator')({
  head: () =>
    seo({
      title: 'Education Loan EMI Calculator with Moratorium & PMI | FlyFund',
      description:
        'Estimate your study-abroad education loan EMI after moratorium, total PMI paid during the moratorium and your estimated total repayment with the FlyFund loan calculator.',
      path: '/loan-calculator',
    }),
  component: CalculatorPage,
})

function CalculatorPage() {
  return (
    <>
      <PageHeader eyebrow="Loan Calculator" title="Estimate Your Education Loan Payments">
        <p>
          Enter your loan details, including the PMI (pre-monthly instalment) amount provided by your bank or lender, to
          estimate what you may pay during and after the moratorium.
        </p>
      </PageHeader>

      <section className="section pt-14 lg:pt-16">
        <div className="container-page">
          <LoanCalculator />
          <p className="mt-10 max-w-4xl text-xs leading-relaxed text-slate sm:text-[0.8125rem]">
            This calculator provides an estimate based on the information entered by the user. Actual repayment amounts
            may vary depending on the lender's interest calculation method, moratorium terms, disbursement schedule, PMI
            structure, fees and final loan agreement.
          </p>
        </div>
      </section>

      <FinalCta title="Want help understanding your numbers?" text="Talk to FlyFund about lender options that may fit your plans." />
    </>
  )
}
