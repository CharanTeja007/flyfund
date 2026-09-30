import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { faqGroups } from '@/data/faqs'
import { site, whatsappLink } from '@/data/site'
import { PageHeader } from '@/components/PageHeader'
import { Accordion } from '@/components/Accordion'
import { Reveal } from '@/components/Reveal'

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  ),
})

export const Route = createFileRoute('/faqs')({
  head: () => ({
    ...seo({
      title: 'Education Loan FAQs | Collateral, Co-applicant, Referral | FlyFund',
      description:
        'Answers to common study-abroad education loan questions — loans without collateral, co-applicants, loan amounts, processing fees, timelines and the FlyFund referral reward.',
      path: '/faqs',
    }),
    scripts: [{ type: 'application/ld+json', children: faqJsonLd }],
  }),
  component: Faqs,
})

function Faqs() {
  return (
    <>
      <PageHeader eyebrow="FAQs" title="Questions students often ask us">
        <p>Straight answers about education loans for studying abroad. Can't find yours? We're happy to talk it through.</p>
      </PageHeader>

      <section className="section pt-14 lg:pt-20">
        <div className="container-page grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <nav aria-label="FAQ topics" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <ul className="space-y-3 text-sm">
              {faqGroups.map((g, i) => (
                <li key={g.title}>
                  <a href={`#faq-${i}`} className="link-underline font-medium text-slate hover:text-navy">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16">
            {faqGroups.map((g, i) => (
              <Reveal key={g.title} id={`faq-${i}`} className="scroll-mt-28">
                <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">{g.title}</h2>
                <Accordion items={g.items} />
              </Reveal>
            ))}

            <div className="rounded-xl border border-line bg-mist/60 p-8 sm:p-10">
              <h2 className="text-2xl">Still have a question?</h2>
              <p className="mt-2 text-slate">Speak with the FlyFund team on call or WhatsApp.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink(site.phones[0].wa)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Talk to an Expert
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
