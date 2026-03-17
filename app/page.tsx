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
          <span className="text-[0.65rem] tracking-widest uppercase text-zinc-500">
            ©2026
          </span>
        </div>

        {/* Right: metadata — hidden on mobile */}
        <div className="flex items-start gap-4 md:gap-10 text-[0.65rem] tracking-widest uppercase">
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-500">LOCATION</span>
            <span>LJUBLJANA</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-500">STATUS</span>
            <span>ACTIVE</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-500">FOCUS</span>
            <span>DESIGN ENGINEERING</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-500">LOCAL TIME</span>
            <span className="tabular-nums"><Clock /></span>
          </div>
        </div>
      </nav>

      {/* ── Main ── */}
      <main className="pt-48 md:pt-36 px-8 md:px-16 lg:px-24">

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
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

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
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
                <span className="text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            003 — NOW
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p className="text-zinc-900 font-semibold">
              Building software that disappears into the background.
            </p>
            <p>
              My current focus is quiet AI systems that quietly handle repetitive, painful
              workflows for teams and individuals.
            </p>
            <p>
              You set it once. It runs silently, replaces the noisy apps you're tired of
              checking, and just delivers clean results — while you do the work that actually matters.
            </p>
            <p>
              On the side, I also run one-time UX strategy sessions to help you figure out
              what to build (and what to kill) before anything gets built.
            </p>
            <p>
              No daily dashboards.<br />
              No constant alerts.<br />
              Just outcomes.
            </p>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            004 — PRICING
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              No subscriptions.<br />
              No monthly fees.<br />
              You pay once. That's it.
            </p>
            <p>I build two kinds of fixed-price, outcome-based work:</p>
            <div className="space-y-2">
              <p className="text-zinc-900 font-semibold">Quiet AI Systems</p>
              <p>
                One-time builds that take over a painful repetitive workflow, run silently
                in the background, and keep delivering results long after you've forgotten
                about them.
              </p>
              <p>
                Set it once. Forget it. No babysitting required.
              </p>
              <p>
                Typical range: €4,500 (focused automation) to €20,000 (full background system).<br />
                Fast delivery is standard.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-900 font-semibold">UX Consulting</p>
              <p>
                One-time deep dives: I review your workflows, tell you exactly what to simplify,
                what to automate, and how to make it feel obvious. You get a clear, actionable plan.
              </p>
              <p>From €2,500 — ships in 3–5 days.</p>
            </div>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            005 — LET'S BUILD
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              If you have one workflow that constantly eats your time and attention —
              or need help figuring out what to simplify first — I'm in Ljubljana and available.
            </p>
            <p>
              <a href="mailto:jan@kindspace.studio" className="text-zinc-900 hover:text-zinc-500 transition-colors">jan@kindspace.studio</a><br />
              <a href="https://x.com/JanKosutnik" className="text-zinc-900 hover:text-zinc-500 transition-colors">@JanKosutnik on X</a>
            </p>
            <p>
              Just email me the pain. I'll reply with a fixed quote in 24 hours.<br />
              No decks. No calendars.
            </p>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            006 — ABOUT
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              I design experiences and consult for a living.<br />
              Tried frontend and QA — learned fast, moved on faster.
            </p>
            <p>
              The real obsession has always been the thinking before the pixels:
              what to build, what to kill, how to make it feel obvious.
            </p>
            <p>
              Now I use AI to ship tools that do the job and then vanish.<br />
              No interface. No noise. Just outcomes.
            </p>
            <p>
              Based in Ljubljana, Slovenia.<br />
              Working with teams and individuals worldwide.
            </p>
          </div>
        </section>

      </main>

      <footer className="px-8 py-6 text-[0.65rem] tracking-widest uppercase text-zinc-500">
        Made with discipline in Ljubljana • No tracking, no cookies, no bullshit.
      </footer>

    </div>
  );
}
