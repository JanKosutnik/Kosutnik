const NAV = [
  { label: 'Tending',   href: '#tending'   },
  { label: 'Seedlings', href: '#seedlings'  },
  { label: 'Growing',   href: '#growing'    },
  { label: 'Evergreen', href: '#evergreen'  },
  { label: 'Inputs',    href: '#inputs'     },
  { label: 'Contact',   href: '#contact'    },
]

export default function GardenHeader() {
  return (
    <header className="sticky top-0 z-10 -mx-6 px-6 py-3.5 flex items-baseline justify-between flex-wrap gap-[.6rem_1.4rem] bg-paper/50 backdrop-blur-[14px] backdrop-saturate-150 [backdrop-filter:blur(14px)_saturate(1.5)] [-webkit-backdrop-filter:blur(14px)_saturate(1.5)]">
      <a href="#top" className="font-medium text-ink no-underline whitespace-nowrap">
        Jan Ko&#353;utnik
      </a>
      <nav aria-label="Sections">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none m-0 p-0">
          {NAV.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[.82rem] text-muted no-underline hover:underline hover:underline-offset-2 transition-colors"
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
