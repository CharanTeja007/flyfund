import { useEffect, useRef } from 'react'
import type { ElementType, ReactNode } from 'react'

let observer: IntersectionObserver | null = null
function getObserver() {
  if (!observer && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
  }
  return observer
}

/** Gentle fade/slide-up as the element scrolls into view. */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}: {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
  [key: string]: unknown
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    const obs = getObserver()
    if (!el) return
    if (!obs) {
      el.classList.add('is-visible')
      return
    }
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
