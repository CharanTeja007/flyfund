import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { seo } from '@/lib/seo'
import { cdn, cdnSrcSet } from '@/lib/image'
import { site, whatsappLink } from '@/data/site'
import { processSteps } from '@/data/steps'
import { Benefits } from '@/components/Benefits'
import { LenderDisclaimer, LenderTable, LenderTicker, ZeroFeeHighlight } from '@/components/Lenders'
import { Testimonials } from '@/components/Testimonials'
import { Timeline } from '@/components/Timeline'
import { FinalCta } from '@/components/FinalCta'
import { SectionHeading } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/')({
  head: () =>
    seo({
      title: 'FlyFund | Education Loans for Study Abroad',
      description:
        'Explore education-loan options from 15+ providers with one application and zero processing fee. FlyFund helps students plan and finance their study-abroad journey.',
      path: '/',
    }),
  component: Home,
})

const HERO = '/img/hero-student.jpg'
const heroWidths = [480, 720, 960]

function Home() {
  return (
    <>
      <Hero />
      <Benefits />

      <section id="lenders" aria-labelledby="lenders-heading" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Lenders" title={<span id="lenders-heading">Compare Education Loan Options</span>} align="center">
            Multiple providers. One application. <span className="font-semibold text-navy">Zero processing fee.</span>
          </SectionHeading>
        </div>
        <div className="mt-12">
          <LenderTicker />
        </div>
        <div className="container-page mt-12">
          <Reveal className="mx-auto max-w-4xl">
            <LenderTable />
          </Reveal>
          <LenderDisclaimer />
          <ZeroFeeHighlight />
        </div>
      </section>

      <div className="border-t border-line">
        <Testimonials />
      </div>

      <section aria-labelledby="how-heading" className="section border-t border-line bg-paper">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="How it works" title={<span id="how-heading">From application to disbursement</span>}>
              A guided, five-step journey — so you always know what comes next.
            </SectionHeading>
            <Link to="/how-it-works" className="group inline-flex items-center gap-2 text-sm font-semibold text-navy">
              <span className="link-underline">See the full process</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-14 lg:mt-16">
            <Timeline steps={processSteps} />
          </div>
        </div>
      </section>

      <div className="bg-paper pt-4">
        <FinalCta />
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist/80 via-white to-white">
      <div className="container-page grid items-center gap-12 pb-16 pt-10 md:pt-14 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div className="hero-enter max-w-2xl">
          <p className="eyebrow">Education loans for study abroad</p>
          <h1 className="mt-6 text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.5rem]">
            <span className="block">15+ Education Loan Providers.</span>
            <span className="block">One Simple Application.</span>
            <span className="relative mt-1 inline-block font-semibold text-teal-deep">
              Zero Processing Fee.
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-teal/60"
              >
                <path d="M2 9 C 80 2, 200 2, 298 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate sm:text-[1.1875rem]">
            Explore education-loan options for your study-abroad journey with guidance from application to disbursement.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/apply" className="btn btn-primary px-8">
              Apply Now
            </Link>
            <a
              href={whatsappLink(site.phones[0].wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-8"
            >
              Talk to an Expert
            </a>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-slate">
            Study Abroad <span className="mx-2 text-teal">•</span> Education Financing{' '}
            <span className="mx-2 text-teal">•</span> Personal Guidance
          </p>
        </div>

        <div className="hero-enter relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[18px] border border-line/80 sm:-inset-5" />
            <picture>
              <source type="image/avif" srcSet={cdnSrcSet(HERO, heroWidths, 'avif')} sizes="(min-width: 1024px) 520px, 90vw" />
              <source type="image/webp" srcSet={cdnSrcSet(HERO, heroWidths, 'webp')} sizes="(min-width: 1024px) 520px, 90vw" />
              <img
                src={cdn(HERO, 960)}
                width={928}
                height={1152}
                alt="A student at the airport holding her passport, boarding pass and admission documents, ready to fly abroad for her studies"
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-lift"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:left-6 sm:right-auto">
              <span className="text-2xl font-semibold leading-none tracking-tight text-navy">0%</span>
              <span className="text-xs leading-snug text-slate">
                Processing fee across
                <br className="hidden sm:block" /> displayed lenders
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
