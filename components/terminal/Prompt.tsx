interface PromptProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

export default function Prompt({ value, onChange, onSubmit }: PromptProps) {
  return (
    <div className="flex items-center shrink-0 px-3 py-2 border-t border-[var(--term-border)] bg-[var(--term-surface)]">
      <span className="text-[var(--term-accent)] shrink-0" aria-hidden="true">jan@kosutnik</span>
      <span className="text-[var(--term-fg-muted)] shrink-0" aria-hidden="true">:</span>
      <span className="text-[var(--term-path)] shrink-0" aria-hidden="true">~</span>
      <span className="text-[var(--term-fg-muted)] shrink-0 mr-2" aria-hidden="true">$</span>
      <input
        type="text"
        aria-label="Command"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit(value)
        }}
        className="flex-1 bg-transparent text-[var(--term-fg)] outline-none caret-[var(--term-cursor)] min-h-[2.75rem]"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
      />
    </div>
  )
}
