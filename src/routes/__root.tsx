import { HeadContent, Link, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { site } from '@/data/site'

import '../styles.css'

const siteTitle = 'FlyFund | Education Loans for Study Abroad'
const siteDescription =
  'Explore education-loan options from 15+ providers with one application and zero processing fee. FlyFund helps students plan and finance their study-abroad journey.'

const organizationJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/img/flyfund-logo.png`,
  email: site.email,
  telephone: site.phones.map((p) => p.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No: 20, 3rd Floor, Padmavathi Plaza, Near KPHB Metro',
    addressLocality: 'Hyderabad',
    postalCode: '500072',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#ffffff' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      {
        name: 'keywords',
        content:
          'education loan for abroad studies, study abroad education loan, overseas education loan, education loan without collateral, education loan for USA, education loan for UK, education loan for Canada, education loan for Australia, education loan for Germany, education loan for Ireland, study abroad finance, education loan assistance, student education finance',
      },
      { property: 'og:site_name', content: 'FlyFund' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:image', content: `${site.url}/img/hero-student.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap',
      },
    ],
    scripts: [{ type: 'application/ld+json', children: organizationJsonLd }],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS is running, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return (
    <>
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-5 text-4xl sm:text-5xl">This page has flown elsewhere.</h1>
      <p className="mt-4 max-w-lg text-lg text-slate">
        The page you're looking for doesn't exist or has moved. Let's get you back on course.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </section>
  )
}
