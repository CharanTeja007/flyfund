import type { ReactNode } from 'react'

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-mist/60 to-white">
        <div className="container-page py-14 md:py-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 text-[2.125rem] sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate">Last updated: {updated}</p>
        </div>
      </section>
      <section className="section pt-12 lg:pt-16">
        <div className="container-page">
          <article className="prose-legal max-w-3xl">{children}</article>
        </div>
      </section>
    </>
  )
}
