import TechSpecs from "./components/TechSpecs";

const works = [
  { index: "001", title: "SPATIAL INTERFACE", category: "Interface Design" },
  { index: "002", title: "ARCHIVE SYSTEM", category: "Data Architecture" },
  { index: "003", title: "MOTION STUDIES", category: "Interaction" },
  { index: "004", title: "TYPE SPECIMEN", category: "Typography" },
  { index: "005", title: "GRID MANIFESTO", category: "Systems" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 border-r border-black/10 flex flex-col px-8 py-10">
        <span className="font-black text-xs tracking-[0.25em] uppercase mb-12">
          KOSUTNIK
        </span>
        <nav className="flex flex-col gap-1">
          {["INDEX", "SPEC", "LOGS"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs tracking-widest text-black/35 hover:text-black transition-colors duration-150 py-1"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 px-20">
        {/* Hero */}
        <section className="py-24 border-b border-black/10">
          <p className="text-xs tracking-[0.3em] uppercase text-black/35 mb-6">
            Identity Statement
          </p>
          <h1 className="text-[8vw] font-black tracking-tighter leading-[0.9] uppercase">
            Work &amp;<br />Archive
          </h1>
        </section>

        <TechSpecs />

        {/* Selected Works */}
        <section className="pt-12 pb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-black/35 mb-8">
            Selected Works
          </p>
          <div>
            {works.map((work) => (
              <div
                key={work.index}
                className="group border-t border-black/10 last:border-b py-5 flex items-center gap-8 cursor-pointer hover:bg-[#F2F2F2] transition-colors duration-150"
              >
                <span className="text-xs text-black/30 w-10 shrink-0 tabular-nums">
                  {work.index}
                </span>
                <span className="font-black text-sm uppercase tracking-tight flex-1 transition-transform duration-200 ease-out group-hover:translate-x-2">
                  {work.title}
                </span>
                <span className="text-xs text-black/40 shrink-0">
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
