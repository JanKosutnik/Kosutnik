'use client'

import { useState, useEffect } from 'react'
import type { OutputBlock } from '@/lib/terminal/types'
import type { Block, Section } from '@/content/site'

interface EchoLine {
  type: 'echo'
  content: string
}

export type LogEntry = { blocks: OutputBlock[]; echo: EchoLine | null }

// ── Clock ─────────────────────────────────────────────────────

function Clock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Ljubljana' }),
  )
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Ljubljana' }))
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <p className="text-[var(--term-fg)]">
      {time}{' '}
      <span className="text-[var(--term-fg-muted)]">Ljubljana</span>
    </p>
  )
}

// ── Copy button ───────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ml-2 text-xs text-[var(--term-fg-muted)] hover:text-[var(--term-accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)] rounded"
      aria-label={`Copy ${text}`}
    >
      {copied ? '✓ copied' : '⎘'}
    </button>
  )
}

// ── Block renderer ────────────────────────────────────────────

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
        <p className="mb-0.5 flex items-center gap-1">
          <a
            href={block.href}
            className="text-[var(--term-accent)] hover:opacity-80 transition-opacity"
            {...(block.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {block.label}
            {block.external && (
              <span className="ml-0.5 text-[var(--term-fg-muted)]" aria-hidden="true">↗</span>
            )}
          </a>
          {block.href.startsWith('mailto:') && (
            <CopyButton text={block.href.slice(7)} />
          )}
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
                {item.external && (
                  <span className="ml-0.5 text-[var(--term-fg-muted)]" aria-hidden="true">↗</span>
                )}
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
      <p className="text-[var(--term-accent)] font-medium mb-2">
        <span className="text-[var(--term-fg-muted)] mr-1" aria-hidden="true">#</span>
        {section.title}
      </p>
      {blocks.map((block, i) => (
        <BlockOutput key={i} block={block} />
      ))}
    </div>
  )
}

interface OutputBlockRendererProps {
  block: OutputBlock
  sections: Section[]
  onRunCommand?: (cmd: string) => void
}

function OutputBlockRenderer({ block, sections, onRunCommand }: OutputBlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <p className="text-[var(--term-fg)] whitespace-pre-wrap">{block.content}</p>
    case 'error':
      return <p className="text-red-400">{block.content}</p>
    case 'section': {
      const section = sections.find((s) => s.id === block.sectionId)
      return section ? <SectionOutput section={section} /> : null
    }
    case 'clock':
      return <Clock />
    case 'notes':
      return block.entries.length === 0 ? (
        <p className="text-[var(--term-fg-muted)]">No notes saved. Use: note &lt;text&gt;</p>
      ) : (
        <div className="flex flex-col gap-0.5">
          {block.entries.map((entry, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-[var(--term-fg-muted)] tabular-nums w-4 shrink-0">{i + 1}</span>
              <span className="text-[var(--term-fg)]">{entry}</span>
            </div>
          ))}
        </div>
      )
    case 'note-add':
      return <p className="text-[var(--term-accent)]">Note saved: &ldquo;{block.text}&rdquo;</p>
    case 'notes-clear':
      return <p className="text-[var(--term-fg-muted)]">Notes cleared.</p>
    case 'open-url':
      return null
    case 'dym':
      return (
        <p className="text-[var(--term-fg-muted)]">
          Did you mean:{' '}
          <button
            type="button"
            className="text-[var(--term-accent)] hover:opacity-80 underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)]"
            onClick={() => onRunCommand?.(block.suggestion)}
          >
            {block.suggestion}
          </button>
          ?
        </p>
      )
    case 'history':
      return (
        <div className="flex flex-col gap-0.5">
          {block.entries.map((entry, i) => (
            <div key={i} className="flex gap-3 items-baseline">
              <span className="text-[var(--term-fg-muted)] tabular-nums w-6 text-right shrink-0">
                {i + 1}
              </span>
              <button
                type="button"
                className="text-[var(--term-fg)] hover:text-[var(--term-accent)] text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)]"
                onClick={() => onRunCommand?.(entry)}
              >
                {entry}
              </button>
            </div>
          ))}
        </div>
      )
    case 'clear':
    case 'help':
      return null
  }
}

interface OutputLogProps {
  entries: LogEntry[]
  sections: Section[]
  logRef?: React.RefObject<HTMLDivElement | null>
  onRunCommand?: (cmd: string) => void
}

export default function OutputLog({ entries, sections, logRef, onRunCommand }: OutputLogProps) {
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
            <OutputBlockRenderer key={j} block={block} sections={sections} onRunCommand={onRunCommand} />
          ))}
        </div>
      ))}
    </div>
  )
}
