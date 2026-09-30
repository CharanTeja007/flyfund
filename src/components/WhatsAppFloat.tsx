import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { site, whatsappLink } from '@/data/site'

/** Small floating WhatsApp launcher, bottom-right on every page. Offers both FlyFund numbers. */
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
      <div
        id="whatsapp-options"
        role="dialog"
        aria-label="Chat with FlyFund on WhatsApp"
        className={`absolute bottom-full right-0 mb-3 w-64 origin-bottom-right rounded-lg border border-line bg-white p-2 shadow-lift transition-[opacity,transform,visibility] duration-300 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'
        }`}
      >
        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate">Chat on WhatsApp</p>
        {site.phones.map((p) => (
          <a
            key={p.wa}
            href={whatsappLink(p.wa)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist"
          >
            <WhatsAppIcon size={16} className="text-[#3f9a6d]" />
            {p.display}
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="whatsapp-options"
        aria-label={open ? 'Close WhatsApp options' : 'Chat with FlyFund on WhatsApp'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-[#3f9a6d] shadow-lift transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-16px_rgb(23_59_95/0.35)]"
      >
        {open ? <X size={20} strokeWidth={1.75} className="text-slate" /> : <WhatsAppIcon size={22} />}
      </button>
    </div>
  )
}
