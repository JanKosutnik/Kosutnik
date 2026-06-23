interface SidebarSection {
  id: string
  title: string
}

interface SidebarProps {
  sections: SidebarSection[]
  activeSection: string | null
  onSelect?: (id: string) => void
}

export default function Sidebar({ sections, activeSection, onSelect }: SidebarProps) {
  return (
    <nav
      aria-label="Sections"
      className="
        flex flex-col w-52 shrink-0
        border-r border-[var(--term-border)]
        bg-[var(--term-surface)]
        overflow-y-auto
        mob:flex-row mob:w-full mob:overflow-x-auto mob:overflow-y-visible
        mob:border-r-0 mob:border-b mob:h-auto mob:shrink-0
      "
    >
      <div
        className="px-3 py-2 shrink-0 mob:flex mob:items-center mob:pr-4"
        aria-hidden="true"
      >
        <span className="text-[var(--term-accent)]">jan@kosutnik</span>
        <span className="text-[var(--term-fg-muted)]">:~$ ls</span>
      </div>

      <ul className="flex flex-col py-1 mob:flex-row mob:items-stretch mob:py-0">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id} className="mob:shrink-0">
              <button
                type="button"
                onClick={() => onSelect?.(section.id)}
                aria-current={isActive ? 'page' : undefined}
                className="
                  group flex items-center gap-1 w-full px-3 py-1 text-left
                  min-h-[2.75rem] mob:px-3 mob:whitespace-nowrap
                  transition-colors
                  text-[var(--term-fg-muted)]
                  hover:text-[var(--term-fg)]
                  aria-[current=page]:text-[var(--term-fg)]
                "
              >
                <span
                  className={`w-3 shrink-0 text-[var(--term-accent)] ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                >
                  ›
                </span>
                {section.id}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
