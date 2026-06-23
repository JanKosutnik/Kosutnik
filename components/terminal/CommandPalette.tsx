'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { Command } from '@/lib/terminal/types'

interface CommandPaletteProps {
  commands: Command[]
  onRun: (cmd: string) => void
  onClose: () => void
}

export default function CommandPalette({ commands, onRun, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commands
    .filter(
      (c) =>
        c.name.includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 12)

  useEffect(() => { inputRef.current?.focus() }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIdx((i) => Math.min(i + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIdx((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered[selectedIdx]) {
          onRun(filtered[selectedIdx].name)
          onClose()
        }
      }
    },
    [filtered, selectedIdx, onClose, onRun],
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[18vh] px-4 bg-[var(--term-bg)]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-md bg-[var(--term-surface)] border border-[var(--term-border)] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--term-border)]">
          <span className="text-[var(--term-fg-muted)] shrink-0 text-sm" aria-hidden="true">
            &gt;_
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0) }}
            placeholder="Run a command..."
            className="flex-1 bg-transparent outline-none text-[var(--term-fg)] placeholder:text-[var(--term-fg-muted)] text-sm"
            aria-label="Search commands"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
          <kbd className="text-xs text-[var(--term-fg-muted)] border border-[var(--term-border)] rounded px-1 py-0.5 shrink-0">
            esc
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto" role="listbox">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-[var(--term-fg-muted)] text-sm text-center">
              No commands found
            </p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.name}
              type="button"
              role="option"
              aria-selected={i === selectedIdx}
              className={[
                'w-full text-left px-3 py-2 flex items-center gap-3 transition-colors',
                i === selectedIdx
                  ? 'bg-[var(--term-selection)]'
                  : 'hover:bg-[var(--term-border)]',
              ].join(' ')}
              onClick={() => { onRun(cmd.name); onClose() }}
            >
              <span className="text-[var(--term-fg)] font-medium w-24 shrink-0 text-sm">
                {cmd.name}
              </span>
              <span className="text-[var(--term-fg-muted)] text-xs truncate">
                {cmd.description}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
