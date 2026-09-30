/** Netlify Image CDN URL for a file in /public. */
export function cdn(src: string, width: number, format: 'webp' | 'avif' = 'webp', quality = 78) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=${format}&q=${quality}`
}

export function cdnSrcSet(src: string, widths: number[], format: 'webp' | 'avif' = 'webp') {
  return widths.map((w) => `${cdn(src, w, format)} ${w}w`).join(', ')
}
