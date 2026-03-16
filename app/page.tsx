import Clock from "./components/Clock";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900 font-mono">

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-20 flex items-start justify-between px-8 py-6 border-b border-zinc-200 bg-stone-50">

        {/* Left: identity stack */}
        <div className="flex flex-col gap-[2px]">
          <span className="text-[0.65rem] tracking-widest uppercase font-bold">
            KOSUTNIK
            <span className="animate-blink ml-[2px]">█</span>
          </span>
          <span className="text-[0.65rem] tracking-widest uppercase text-zinc-400">
            ©2026
          </span>
        </div>

        {/* Right: metadata — hidden on mobile */}
        <div className="hidden md:flex items-start gap-10 text-[0.65rem] tracking-widest uppercase">
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-400">LOCATION</span>
            <span>LJUBLJANA</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-400">STATUS</span>
            <span>ACTIVE</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-400">FOCUS</span>
            <span>DESIGN ENGINEERING</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-400">LOCAL TIME</span>
            <span className="tabular-nums"><Clock /></span>
          </div>
        </div>
      </nav>

      {/* ── Main ── */}
      <main className="pt-36 px-8 md:px-16 lg:px-24">
        <section className="max-w-2xl py-16 border-b border-zinc-200">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-400 mb-8">
            001 — STATEMENT
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              Yet the average worker spends 3 hours a day managing tools
              instead of doing work. Dashboards that demand attention.
              Notifications that interrupt. Features designed to impress
              in demos, not help you on a Tuesday afternoon.
            </p>
            <p className="text-zinc-900 font-semibold">
              This is the opposite.
            </p>
            <p>
              Software that disappears. Does the job, then shuts up.
              No interface to babysit. No alerts to clear. Just outcomes,
              delivered quietly — while you do the work that actually matters.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
