import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { site } from '@/data/site'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/privacy-policy')({
  head: () =>
    seo({
      title: 'Privacy Policy | FlyFund',
      description: 'How FlyFund collects, uses and protects the information you share through our application and contact forms.',
      path: '/privacy-policy',
    }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="30 September 2026">
      <p>
        This policy explains how FlyFund handles the information you share with us through this website, including the
        Apply Now and Contact forms.
      </p>

      <h2>Information we collect</h2>
      <p>When you submit a form, we collect only what you enter:</p>
      <ul>
        <li>Your name, phone number and email address</li>
        <li>Your preferred study country</li>
        <li>A referral name or code, if you provide one</li>
        <li>Any message you choose to send us</li>
        <li>The date and time of your submission</li>
      </ul>
      <p>We do not ask for passwords, bank details, identity documents or payment information on this website.</p>

      <h2>How we use your information</h2>
      <ul>
        <li>To contact you about education-loan assistance and related services you asked about</li>
        <li>To understand your requirements and help you explore suitable lender options</li>
        <li>To verify referrals under the Referral Program</li>
      </ul>

      <h2>Sharing with lenders</h2>
      <p>
        With your agreement, we may share relevant details with the lender(s) you choose to apply with, so they can
        assess your application. Each lender handles your information under its own privacy policy.
      </p>
      <p>We do not sell your personal information.</p>

      <h2>Storage and security</h2>
      <p>
        Form submissions are transmitted over a secure (HTTPS) connection and stored with our website hosting provider's
        form-management service. Access is limited to authorised FlyFund team members. We keep information only for as
        long as needed to assist you or as required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the information you have shared, or to stop contacting you, at any
        time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        FlyFund, {site.address.join(' ')} · <a href={`mailto:${site.email}`}>{site.email}</a> ·{' '}
        <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>
      </p>
    </LegalPage>
  ),
})
