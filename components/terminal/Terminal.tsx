'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { sections, siteMeta } from '@/content/site'
import { parseInput, buildCommands, executeCommand } from '@/lib/terminal/engine'
import { createHistory, pushEntry, navigateUp, navigateDown, expandBang } from '@/lib/terminal/history'
import { getCompletions, applyCompletion } from '@/lib/terminal/completion'
import type { HistoryState } from '@/lib/terminal/history'
import TitleBar from './TitleBar'
import OutputLog, { type LogEntry } from './OutputLog'
import Prompt from './Prompt'
import CompletionMenu from './CompletionMenu'
import CommandPalette from './CommandPalette'

const HISTORY_KEY = 'jk:terminal:history'
const THEME_KEY = 'jk:terminal:theme'
const NOTES_KEY = 'jk:terminal:notes'
const COMMANDS = buildCommands()

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
  } catch {}
}

function loadNotes(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(window.localStorage.getItem(NOTES_KEY) ?? '[]') as string[]
  } catch {
    return []
  }
}

function saveNotes(entries: string[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(NOTES_KEY, JSON.stringify(entries))
  } catch {}
}

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function bootEntry(): LogEntry {
  return {
    echo: null,
    blocks: [
      { type: 'text', content: "Type 'help' for commands or 'ls' to list all sections." },
    ],
  }
}

function openSection(id: string): LogEntry[] {
  const output = executeCommand(parseInput(id), COMMANDS)
  return [{ echo: null, blocks: output }]
}

function withBoot(entries: LogEntry[]): LogEntry[] {
  return [bootEntry(), ...entries]
}

export default function Terminal() {
  const [inputValue, setInputValue] = useState('')
  const [log, setLog] = useState<LogEntry[]>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    return withBoot(openSection(hash && sections.some((s) => s.id === hash) ? hash : 'about'))
  })
  const [notes, setNotes] = useState<string[]>(loadNotes)
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    return hash && sections.some((s) => s.id === hash) ? hash : 'about'
  })
  const [cmdHistory, setCmdHistory] = useState<HistoryState>(() =>
    createHistory(loadHistory()),
  )
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  const [completions, setCompletions] = useState<string[]>([])
  const [completionIdx, setCompletionIdx] = useState(0)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [reverseMode, setReverseMode] = useState(false)

  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_KEY, theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    const fallback = document.getElementById('ssr-fallback')
    if (fallback) fallback.setAttribute('aria-hidden', 'true')
    return () => { if (fallback) fallback.removeAttribute('aria-hidden') }
  }, [])

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [log])

  useEffect(() => {
    if (activeSection && window.location.hash !== `#${activeSection}`) {
      window.history.pushState(null, '', `#${activeSection}`)
    }
  }, [activeSection])

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

  const currentCompletions = useMemo(
    () => getCompletions(inputValue, COMMANDS),
    [inputValue],
  )

  const reverseMatch = useMemo(() => {
    if (!reverseMode || !inputValue) return ''
    for (let i = cmdHistory.entries.length - 1; i >= 0; i--) {
      if (cmdHistory.entries[i].includes(inputValue)) return cmdHistory.entries[i]
    }
    return ''
  }, [reverseMode, inputValue, cmdHistory.entries])

  const handleTab = useCallback(() => {
    if (completions.length === 0) {
      const items = currentCompletions
      if (items.length === 0) return
      setCompletions(items)
      setCompletionIdx(0)
    } else {
      setCompletionIdx((i) => (i + 1) % completions.length)
    }
  }, [completions, currentCompletions])

  const handleCompletion = useCallback((item: string) => {
    setInputValue(applyCompletion(inputValue, item))
    setCompletions([])
    setCompletionIdx(0)
  }, [inputValue])

  const submit = useCallback((raw: string) => {
    const actual = reverseMode ? reverseMatch || raw : raw
    const trimmed = actual.trim()
    if (!trimmed) {
      if (reverseMode) { setReverseMode(false); setInputValue('') }
      return
    }

    setReverseMode(false)
    setCompletions([])

    const expanded = expandBang(trimmed, cmdHistory)
    const realCmd = expanded ?? trimmed

    const newHistory = pushEntry(cmdHistory, realCmd)
    setCmdHistory(newHistory)
    saveHistory(newHistory.entries)

    const parsed = parseInput(realCmd)
    const output = executeCommand(parsed, COMMANDS, { historyEntries: newHistory.entries, notes })
    const hasClear = output.some((b) => b.type === 'clear')

    for (const block of output) {
      if (block.type === 'open-url') window.open(block.url, '_blank', 'noopener')
      if (block.type === 'note-add') {
        setNotes((prev) => { const next = [...prev, block.text]; saveNotes(next); return next })
      }
      if (block.type === 'notes-clear') { setNotes([]); saveNotes([]) }
    }

    if (hasClear) {
      setLog([])
    } else {
      const sectionBlock = output.find((b) => b.type === 'section')
      const sectionId = sectionBlock?.type === 'section' ? sectionBlock.sectionId : null
      setLog([{ echo: { type: 'echo', content: realCmd }, blocks: output }])
      if (sectionId) setActiveSection(sectionId)
    }

    setInputValue('')
  }, [cmdHistory, reverseMode, reverseMatch, notes])

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
    setReverseMode(false)
    setCompletions([])
  }, [])

  const handleInputChange = useCallback((val: string) => {
    setInputValue(val)
    if (completions.length > 0 && !val.startsWith(completions[completionIdx]?.slice(0, val.length))) {
      setCompletions([])
    }
  }, [completions, completionIdx])

  const handleRunCommand = useCallback((cmd: string) => { submit(cmd) }, [submit])

  return (
    <div
      data-theme={theme}
      className="fixed inset-0 flex items-center justify-center bg-[var(--term-bg)] p-[2vh] mob:p-0"
      aria-label={`${siteMeta.name} - terminal`}
    >
      <div
        className="
          w-full max-w-[860px] h-[96vh] flex flex-col
          border border-[var(--term-border)] rounded-[10px]
          bg-[var(--term-surface)] overflow-hidden
          font-mono
          mob:max-w-none mob:h-screen mob:h-[100dvh] mob:rounded-none mob:border-0
        "
        onClick={() => document.querySelector<HTMLInputElement>('[aria-label="Command"]')?.focus()}
      >
        <TitleBar theme={theme} onToggleTheme={toggleTheme} />

        <OutputLog
          entries={log}
          sections={sections}
          logRef={logRef}
          onRunCommand={handleRunCommand}
        />

        <div className="relative shrink-0">
          {completions.length > 0 && (
            <CompletionMenu
              items={completions}
              selectedIndex={completionIdx}
              onSelect={handleCompletion}
            />
          )}
          <Prompt
            value={inputValue}
            onChange={handleInputChange}
            onSubmit={submit}
            onHistoryUp={handleHistoryUp}
            onHistoryDown={handleHistoryDown}
            onCtrlL={handleClear}
            onTab={handleTab}
            onCtrlK={() => { setPaletteOpen(true); setCompletions([]) }}
            onCtrlR={() => { setReverseMode(true); setInputValue(''); setCompletions([]) }}
            reverseSearch={reverseMode ? { query: inputValue, match: reverseMatch } : null}
          />
        </div>

        <nav
          aria-label="Sections"
          className="shrink-0 border-t border-[var(--term-border)] px-4 py-2 flex flex-wrap gap-x-3 gap-y-1"
          onClick={(e) => e.stopPropagation()}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleRunCommand(s.id)}
              className={`text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)] rounded ${
                activeSection === s.id
                  ? 'text-[var(--term-accent)]'
                  : 'text-[var(--term-fg-muted)] hover:text-[var(--term-fg)]'
              }`}
            >
              {s.id}
            </button>
          ))}
        </nav>
      </div>

      {paletteOpen && (
        <CommandPalette
          commands={COMMANDS}
          onRun={handleRunCommand}
          onClose={() => setPaletteOpen(false)}
        />
      )}
    </div>
  )
}
