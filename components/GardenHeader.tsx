const NAV = [
  { label: 'Now',        href: '#now'        },
  { label: 'Principles', href: '#principles' },
  { label: 'Inputs',     href: '#inputs'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function GardenHeader() {
  return (
    <header className="sticky top-0 z-10 w-full px-6 py-3.5 flex items-baseline flex-wrap gap-x-7 gap-y-1.5 backdrop-blur-[14px] backdrop-saturate-150 [backdrop-filter:blur(14px)_saturate(1.5)] [-webkit-backdrop-filter:blur(14px)_saturate(1.5)]">
      <a href="#top" className="font-medium text-ink no-underline whitespace-nowrap">
        Jan Ko&#353;utnik
      </a>
      <nav aria-label="Sections">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none m-0 p-0">
          {NAV.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-base text-muted no-underline hover:underline hover:underline-offset-2 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
