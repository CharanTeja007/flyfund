import { Link } from '@tanstack/react-router'
import { site, whatsappLink } from '@/data/site'
import { Reveal } from './Reveal'

export function FinalCta({
  title = 'Ready to Fund Your Future?',
  text = 'Take the first step toward your study-abroad journey.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section aria-labelledby="final-cta-heading" className="section pt-0">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-xl border border-line bg-mist px-6 py-16 text-center sm:px-12 lg:py-20">
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 text-white/70"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path d="M10 150 C 60 60, 120 40, 190 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          </svg>
          <h2 id="final-cta-heading" className="relative text-[2rem] sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[1.0625rem] text-slate">{text}</p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/apply" className="btn btn-primary">
              Apply Now
            </Link>
            <a
              href={whatsappLink(site.phones[0].wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Talk to an Expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
