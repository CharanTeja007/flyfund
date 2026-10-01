import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const base = useId()
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${base}-b${i}`
        const panelId = `${base}-p${i}`
        return (
          <div key={item.q}>
            <h3 className="text-base font-normal">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-[1.0625rem] font-semibold leading-snug text-navy transition-colors group-hover:text-teal-deep">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-slate transition-[transform,background-color,color] duration-300 ${
                    isOpen ? 'rotate-45 bg-navy text-white border-navy' : 'group-hover:border-sky'
                  }`}
                >
                  <Plus size={15} strokeWidth={1.75} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="accordion-panel" data-open={isOpen} aria-hidden={!isOpen}>
              <div>
                <p className="max-w-3xl whitespace-pre-line pb-7 pr-12 text-[1rem] leading-[1.8] text-slate">
  {item.a}
</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
