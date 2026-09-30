import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { footerDisclaimer } from '@/data/site'
import { lenderDisclaimer } from '@/data/lenders'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/disclaimer')({
  head: () =>
    seo({
      title: 'Disclaimer | FlyFund',
      description: 'FlyFund facilitates access to education-loan options and guidance. Final loan decisions are made by the respective lenders.',
      path: '/disclaimer',
    }),
  component: () => (
    <LegalPage title="Disclaimer" updated="30 September 2026">
      <p>{footerDisclaimer}</p>

      <h2>FlyFund's role</h2>
      <p>
        FlyFund helps students explore education-loan options and provides guidance through the application and
        documentation process. FlyFund is not a bank or lender. All lending decisions — including approval, sanction
        amount, interest rate, fees, collateral requirements, repayment terms and disbursement — are made by the
        respective lender.
      </p>

      <h2>Lender information</h2>
      <p>{lenderDisclaimer}</p>
      <p>
        Lender names are shown for identification and comparison only. Zero processing fee applies across the lenders
        displayed by FlyFund, subject to applicable lender/program terms.
      </p>

      <h2>Loan Calculator</h2>
      <p>
        The calculator provides an estimate based on the information entered by the user. Actual repayment amounts may
        vary depending on the lender's interest calculation method, moratorium terms, disbursement schedule, PMI
        structure, fees and final loan agreement.
      </p>

      <h2>Testimonials</h2>
      <p>
        Testimonials marked "Sample" are illustrative content and are not verified customer reviews. They will be
        replaced with verified student feedback when available.
      </p>

      <h2>No guarantee</h2>
      <p>
        Nothing on this website is a guarantee or offer of a loan. Eligibility for secured or unsecured education loans
        depends on each applicant's profile and the lender's criteria.
      </p>
    </LegalPage>
  ),
})
