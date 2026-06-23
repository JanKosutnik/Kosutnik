import type { OutputBlock } from '@/lib/terminal/types'
import type { Block, Section } from '@/content/site'

interface EchoLine {
  type: 'echo'
  content: string
}

export type LogEntry = { blocks: OutputBlock[]; echo: EchoLine | null }

function BlockOutput({ block }: { block: Block }) {
  switch (block.type) {
    case 'statement':
      return <p className="font-medium text-[var(--term-fg)] mb-1">{block.content}</p>
    case 'text':
      return <p className="text-[var(--term-fg-muted)] mb-1">{block.content}</p>
    case 'heading':
      return <p className="font-medium text-[var(--term-accent)] mb-1">{block.content}</p>
    case 'row':
      return (
        <div className="flex gap-4 mb-0.5">
          {block.href ? (
            <a href={block.href} className="text-[var(--term-accent)] hover:opacity-80 transition-opacity">
              {block.label}
            </a>
          ) : (
            <span className="text-[var(--term-fg-muted)] tabular-nums shrink-0 w-8">{block.label}</span>
          )}
          <span className="text-[var(--term-fg)]">{block.value}</span>
        </div>
      )
    case 'link':
      return (
        <p className="mb-0.5">
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
        <p className="text-[var(--term-fg-muted)] mb-1">
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

function SectionOutput({ section }: { section: Section }) {
  const blocks = section.render()
  return (
    <div>
      <p className="text-[var(--term-accent)] font-medium mb-2">{section.title}</p>
      {blocks.map((block, i) => (
        <BlockOutput key={i} block={block} />
      ))}
    </div>
  )
}

interface OutputBlockRendererProps {
  block: OutputBlock
  sections: Section[]
}

function OutputBlockRenderer({ block, sections }: OutputBlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <p className="text-[var(--term-fg)] whitespace-pre-wrap">{block.content}</p>
    case 'error':
      return <p className="text-red-400">{block.content}</p>
    case 'section': {
      const section = sections.find((s) => s.id === block.sectionId)
      return section ? <SectionOutput section={section} /> : null
    }
    case 'clear':
    case 'help':
      return null
  }
}

interface OutputLogProps {
  entries: LogEntry[]
  sections: Section[]
  logRef?: React.RefObject<HTMLDivElement | null>
}

export default function OutputLog({ entries, sections, logRef }: OutputLogProps) {
  return (
    <div
      ref={logRef}
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
      className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4"
    >
      {entries.map((entry, i) => (
        <div key={i}>
          {entry.echo && (
            <p className="text-[var(--term-fg-muted)] mb-1">
              <span className="text-[var(--term-accent)]">jan@kosutnik</span>
              <span>:</span>
              <span className="text-[var(--term-path)]">~</span>
              <span className="text-[var(--term-fg-muted)]">$</span>
              {' '}
              <span className="text-[var(--term-fg)]">{entry.echo.content}</span>
            </p>
          )}
          {entry.blocks.map((block, j) => (
            <OutputBlockRenderer key={j} block={block} sections={sections} />
          ))}
        </div>
      ))}
    </div>
  )
}
