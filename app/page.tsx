import Clock from "./components/Clock";

const works = [
  { index: "001", title: "SPATIAL INTERFACE", category: "Interface Design", detail: "2024 — 03" },
  { index: "002", title: "ARCHIVE SYSTEM",    category: "Data Architecture", detail: "2024 — 01" },
  { index: "003", title: "MOTION STUDIES",    category: "Interaction",       detail: "2023 — 11" },
  { index: "004", title: "TYPE SPECIMEN",     category: "Typography",        detail: "2023 — 09" },
  { index: "005", title: "GRID MANIFESTO",    category: "Systems",           detail: "2023 — 07" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* Sidebar — narrow, vertical text */}
      <aside className="fixed top-0 left-0 h-screen w-16 border-r border-white/5 flex flex-col items-center py-10 z-10">
        <span className="font-black text-[0.6rem] tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 mb-auto text-white/70">
          KOSUTNIK
        </span>
        <a
          href="#"
          className="text-[0.6rem] tracking-[0.25em] uppercase text-white/25 hover:text-white/70 transition-colors duration-200 [writing-mode:vertical-rl] rotate-180"
        >
          INDEX
        </a>
      </aside>

      {/* Main — asymmetric gutters */}
      <main className="ml-16 flex-1 pl-14 pr-28">

        {/* Hero */}
        <section className="pt-16 pb-14 border-b border-white/5 flex items-end justify-between gap-16">

          {/* Title — smaller than body, wide tracking */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-white/40 leading-relaxed">Work</p>
            <p className="text-sm tracking-[0.2em] uppercase text-white/40 leading-relaxed">Archive</p>
          </div>

          {/* Specs — right-aligned, values at base size (18px) */}
          <div className="grid grid-cols-[auto_auto] gap-x-10 gap-y-2 text-right shrink-0">
            {[
              { label: "LOCATION",   value: "LJUBLJANA" },
              { label: "STATUS",     value: "ACTIVE" },
              { label: "FOCUS",      value: "DESIGN ENGINEERING" },
            ].map(({ label, value }) => (
              <div key={label} className="contents">
                <span className="text-xs tracking-[0.2em] uppercase text-white/30 text-left self-center">
                  {label}
                </span>
                <span className="tracking-[0.08em] uppercase">
                  {value}
                </span>
              </div>
            ))}
            <span className="text-xs tracking-[0.2em] uppercase text-white/30 text-left self-center">
              LOCAL TIME
            </span>
            <span className="tabular-nums tracking-[0.08em]">
              <Clock />
            </span>
          </div>
        </section>

        {/* Selected Works */}
        <section className="pt-10 pb-28">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-white/20 mb-8">
            Selected Works
          </p>
          <div>
            {works.map((work) => (
              <div
                key={work.index}
                className="group border-t border-white/5 last:border-b py-5 flex items-center gap-8 cursor-pointer"
              >
                <span className="text-xs text-white/20 w-8 shrink-0 tabular-nums">
                  {work.index}
                </span>
                <span className="text-sm tracking-[0.15em] uppercase font-semibold flex-1 transition-transform duration-200 ease-out group-hover:translate-x-2">
                  {work.title}
                </span>
                <span className="text-xs text-white/25 tabular-nums opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                  {work.detail}
                </span>
                <span className="text-xs text-white/30 shrink-0 w-32 text-right">
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
