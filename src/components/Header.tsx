import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { primaryNav, site } from '@/data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled || open ? 'border-b border-line shadow-[0_6px_24px_-18px_rgb(23_59_95/0.35)]' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-soft"
      >
        Skip to content
      </a>
      <div className="container-page flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Logo className="h-12 lg:h-14" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === '/' }}
                  className="relative py-2 text-[0.875rem] font-medium text-slate transition-colors duration-200 hover:text-navy data-[status=active]:text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-teal after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/apply" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Apply Now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy transition-colors hover:bg-mist xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
<div
  id="mobile-menu"
  className={`xl:hidden absolute inset-x-0 top-full z-50 bg-white transition-[opacity,visibility] duration-300 ${
    open ? 'visible opacity-100' : 'invisible opacity-0'
  }`}
>
  <nav
    aria-label="Mobile"
    className="container-page max-h-[calc(100dvh-72px)] overflow-y-auto pb-10 pt-4"
  >
    <ul className="divide-y divide-line border-y border-line">
      {primaryNav.map((item, i) => (
        <li
          key={item.to}
          className={`transition-[opacity,transform] duration-500 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
          }`}
          style={{ transitionDelay: open ? `${i * 30}ms` : '0ms' }}
        >
          <Link
            to={item.to}
            activeOptions={{ exact: item.to === '/' }}
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-between py-4 text-[1.0625rem] font-medium text-ink data-[status=active]:text-navy"
          >
            {item.label}
            <span aria-hidden className="text-line-strong">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>

    <Link
      to="/apply"
      tabIndex={open ? 0 : -1}
      className="btn btn-primary mt-8 w-full"
    >
      Apply Now
    </Link>

    <a
      href={`tel:${site.phones[0].tel}`}
      tabIndex={open ? 0 : -1}
      className="btn btn-secondary mt-3 w-full"
    >
      Call {site.phones[0].display}
    </a>
  </nav>
</div>
  )
}
