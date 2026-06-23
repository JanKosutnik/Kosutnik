'use client'

import { useState, useEffect } from 'react'
import { sections, siteMeta } from '@/content/site'
import TitleBar from './TitleBar'
import Sidebar from './Sidebar'
import OutputLog from './OutputLog'
import Prompt from './Prompt'
import type { OutputBlock } from '@/lib/terminal/types'

export default function Terminal() {
  const [inputValue, setInputValue] = useState('')
  const [output] = useState<OutputBlock[]>([])
  const [activeSection, setActiveSection] = useState<string | null>('about')

  useEffect(() => {
    const fallback = document.getElementById('ssr-fallback')
    if (fallback) fallback.setAttribute('aria-hidden', 'true')
    return () => {
      if (fallback) fallback.removeAttribute('aria-hidden')
    }
  }, [])

  const sidebarSections = sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[var(--term-bg)] p-[2vh] mob:p-0"
      aria-label={`${siteMeta.name} — terminal`}
    >
      <div
        className="
          w-full max-w-[1040px] h-[96vh] flex flex-col
          border border-[var(--term-border)] rounded-[10px]
          bg-[var(--term-surface)] overflow-hidden
          font-mono
          mob:max-w-none mob:h-screen mob:h-[100dvh] mob:rounded-none mob:border-0
        "
      >
        <TitleBar />

        <div className="flex flex-1 overflow-hidden mob:flex-col">
          <Sidebar
            sections={sidebarSections}
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          <div className="flex flex-1 flex-col overflow-hidden">
            <OutputLog blocks={output} />
            <Prompt
              value={inputValue}
              onChange={setInputValue}
              onSubmit={() => setInputValue('')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
