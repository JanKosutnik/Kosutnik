interface CompletionMenuProps {
  items: string[]
  selectedIndex: number
  onSelect: (item: string) => void
}

export default function CompletionMenu({ items, selectedIndex, onSelect }: CompletionMenuProps) {
  if (items.length === 0) return null
  return (
    <div
      className="absolute bottom-full left-0 right-0 mb-1 mx-0 bg-[var(--term-surface)] border border-[var(--term-border)] rounded shadow-lg overflow-hidden z-10"
      role="listbox"
      aria-label="Command completions"
    >
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          role="option"
          aria-selected={i === selectedIndex}
          className={[
            'w-full text-left px-3 py-1.5 text-sm transition-colors',
            i === selectedIndex
              ? 'bg-[var(--term-accent)] text-[var(--term-bg)]'
              : 'text-[var(--term-fg)] hover:bg-[var(--term-border)]',
          ].join(' ')}
          onMouseDown={(e) => { e.preventDefault(); onSelect(item) }}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
