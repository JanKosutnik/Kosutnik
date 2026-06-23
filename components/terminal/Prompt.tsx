'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

export interface ReverseSearch {
  query: string
  match: string
}

interface PromptProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
  onHistoryUp: () => void
  onHistoryDown: () => void
  onCtrlL: () => void
  onTab?: () => void
  onCtrlK?: () => void
  onCtrlR?: () => void
  reverseSearch?: ReverseSearch | null
}

export default function Prompt({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  onCtrlL,
  onTab,
  onCtrlK,
  onCtrlR,
  reverseSearch,
}: PromptProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [caretPos, setCaretPos] = useState(0)
  const [focused, setFocused] = useState(false)

  const updateCaret = useCallback(() => {
    const el = inputRef.current
    if (el) setCaretPos(el.selectionStart ?? el.value.length)
  }, [])

  useEffect(() => { updateCaret() }, [value, updateCaret])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit(value)
    } else if (e.key === 'ArrowUp' && !reverseSearch) {
      e.preventDefault()
      onHistoryUp()
    } else if (e.key === 'ArrowDown' && !reverseSearch) {
      e.preventDefault()
      onHistoryDown()
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      onCtrlL()
    } else if (e.key === 'Tab') {
      e.preventDefault()
      onTab?.()
    } else if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      onCtrlK?.()
    } else if (e.ctrlKey && e.key === 'r') {
      e.preventDefault()
      onCtrlR?.()
    }
  }

  const before = value.slice(0, caretPos)
  const at = value[caretPos] ?? ' '
  const after = value.slice(caretPos + 1)

  return (
    <div
      className="flex items-center shrink-0 px-3 py-2 border-t border-[var(--term-border)] bg-[var(--term-surface)] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {reverseSearch ? (
        <>
          <span className="text-[var(--term-fg-muted)] shrink-0 mr-2" aria-hidden="true">
            (reverse-i-search)&lsquo;
            <span className="text-[var(--term-fg)]">{reverseSearch.query}</span>
            &rsquo;:
          </span>
          <span className="text-[var(--term-fg)] truncate" aria-hidden="true">
            {reverseSearch.match}
          </span>
        </>
      ) : (
        <>
          <span className="text-[var(--term-accent)] shrink-0" aria-hidden="true">jan@kosutnik</span>
          <span className="text-[var(--term-fg-muted)] shrink-0" aria-hidden="true">:</span>
          <span className="text-[var(--term-path)] shrink-0" aria-hidden="true">~</span>
          <span className="text-[var(--term-fg-muted)] shrink-0 mr-2" aria-hidden="true">$</span>
        </>
      )}

      <div className="relative flex-1 min-h-[2.75rem] flex items-center">
        <input
          ref={inputRef}
          type="text"
          inputMode="text"
          aria-label="Command"
          value={value}
          onChange={(e) => { onChange(e.target.value); updateCaret() }}
          onKeyDown={handleKeyDown}
          onKeyUp={updateCaret}
          onSelect={updateCaret}
          onFocus={() => { setFocused(true); updateCaret() }}
          onBlur={() => setFocused(false)}
          className="absolute inset-0 w-full bg-transparent outline-none text-base text-transparent [caret-color:transparent] select-none"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />

        {!reverseSearch && (
          <span aria-hidden="true" className="text-[var(--term-fg)]">
            {before}
            <span
              className={`inline-block w-[2px] h-[1em] align-middle translate-y-[-1px] bg-[var(--term-cursor)] transition-opacity ${
                focused
                  ? 'opacity-100 motion-safe:animate-[blink_1s_step-end_infinite]'
                  : 'opacity-20'
              }`}
            />
            {value.slice(caretPos)}
          </span>
        )}
      </div>
    </div>
  )
}
