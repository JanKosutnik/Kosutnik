import type { Block, Section, SiteMeta } from '@/content/site'

function BlockRenderer({ block, idx }: { block: Block; idx: number }) {
  switch (block.type) {
    case 'statement':
      return <p key={idx} className="font-medium text-[var(--term-fg)]">{block.content}</p>

    case 'text':
      return <p key={idx} className="text-[var(--term-fg-muted)]">{block.content}</p>

    case 'heading':
      return <h3 key={idx} className="font-medium">{block.content}</h3>

    case 'row':
      return (
        <div key={idx} className="flex gap-4 items-baseline">
          {block.href
            ? <a href={block.href} className="text-[var(--term-fg)] hover:text-[var(--term-accent)] transition-colors">{block.label}</a>
            : <span className="text-[var(--term-fg-muted)] tabular-nums shrink-0">{block.label}</span>
          }
          <span className={block.href ? 'text-[var(--term-fg-muted)] tabular-nums shrink-0' : 'text-[var(--term-fg)]'}>{block.value}</span>
        </div>
      )

    case 'link':
      return (
        <p key={idx}>
          <a
            href={block.href}
            className="text-[var(--term-accent)] hover:opacity-80 transition-opacity"
            {...(block.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {block.label}
          </a>
        </p>
      )

    case 'links':
      return (
        <p key={idx} className="text-[var(--term-fg-muted)]">
          {block.items.map((item, i) => (
            <span key={item.href}>
              {i > 0 && ' · '}
              <a
                href={item.href}
                className="text-[var(--term-fg)] hover:text-[var(--term-accent)] transition-colors"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            </span>
          ))}
        </p>
      )
  }
}

interface SsrContentProps {
  sections: Section[]
  meta: SiteMeta
}

export default function SsrContent({ sections, meta }: SsrContentProps) {
  return (
    <div className="font-mono max-w-[42rem] mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="font-medium text-[var(--term-fg)]">{meta.name}</h1>
        <p className="text-[var(--term-fg-muted)] text-sm">{meta.location}</p>
      </header>

      <main>
        {sections.map((section) => {
          const blocks = section.render()
          return (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="mb-10">
              <h2
                id={`${section.id}-heading`}
                className="font-medium text-[var(--term-accent)] mb-3"
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-2">
                {blocks.map((block, idx) => (
                  <BlockRenderer key={idx} block={block} idx={idx} />
                ))}
              </div>
            </section>
          )
        })}
      </main>

      <footer className="mt-10 text-[var(--term-fg-muted)] text-sm">
        <a
          href={`mailto:${meta.email}`}
          className="hover:text-[var(--term-fg)] transition-colors"
        >
          {meta.email}
        </a>
      </footer>
    </div>
  )
}
