interface TitleBarProps {
  theme?: 'dark' | 'light'
  onToggleTheme?: () => void
}

export default function TitleBar({ theme = 'dark', onToggleTheme }: TitleBarProps) {
  return (
    <div className="relative flex items-center h-10 px-4 shrink-0 bg-[var(--term-surface)] border-b border-[var(--term-border)]">
      <div className="flex items-center gap-[6px]" aria-hidden="true">
        <span className="block w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="block w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="block w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <span className="ml-3 text-sm font-medium text-[var(--term-fg)] select-none">
        Jan Košutnik
      </span>
      {onToggleTheme && (
        <button
          type="button"
          onClick={onToggleTheme}
          className="ml-auto text-[var(--term-fg-muted)] hover:text-[var(--term-fg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)] rounded p-0.5 z-10"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      )}
    </div>
  )
}
