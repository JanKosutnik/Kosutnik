'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { sections, siteMeta } from '@/content/site'
import { parseInput, buildCommands, executeCommand } from '@/lib/terminal/engine'
import { createHistory, pushEntry, navigateUp, navigateDown, expandBang } from '@/lib/terminal/history'
import type { HistoryState } from '@/lib/terminal/history'
import TitleBar from './TitleBar'
import Sidebar from './Sidebar'
import OutputLog, { type LogEntry } from './OutputLog'
import Prompt from './Prompt'

const HISTORY_KEY = 'jk:terminal:history'
const COMMANDS = buildCommands()
const SIDEBAR_SECTIONS = sections.map((s) => ({ id: s.id, title: s.title }))

function loadHistory(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(window.localStorage.getItem(HISTORY_KEY) ?? '[]') as string[]
  } catch {
    return []
  }
}

function saveHistory(entries: string[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(-200)))
  } catch {
    // storage quota or private mode — ignore
  }
}

function openSection(id: string): LogEntry[] {
  const output = executeCommand(parseInput(id), COMMANDS)
  return [{ echo: null, blocks: output }]
}

export default function Terminal() {
  const [inputValue, setInputValue] = useState('')
  const [log, setLog] = useState<LogEntry[]>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    return openSection(hash && sections.some((s) => s.id === hash) ? hash : 'about')
  })
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    return hash && sections.some((s) => s.id === hash) ? hash : 'about'
  })
  const [cmdHistory, setCmdHistory] = useState<HistoryState>(() =>
    createHistory(loadHistory()),
  )
  const logRef = useRef<HTMLDivElement>(null)

  // Hide SSR fallback from AT once terminal mounts
  useEffect(() => {
    const fallback = document.getElementById('ssr-fallback')
    if (fallback) fallback.setAttribute('aria-hidden', 'true')
    return () => { if (fallback) fallback.removeAttribute('aria-hidden') }
  }, [])

  // Scroll to bottom on new entries
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [log])

  // Deep link: update hash on section change
  useEffect(() => {
    if (activeSection && window.location.hash !== `#${activeSection}`) {
      window.history.pushState(null, '', `#${activeSection}`)
    }
  }, [activeSection])

  // Deep link: back/forward navigation
  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.slice(1)
      if (hash && sections.some((s) => s.id === hash)) {
        setLog(openSection(hash))
        setActiveSection(hash)
      }
    }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  const submit = useCallback((raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return

    const expanded = expandBang(trimmed, cmdHistory)
    const actual = expanded ?? trimmed

    const newHistory = pushEntry(cmdHistory, actual)
    setCmdHistory(newHistory)
    saveHistory(newHistory.entries)

    const parsed = parseInput(actual)
    const output = executeCommand(parsed, COMMANDS, { historyEntries: newHistory.entries })
    const hasClear = output.some((b) => b.type === 'clear')

    if (hasClear) {
      setLog([])
    } else {
      const sectionBlock = output.find((b) => b.type === 'section')
      const sectionId = sectionBlock?.type === 'section' ? sectionBlock.sectionId : null
      setLog((prev) => [...prev, { echo: { type: 'echo', content: actual }, blocks: output }])
      if (sectionId) setActiveSection(sectionId)
    }

    setInputValue('')
  }, [cmdHistory])

  const handleSidebarSelect = useCallback((id: string) => {
    setLog(openSection(id))
    setActiveSection(id)
    setInputValue('')
  }, [])

  const handleHistoryUp = useCallback(() => {
    const { state, value } = navigateUp(cmdHistory)
    setCmdHistory(state)
    setInputValue(value)
  }, [cmdHistory])

  const handleHistoryDown = useCallback(() => {
    const { state, value } = navigateDown(cmdHistory)
    setCmdHistory(state)
    setInputValue(value)
  }, [cmdHistory])

  const handleClear = useCallback(() => {
    setLog([])
    setInputValue('')
  }, [])

  const handleRunCommand = useCallback((cmd: string) => {
    submit(cmd)
  }, [submit])

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
            sections={SIDEBAR_SECTIONS}
            activeSection={activeSection}
            onSelect={handleSidebarSelect}
          />

          <div
            className="flex flex-1 flex-col overflow-hidden"
            onClick={() => document.querySelector<HTMLInputElement>('[aria-label="Command"]')?.focus()}
          >
            <OutputLog
              entries={log}
              sections={sections}
              logRef={logRef}
              onRunCommand={handleRunCommand}
            />
            <Prompt
              value={inputValue}
              onChange={setInputValue}
              onSubmit={submit}
              onHistoryUp={handleHistoryUp}
              onHistoryDown={handleHistoryDown}
              onCtrlL={handleClear}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
