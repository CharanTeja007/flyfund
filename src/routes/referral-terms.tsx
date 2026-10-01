import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { site } from '@/data/site'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/referral-terms')({
  head: () =>
    seo({
      title: 'Referral Program Terms | FlyFund',
      description: 'Eligibility, qualifying disbursement, reward of up to ₹20,000, payout timing and verification for the FlyFund Referral Program.',
      path: '/referral-terms',
    }),
  component: () => (
    <LegalPage title="Referral Program Terms" updated="30 September 2026">
      <p>
        The FlyFund <Link to="/referral">Referral Program</Link> rewards people who introduce students to FlyFund. These
        terms explain how it works.
      </p>

      <h2>1. Referral name or code</h2>
      <p>
        For a referral to be considered, the referred student must enter the referrer's name or referral code in the{' '}
        <strong>Referral Name / Code</strong> field of the Apply Now form at the time of applying, or the referral must be
        shared with FlyFund before the student applies. Referrals cannot be added after disbursement.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>The referred student must be new to FlyFund and apply through FlyFund.</li>
        <li>Self-referrals are not eligible.</li>
        <li>If the same student is referred by more than one person, the first valid referral recorded by FlyFund applies.</li>
      </ul>

      <h2>3. Qualifying disbursement</h2>
      <p>
        A referral qualifies only after the referred student's education loan, applied for through FlyFund, is approved
        by the lender and successfully disbursed. Applications that are rejected, withdrawn or not disbursed do not
        qualify.
      </p>

      <h2>4. Reward amount</h2>
<p>
  Eligible referrals can earn a cash reward based on the qualifying loan
  disbursement amount. The applicable reward structure is:
</p>

<div className="my-8 overflow-hidden rounded-xl border border-line bg-white">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[520px] border-collapse text-left">
      <thead>
        <tr className="border-b border-line bg-mist/60">
          <th className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            Loan Disbursement Amount
          </th>
          <th className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            Referral Reward
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-line">
          <td className="px-6 py-4 text-sm text-slate sm:px-7">
            ₹10–20 Lakhs
          </td>
          <td className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            ₹5,000
          </td>
        </tr>

        <tr className="border-b border-line">
          <td className="px-6 py-4 text-sm text-slate sm:px-7">
            ₹20–30 Lakhs
          </td>
          <td className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            ₹7,000
          </td>
        </tr>

        <tr className="border-b border-line">
          <td className="px-6 py-4 text-sm text-slate sm:px-7">
            ₹30–48 Lakhs
          </td>
          <td className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            ₹10,000
          </td>
        </tr>

        <tr className="border-b border-line">
          <td className="px-6 py-4 text-sm text-slate sm:px-7">
            ₹48–60 Lakhs
          </td>
          <td className="px-6 py-4 text-sm font-semibold text-navy sm:px-7">
            ₹15,000
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 text-sm text-slate sm:px-7">
            Above ₹60 Lakhs
          </td>
          <td className="px-6 py-4 text-sm font-semibold text-teal-deep sm:px-7">
            ₹20,000
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>
  The applicable reward is determined based on the qualifying loan
  disbursement amount and is subject to successful verification under these
  Referral Program Terms.
</p>

      <h2>5. Payout timing</h2>
<p>
  The applicable referral reward is credited within{' '}
  <strong>24–48 hours after qualifying loan disbursement</strong>,
  subject to completion of verification and receipt of valid payout details.
</p>

      <h2>6. Verification</h2>
      <p>
        FlyFund verifies each referral manually. We may contact the referrer and the referred student to confirm details
        and may request basic information needed to process the payout.
      </p>

      <h2>7. Conditions</h2>
      <ul>
        <li>FlyFund may decline rewards for referrals that are fraudulent, duplicated or made in breach of these terms.</li>
        <li>Rewards are subject to applicable taxes and laws.</li>
        <li>FlyFund may change or end the Referral Program at any time; referrals already qualified before a change will be honoured.</li>
        <li>FlyFund's decision on referral eligibility is final.</li>
      </ul>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
        <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>.
      </p>
    </LegalPage>
  ),
})
