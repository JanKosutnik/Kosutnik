import type { Metadata } from 'next'
import { sections, siteMeta } from '@/content/site'
import type { Block } from '@/content/site'

const BASE_URL = 'https://kosutnik.com'

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: 'website',
    url: BASE_URL,
    siteName: siteMeta.name,
  },
}

function BlockView({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case 'statement':
      return <p key={index} className="font-medium">{block.content}</p>
    case 'text':
      return <p key={index} style={{ color: 'var(--soft)' }}>{block.content}</p>
    case 'heading':
      return <p key={index} className="font-medium">{block.content}</p>
    case 'row':
      return (
        <div key={index} className="flex items-baseline gap-4">
          {block.href ? (
            <>
              <a
                href={block.href}
                className="hover:opacity-70 transition-opacity flex-1 min-w-0 truncate"
              >
                {block.label}
              </a>
              <span className="text-sm shrink-0" style={{ color: 'var(--faint)' }}>
                {block.value}
              </span>
            </>
          ) : (
            <>
              <span className="tabular-nums shrink-0 w-6 text-sm" style={{ color: 'var(--faint)' }}>
                {block.label}
              </span>
              <span style={{ color: 'var(--soft)' }}>{block.value}</span>
            </>
          )}
        </div>
      )
    case 'link':
      return (
        <a
          key={index}
          href={block.href}
          className="hover:opacity-70 transition-opacity"
          style={{ color: 'var(--accent)' }}
          {...(block.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {block.label}
        </a>
      )
    case 'links':
      return (
        <div key={index} className="flex flex-wrap gap-x-5 gap-y-1">
          {block.items.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="hover:opacity-70 transition-opacity"
              style={{ color: 'var(--soft)' }}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      )
  }
}

export default function Home() {
  return (
    <main className="max-w-[580px] mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="font-semibold text-base">{siteMeta.name}</h1>
        <p className="text-sm" style={{ color: 'var(--faint)' }}>{siteMeta.location}</p>
      </header>

      <div className="space-y-10">
        {sections.map(section => (
          <section key={section.id} id={section.id}>
            <h2
              className="text-xs font-medium uppercase tracking-widest mb-3"
              style={{ color: 'var(--faint)' }}
            >
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.render().map((block, i) => (
                <BlockView key={i} block={block} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
