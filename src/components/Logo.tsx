import { Link } from '@tanstack/react-router'

/** The official FlyFund logo. Rendered at its native aspect ratio — never stretched or recoloured. */
export function Logo({ className = 'h-12', linked = true }: { className?: string; linked?: boolean }) {
  const img = (
    <picture>
      <source srcSet="/img/flyfund-logo.webp" type="image/webp" />
      <img
        src="/img/flyfund-logo.png"
        alt="FlyFund"
        width={777}
        height={525}
        className={`${className} w-auto object-contain`}
        decoding="async"
      />
    </picture>
  )
  if (!linked) return img
  return (
    <Link to="/" aria-label="FlyFund home" className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  )
}
