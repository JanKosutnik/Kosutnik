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

const COMMANDS = buildCommands()
const SIDEBAR_SECTIONS = sections.map((s) => ({ id: s.id, title: s.title }))

function runCommand(raw: string): { entries: LogEntry[]; section: string | null } {
  const parsed = parseInput(raw)
  const output = executeCommand(parsed, COMMANDS)
  const hasClear = output.some((b) => b.type === 'clear')
  const sectionBlock = output.find((b) => b.type === 'section')
  const sectionId = sectionBlock?.type === 'section' ? sectionBlock.sectionId : null
  if (hasClear) return { entries: [], section: null }
  return {
    entries: [{ echo: { type: 'echo', content: raw }, blocks: output }],
    section: sectionId,
  }
}

export default function Terminal() {
  const [inputValue, setInputValue] = useState('')
  const [log, setLog] = useState<LogEntry[]>(() => {
    const output = executeCommand(parseInput('about'), COMMANDS)
    return [{ echo: null, blocks: output }]
  })
  const [activeSection, setActiveSection] = useState<string | null>('about')
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

  // Scroll log to bottom on new entries
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [log])

  const submit = useCallback((raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return

    // Bang recall
    const expanded = expandBang(trimmed, cmdHistory)
    const actual = expanded ?? trimmed

    const newHistory = pushEntry(cmdHistory, actual)
    setCmdHistory(newHistory)
    saveHistory(newHistory.entries)

    const { entries, section } = runCommand(actual)

    if (entries.length === 0) {
      // clear
      setLog([])
    } else {
      setLog((prev) => [...prev, ...entries])
    }

    if (section) setActiveSection(section)
    setInputValue('')
  }, [cmdHistory])

  const handleSidebarSelect = useCallback((id: string) => {
    const output = executeCommand(parseInput(id), COMMANDS)
    setLog([{ echo: null, blocks: output }])
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
            <OutputLog entries={log} sections={sections} logRef={logRef} />
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
