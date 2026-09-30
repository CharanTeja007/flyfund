import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { seo } from '@/lib/seo'
import { site, whatsappLink } from '@/data/site'
import { PageHeader } from '@/components/PageHeader'
import { ContactForm } from '@/components/ContactForm'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/contact')({
  head: () =>
    seo({
      title: 'Contact FlyFund | Call, WhatsApp or Email | Hyderabad',
      description:
        'Talk to FlyFund about education loans for studying abroad. Call or WhatsApp +91 6302812827 or +91 9059842672, email info@flyfund.in, or visit our office near KPHB Metro, Hyderabad.',
      path: '/contact',
    }),
  component: Contact,
})

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's Talk About Your Study Abroad Plans">
        <p>Reach us by phone, WhatsApp or email — or leave a short message and we'll get back to you.</p>
      </PageHeader>

      <section className="section pt-14 lg:pt-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-6">
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {/* Call */}
              <Reveal className="bg-white p-6">
                <Phone size={20} strokeWidth={1.5} className="text-sky" aria-hidden />
                <h2 className="mt-4 text-lg">Call Us</h2>
                <ul className="mt-3 space-y-2 text-[0.9375rem]">
                  {site.phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="link-underline font-medium text-ink hover:text-navy">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
              {/* WhatsApp */}
              <Reveal delay={80} className="bg-white p-6">
                <WhatsAppIcon size={20} className="text-[#3f9a6d]" />
                <h2 className="mt-4 text-lg">WhatsApp Us</h2>
                <ul className="mt-3 space-y-2 text-[0.9375rem]">
                  {site.phones.map((p) => (
                    <li key={p.wa}>
                      <a
                        href={whatsappLink(p.wa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-medium text-ink hover:text-navy"
                        aria-label={`WhatsApp FlyFund on ${p.display}`}
                      >
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
              {/* Email */}
              <Reveal delay={160} className="bg-white p-6">
                <Mail size={20} strokeWidth={1.5} className="text-sky" aria-hidden />
                <h2 className="mt-4 text-lg">Email Us</h2>
                <p className="mt-3 text-[0.9375rem]">
                  <a href={`mailto:${site.email}`} className="link-underline font-medium text-ink hover:text-navy break-all">
                    {site.email}
                  </a>
                </p>
              </Reveal>
            </div>
            <p className="text-sm text-slate">Both numbers: Calls &amp; WhatsApp Available</p>

            <Reveal className="rounded-xl border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-sky" aria-hidden />
                <div>
                  <h2 className="text-lg">Office</h2>
                  <address className="mt-2 text-[1rem] not-italic leading-relaxed text-ink">
                    {site.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Padmavathi+Plaza+KPHB+Metro+Hyderabad+500072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-navy underline underline-offset-4"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phones[0].tel}`} className="btn btn-primary">
                <Phone size={17} strokeWidth={1.75} aria-hidden /> Call Us
              </a>
              <a href={whatsappLink(site.phones[0].wa)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <WhatsAppIcon size={17} className="text-[#3f9a6d]" /> WhatsApp Us
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-secondary">
                <Mail size={17} strokeWidth={1.75} aria-hidden /> Email Us
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-10">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-sm text-slate">Share a few details and a FlyFund representative will get back to you.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
