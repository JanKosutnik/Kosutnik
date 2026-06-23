interface TitleBarProps {
  label?: string
}

export default function TitleBar({ label = 'jan@kosutnik: ~ — zsh' }: TitleBarProps) {
  return (
    <div className="relative flex items-center h-10 px-4 shrink-0 bg-[var(--term-surface)] border-b border-[var(--term-border)]">
      <div className="flex items-center gap-[6px]" aria-hidden="true">
        <span className="block w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="block w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="block w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <span
        className="absolute inset-x-0 text-center text-[var(--term-fg-muted)] pointer-events-none select-none"
        aria-hidden="true"
      >
        {label}
      </span>
    </div>
  )
}
