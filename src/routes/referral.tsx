import { Link, createFileRoute } from '@tanstack/react-router'
import { Clock, IndianRupee } from 'lucide-react'
import { seo } from '@/lib/seo'
import { referralSteps, referralTermsNote } from '@/data/steps'
import { site, whatsappLink } from '@/data/site'
import { Timeline } from '@/components/Timeline'
import { Reveal } from '@/components/Reveal'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const Route = createFileRoute('/referral')({
  head: () =>
    seo({
      title: 'Referral Program | Refer a Student, Earn Up to ₹20,000 | FlyFund',
      description:
        'Refer a student planning to study abroad to FlyFund and earn a cash referral reward of up to ₹20,000 after successful qualifying loan disbursement.',
      path: '/referral',
    }),
  component: Referral,
})

const referMessage =
  "Hi FlyFund, I'd like to refer a student for an education loan. Student's name: "

function Referral() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-mist/80 to-white">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.25fr_1fr] lg:py-24">
          <div className="hero-enter max-w-2xl">
            <p className="eyebrow">Referral Program</p>
            <h1 className="mt-5 text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
              Refer a Student.
              <br />
              <span className="text-teal-deep">Earn Up to ₹20,000.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Refer a student to FlyFund and earn a cash referral reward of up to ₹20,000 after successful qualifying loan
              disbursement.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(site.phones[0].wa, referMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-8"
              >
                Refer a Student
              </a>
              <Link to="/referral-terms" className="btn btn-secondary">
                Referral Terms
              </Link>
            </div>
          </div>

          <div className="hero-enter">
            <div className="rounded-xl border border-line bg-white p-8 shadow-lift sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                  <IndianRupee size={20} strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">Cash reward</p>
                  <p className="mt-1 text-[2.75rem] font-medium leading-none tracking-[-0.02em] text-navy">Up to ₹20,000</p>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-4 border-t border-line pt-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f2f1] text-teal-deep">
                  <Clock size={20} strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">Fast payout</p>
                  <p className="mt-1 text-xl font-semibold leading-snug text-navy">
                    Reward credited within 24–48 hours after disbursement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ref-steps" className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">How referrals work</p>
            <h2 id="ref-steps" className="mt-4 text-[1.875rem] sm:text-[2.375rem]">
              Three simple steps
            </h2>
          </div>
          <div className="mt-14">
            <Timeline steps={referralSteps} />
          </div>
      <section aria-labelledby="reward-structure" className="mt-20">
  <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
    
    {/* Left side */}
    <div>
      <p className="eyebrow">Reward Structure</p>

      <h2
        id="reward-structure"
        className="mt-4 text-[1.875rem] leading-tight sm:text-[2.375rem]"
      >
        <span className="text-teal-deep">Up to ₹20,000</span>
        <br />
        for a successful referral
      </h2>

      <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-slate">
        Reward credited within{" "}
        <strong className="font-semibold text-ink">24–48 hours</strong>{" "}
        after qualifying disbursement.
      </p>
    </div>

    {/* Right side - Reward table */}
    <div className="overflow-hidden rounded-xl border border-line bg-white">
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
  </div>
</section>
          /*<Reveal className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-8 sm:p-10">
              <p className="text-sm text-slate">Referral reward</p>
              <p className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">Up to ₹20,000</p>
            </div>
            <div className="bg-paper p-8 sm:p-10">
              <p className="text-sm text-slate">Credited</p>
              <p className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">24–48 hours</p>
              <p className="mt-1 text-sm text-slate">after qualifying disbursement</p>
            </div>
          </Reveal> */
          <p className="mt-6 text-sm text-slate">
            {referralTermsNote}{' '}
            <Link to="/referral-terms" className="font-semibold text-navy underline underline-offset-4">
              Read the referral terms
            </Link>
            .
          </p>
        </div>
      </section>

      <section aria-labelledby="ref-how" className="section border-t border-line bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">For the student</p>
            <h2 id="ref-how" className="mt-4 text-[1.75rem] sm:text-[2.125rem]">
              Were you referred by someone?
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
              When you apply, enter the name or referral code of the person who referred you in the{' '}
              <span className="font-semibold text-ink">Referral Name / Code</span> field. FlyFund verifies each referral
              manually.
            </p>
            <Link to="/apply" className="btn btn-primary mt-8">
              Apply Now
            </Link>
          </div>
          <div>
            <p className="eyebrow">For the referrer</p>
            <h2 className="mt-4 text-[1.75rem] sm:text-[2.125rem]">Know a student going abroad?</h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
              Share the student's name and contact details with us on WhatsApp or by phone, and ask them to mention your
              name when they apply.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(site.phones[0].wa, referMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <WhatsAppIcon size={18} className="text-[#3f9a6d]" /> Refer on WhatsApp
              </a>
              <a href={`tel:${site.phones[0].tel}`} className="btn btn-secondary">
                Call {site.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
