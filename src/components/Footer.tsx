import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'
import { footerDisclaimer, footerNav, legalNav, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page pt-16 pb-24 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-16" />
            <p className="mt-5 text-lg font-medium text-navy">{site.tagline}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">
              Education-loan guidance for students planning to study abroad.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline text-ink hover:text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="link-underline text-ink hover:text-navy">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="link-underline text-ink hover:text-navy">
                  {site.email}
                </a>
              </li>
              <li className="text-slate">Calls &amp; WhatsApp available</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Office</h2>
            <address className="mt-5 text-sm not-italic leading-relaxed text-ink">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-slate">{footerDisclaimer}</p>
          <div className="mt-8 flex flex-col gap-4 text-xs text-slate md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} FlyFund. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline hover:text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
