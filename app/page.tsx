import Clock from "./components/Clock";

const works = [
  { index: "001", title: "SPATIAL INTERFACE", category: "Interface Design", detail: "2024 — 03" },
  { index: "002", title: "ARCHIVE SYSTEM",    category: "Data Architecture", detail: "2024 — 01" },
  { index: "003", title: "MOTION STUDIES",    category: "Interaction",       detail: "2023 — 11" },
  { index: "004", title: "TYPE SPECIMEN",     category: "Typography",        detail: "2023 — 09" },
  { index: "005", title: "GRID MANIFESTO",    category: "Systems",           detail: "2023 — 07" },
];

const specs: { label: string; value: React.ReactNode; essential: boolean }[] = [
  { label: "STATUS",     value: "ACTIVE",             essential: true  },
  { label: "ID",         value: "KSN—001",            essential: true  },
  { label: "LOCATION",   value: "LJUBLJANA",           essential: false },
  { label: "FOCUS",      value: "DESIGN ENGINEERING",  essential: false },
  { label: "LOCAL TIME", value: <Clock />,             essential: false },
];

const BORDER = "border-white/[0.07]";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Mobile top nav (<md) ── */}
      <nav className={`md:hidden fixed top-0 inset-x-0 z-20 h-14 flex items-center justify-between px-5 border-b ${BORDER} backdrop-blur-md bg-[#111111]/80`}>
        <span className="font-black text-[0.6rem] tracking-[0.3em] uppercase">
          KOSUTNIK
        </span>
        <a
          href="#"
          className="min-h-[44px] min-w-[44px] flex items-center justify-end text-[0.6rem] tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors"
        >
          INDEX
        </a>
      </nav>

      {/* ── Sidebar (md+) ── */}
      <aside className={`hidden md:flex fixed top-0 left-0 h-screen md:w-[200px] lg:w-16 border-r ${BORDER} flex-col md:items-start lg:items-center md:px-8 lg:px-0 py-10 z-10`}>
        <span className="font-black text-[0.6rem] tracking-[0.3em] uppercase md:mb-8 lg:mb-auto lg:[writing-mode:vertical-rl] lg:rotate-180 text-white/60">
          KOSUTNIK
        </span>
        <a
          href="#"
          className="text-[0.6rem] tracking-[0.25em] uppercase text-white/25 hover:text-white transition-colors min-h-[44px] flex items-center lg:[writing-mode:vertical-rl] lg:rotate-180 lg:justify-center"
        >
          INDEX
        </a>
      </aside>

      {/* ── Main ── */}
      <main className="pt-14 md:pt-0 md:ml-[200px] lg:ml-16 pl-5 md:pl-10 lg:pl-14 pr-5 md:pr-16 lg:pr-28">

        {/* Hero */}
        <section className={`pt-10 md:pt-16 pb-12 border-b ${BORDER} flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16`}>
          <div>
            <p style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }} className="tracking-[0.2em] uppercase text-white/30 leading-relaxed">
              Work
            </p>
            <p style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }} className="tracking-[0.2em] uppercase text-white/30 leading-relaxed">
              Archive
            </p>
          </div>

          <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-[6px] shrink-0">
            {specs.map(({ label, value, essential }) => (
              <div key={label} className={`contents ${!essential ? "hidden md:contents" : ""}`}>
                <span
                  className="tracking-[0.2em] uppercase text-white/25 self-center text-left"
                  style={{ fontSize: essential ? "10px" : undefined }}
                >
                  {label}
                </span>
                <span
                  className="tracking-[0.08em] uppercase tabular-nums md:text-base"
                  style={{ fontSize: essential ? "10px" : undefined }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Works */}
        <section className="pt-8 pb-24">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-white/20 mb-6 md:mb-8">
            Selected Works
          </p>
          <div>
            {works.map((work) => (
              <div
                key={work.index}
                className={`group border-t ${BORDER} last:border-b min-h-[44px] py-3 md:py-5 flex items-center gap-5 md:gap-8 cursor-pointer`}
              >
                <span className="text-xs text-white/20 w-8 shrink-0 tabular-nums hidden md:block">
                  {work.index}
                </span>
                <span
                  style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
                  className="tracking-[0.15em] uppercase font-semibold flex-1 transition-transform duration-200 ease-out group-hover:translate-x-2"
                >
                  {work.title}
                </span>
                <span className="text-xs text-white/20 tabular-nums opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 hidden md:block">
                  {work.detail}
                </span>
                <span className="text-xs text-white/30 shrink-0 md:w-32 text-right hidden sm:block">
                  {work.category}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
