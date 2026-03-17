import Clock from "./components/Clock";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900 font-mono font-medium">

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-20 flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-8 py-6 bg-stone-50">

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
        <div className="flex items-start gap-4 md:gap-10 text-[0.65rem] tracking-widest uppercase">
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
      <main className="pt-48 md:pt-36 px-8 md:px-16 lg:px-24">
        <section className="max-w-2xl py-16">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-400 mb-8">
            001 — STATEMENT
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              Your time is worth more than any software subscription.
              Yet the average worker spends 3 hours a day managing tools
              instead of doing real work. Dashboards that demand attention.
              Notifications that interrupt. Features designed to impress
              in demos, not to help you on a Tuesday afternoon.
            </p>
            <p className="text-zinc-900 font-semibold">
              This is the opposite.
            </p>
            <p>
              Software that disappears. It does the job, then shuts up.
              No interface to babysit. No alerts to clear. Just outcomes,
              delivered quietly — while you do the work that actually matters.
            </p>
          </div>
        </section>

        <section className="max-w-2xl py-16">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-400 mb-8">
            002 — MANIFESTO
          </p>

          <ul className="space-y-3 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            {[
              "Most software is furniture that asks for attention.",
              "The best tool is the one you forget exists.",
              "Shipping in days beats planning for months.",
              "Saying \"no\" to features is harder and more valuable than saying \"yes.\"",
              "AI should do the boring work so humans can do the interesting work.",
              "Simplicity isn't laziness — it's discipline.",
              "Outcomes over hours.",
            ].map((line, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-300 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

    </div>
  );
}
