'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

interface PromptProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
  onHistoryUp: () => void
  onHistoryDown: () => void
  onCtrlL: () => void
}

export default function Prompt({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  onCtrlL,
}: PromptProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [caretPos, setCaretPos] = useState(0)
  const [focused, setFocused] = useState(false)

  const updateCaret = useCallback(() => {
    const el = inputRef.current
    if (el) setCaretPos(el.selectionStart ?? el.value.length)
  }, [])

  useEffect(() => {
    updateCaret()
  }, [value, updateCaret])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit(value)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      onHistoryUp()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      onHistoryDown()
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      onCtrlL()
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
      <span className="text-[var(--term-accent)] shrink-0" aria-hidden="true">jan@kosutnik</span>
      <span className="text-[var(--term-fg-muted)] shrink-0" aria-hidden="true">:</span>
      <span className="text-[var(--term-path)] shrink-0" aria-hidden="true">~</span>
      <span className="text-[var(--term-fg-muted)] shrink-0 mr-2" aria-hidden="true">$</span>

      <div className="relative flex-1 min-h-[2.75rem] flex items-center">
        {/* Accessible input (visually hidden behind custom caret rendering) */}
        <input
          ref={inputRef}
          type="text"
          aria-label="Command"
          value={value}
          onChange={(e) => { onChange(e.target.value); updateCaret() }}
          onKeyDown={handleKeyDown}
          onKeyUp={updateCaret}
          onSelect={updateCaret}
          onFocus={() => { setFocused(true); updateCaret() }}
          onBlur={() => setFocused(false)}
          className="absolute inset-0 opacity-0 w-full bg-transparent outline-none"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />

        {/* Visual rendering with block caret */}
        <span aria-hidden="true" className="text-[var(--term-fg)]">
          {before}
          {focused && (
            <span
              className={`
                inline-block w-[1ch] text-[var(--term-bg)] bg-[var(--term-cursor)]
                motion-safe:animate-[blink_1s_step-end_infinite]
              `}
            >
              {at}
            </span>
          )}
          {!focused && <span className="text-[var(--term-fg)]">{at === ' ' ? '' : at}</span>}
          {after}
        </span>
      </div>
    </div>
  )
}
