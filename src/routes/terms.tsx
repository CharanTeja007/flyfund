import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { site } from '@/data/site'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/terms')({
  head: () =>
    seo({
      title: 'Terms & Conditions | FlyFund',
      description: 'The terms that apply when you use the FlyFund website and education-loan assistance services.',
      path: '/terms',
    }),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="30 September 2026">
      <p>By using this website or our services, you agree to these terms. Please read them alongside our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/disclaimer">Disclaimer</Link>.</p>

      <h2>Our service</h2>
      <p>
        FlyFund provides education-loan assistance. We help students explore available lending options, understand the
        process and coordinate documentation with lenders. FlyFund is not a lender and does not itself approve, sanction
        or disburse loans.
      </p>

      <h2>Information on this website</h2>
      <p>
        Lender details, interest rates, loan amounts and fees shown on this website are provided for guidance and
        comparison. They may change and are subject to each lender's policies and final loan terms. The Loan Calculator
        provides estimates only.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate, complete and current information</li>
        <li>Review the lender's loan agreement and terms carefully before accepting any offer</li>
        <li>Use this website lawfully and not attempt to disrupt or misuse it</li>
      </ul>

      <h2>No guarantee</h2>
      <p>
        We do not guarantee loan approval, a specific interest rate, loan amount, collateral outcome or disbursement
        timeline. These decisions are made solely by the respective lender.
      </p>

      <h2>Referral Program</h2>
      <p>Referral rewards are governed by the <Link to="/referral-terms">Referral Program Terms</Link>.</p>

      <h2>Intellectual property</h2>
      <p>The FlyFund name, logo and website content belong to FlyFund. Lender names are used only to identify the respective institutions.</p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, FlyFund is not liable for decisions made by lenders or for losses arising from
        reliance on estimates or general information on this website.
      </p>

      <h2>Changes and governing law</h2>
      <p>
        We may update these terms from time to time; the latest version will always be on this page. These terms are
        governed by the laws of India, with courts in Hyderabad, Telangana having jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  ),
})
