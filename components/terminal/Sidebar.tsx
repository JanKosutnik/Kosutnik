'use client'

import { useRef, useState } from 'react'

interface SidebarSection {
  id: string
  title: string
}

interface SidebarProps {
  sections: SidebarSection[]
  activeSection: string | null
  onSelect?: (id: string) => void
}

export default function Sidebar({ sections, activeSection, onSelect }: SidebarProps) {
  const [rovingIdx, setRovingIdx] = useState(0)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (rovingIdx + 1) % sections.length
      setRovingIdx(next)
      btnRefs.current[next]?.focus()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (rovingIdx - 1 + sections.length) % sections.length
      setRovingIdx(prev)
      btnRefs.current[prev]?.focus()
    }
  }

  return (
    <nav
      aria-label="Sections"
      onKeyDown={handleKeyDown}
      className="
        flex flex-col w-52 shrink-0
        border-r border-[var(--term-border)]
        bg-[var(--term-surface)]
        overflow-y-auto
        mob:flex-row mob:w-full mob:overflow-x-auto mob:overflow-y-visible
        mob:border-r-0 mob:border-b mob:h-auto mob:shrink-0
      "
    >
      <div
        className="px-3 py-2 shrink-0 mob:flex mob:items-center mob:pr-4"
        aria-hidden="true"
      >
        <span className="text-[var(--term-accent)]">jan@kosutnik</span>
        <span className="text-[var(--term-fg-muted)]">:~$ ls</span>
      </div>

      <ul className="flex flex-col py-1 mob:flex-row mob:items-stretch mob:py-0" role="list">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id} className="mob:shrink-0" role="listitem">
              <button
                ref={(el) => { btnRefs.current[idx] = el }}
                type="button"
                tabIndex={rovingIdx === idx ? 0 : -1}
                onClick={() => {
                  setRovingIdx(idx)
                  onSelect?.(section.id)
                }}
                aria-current={isActive ? 'page' : undefined}
                className="
                  group flex items-center gap-1 w-full px-3 py-1 text-left
                  min-h-[2.75rem] mob:px-3 mob:whitespace-nowrap
                  transition-colors
                  text-[var(--term-fg-muted)]
                  hover:text-[var(--term-fg)]
                  aria-[current=page]:text-[var(--term-fg)]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--term-accent)]
                "
              >
                <span
                  className={`w-3 shrink-0 text-[var(--term-accent)] ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                >
                  ›
                </span>
                {section.id}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
