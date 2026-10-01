import { createFileRoute } from '@tanstack/react-router'
import { Compass, Handshake, Layers, GraduationCap } from 'lucide-react'
import { seo } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { FinalCta } from '@/components/FinalCta'

export const Route = createFileRoute('/about')({
  head: () =>
    seo({
      title: 'About FlyFund | Education Loan Assistance for Study Abroad',
      description:
        'FlyFund helps students planning to study abroad explore education-loan options from multiple financial institutions through a simpler and more guided process.',
      path: '/about',
    }),
  component: About,
})

const values = [
  { icon: Handshake, title: 'Trust', text: 'Clear and transparent communication.' },
  { icon: Compass, title: 'Guidance', text: 'Helping students understand the education-loan journey.' },
  { icon: Layers, title: 'Choice', text: 'Access to multiple lender options.' },
  {
    icon: GraduationCap,
    title: 'Student First',
    text: "Keeping the student's education journey at the centre of the process.",
  },
]

function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Helping Students Fund Their Global Dreams">
        <p>
          FlyFund helps students planning to study abroad explore education-loan options from multiple financial
          institutions through a simpler and more guided process.
        </p>
      </PageHeader>

      <section aria-labelledby="values-heading" className="section">
        <div className="container-page">
          <p className="eyebrow">Our values</p>
          <h2 id="values-heading" className="mt-4 text-[1.875rem] sm:text-[2.375rem]">
            What guides our work
          </h2>

          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="border-t border-line-strong pt-7">
                <v.icon size={22} strokeWidth={1.5} className="text-teal-deep" aria-hidden />
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-slate">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <h2 className="text-[1.75rem] sm:text-[2.125rem]">What we do</h2>

          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-slate">
            <p>
              Choosing an education loan for studying abroad means comparing lenders, understanding collateral
              requirements and preparing documents — often while also managing admissions and visas.
            </p>

            <p>
              FlyFund brings this into one simple application. We help you explore options from multiple providers,
              with zero processing fee across the lenders displayed on our website, and guide you through documentation
              and lender coordination.
            </p>

            <p>
              Final eligibility, interest rates, loan amounts and approval are always decided by the respective lender.
              Our role is to make the journey clearer and simpler for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section aria-labelledby="difference-heading" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="eyebrow">Our Difference</p>

            <h2
              id="difference-heading"
              className="mt-4 text-[1.875rem] leading-tight sm:text-[2.375rem]"
            >
              No Unnecessary Agent Commissions
            </h2>
          </div>

          <div>
            <p className="text-[1.125rem] leading-relaxed text-slate">
              Across the education-loan ecosystem, students may encounter platforms or intermediaries that add
              significant charges in the name of agent or consultancy commissions. FlyFund does not support or
              encourage unnecessary charges of this kind.
            </p>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate">
              Our goal is to keep the process transparent from the beginning. We clearly communicate the available
              lender options, the applicable information, the process and the next steps so students and parents can
              make informed decisions without hidden surprises.
            </p>
          </div>
        </div>

        <div className="container-page mt-14 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            'No Unnecessary Agent Commission',
            'Complete Transparency',
            'Clear Communication',
            'Student First',
          ].map((principle, index) => (
            <div
              key={principle}
              className="border-b border-line py-6 sm:px-6 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="block text-sm font-semibold tracking-[0.12em] text-teal-deep">
                0{index + 1}
              </span>

              <span className="mt-2 block text-sm font-medium leading-relaxed text-ink">
                {principle}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <FinalCta />
      </div>
    </>
  )
}
