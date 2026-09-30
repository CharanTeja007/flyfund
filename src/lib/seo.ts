import { site } from '@/data/site'

interface SeoInput {
  title: string
  description: string
  path: string
  image?: string
}

/** Builds the per-route <head> config: title, description, canonical and Open Graph tags. */
export function seo({ title, description, path, image = '/img/hero-student.jpg' }: SeoInput) {
  const url = `${site.url}${path === '/' ? '' : path}`
  const imageUrl = `${site.url}${image}`
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
