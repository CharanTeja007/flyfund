import { Link, createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { seo } from '@/lib/seo'
import { site, whatsappLink } from '@/data/site'
import { ApplyForm } from '@/components/ApplyForm'

export const Route = createFileRoute('/apply')({
  head: () =>
    seo({
      title: 'Apply Now | Start Your Education Loan Journey | FlyFund',
      description:
        'Apply once with FlyFund to explore study-abroad education-loan options from 15+ providers with zero processing fee. Share a few details and our team will contact you.',
      path: '/apply',
    }),
  component: Apply,
})

const points = [
  'One application for 15+ providers',
  'Zero processing fee across displayed lenders',
  'Secured and unsecured options explored',
  'Personal guidance on documentation',
]

function Apply() {
  return (
    <section className="bg-gradient-to-b from-mist/70 to-white">
      <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
        <div className="hero-enter">
          <p className="eyebrow">Apply Now</p>
          <h1 className="mt-5 text-[2.125rem] leading-[1.12] sm:text-5xl">Start Your Education Loan Journey</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
            Tell us a few details about your study-abroad plans and we'll help you explore suitable education-loan
            options.
          </p>
          <ul className="mt-10 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[1rem] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f2f1] text-teal-deep">
                  <Check size={12} strokeWidth={2.5} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-12 border-t border-line pt-8 text-sm text-slate">
            <p>Prefer to talk first?</p>
            <p className="mt-2">
              <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-navy underline underline-offset-4">
                {site.phones[0].display}
              </a>
              <span className="mx-2">·</span>
              <a
                href={whatsappLink(site.phones[0].wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline underline-offset-4"
              >
                WhatsApp
              </a>
              <span className="mx-2">·</span>
              <Link to="/contact" className="font-semibold text-navy underline underline-offset-4">
                More options
              </Link>
            </p>
          </div>
        </div>

        <div className="hero-enter">
          <div className="rounded-xl border border-line bg-white p-6 shadow-lift sm:p-10">
            <h2 className="sr-only">Application form</h2>
            <ApplyForm />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate">
            Your details are used only to contact you about education-loan assistance. See our{' '}
            <Link to="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
