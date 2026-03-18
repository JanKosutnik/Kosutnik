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

        {/* ── Tagline ── */}
        <section className="max-w-2xl py-8 md:mx-auto">
          <p className="text-[1.1rem] leading-snug tracking-wide text-zinc-900 font-semibold">
            Software that stays out of your way.
          </p>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            001 — STATEMENT
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              The average worker spends three hours a day managing tools instead of doing real work.
              Think about that. Three hours of dashboards, notifications, and apps that demand
              attention like needy pets.
            </p>
            <p className="text-zinc-900 font-semibold">
              That's not productivity. That's overhead with a monthly fee.
            </p>
            <p>
              This is the opposite. Software that does the job, then shuts up.
              No interface to babysit. No alerts to clear. Just outcomes,
              delivered quietly — while you do the work that actually matters.
            </p>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            002 — MANIFESTO
          </p>
          <ul className="space-y-4 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            {[
              { lead: "Attention is sacred.", rest: "We're bombarded every step of the way. Getting things done is harder than ever. Software shouldn't add to the noise — it should make the noise stop." },
              { lead: "The best tool disappears.", rest: "You forget it's running. That's the goal." },
              { lead: "No is harder than yes.", rest: "Every feature you add is a feature someone has to learn, maintain, and ignore. Saying no is the real work." },
              { lead: "Ship in days, not months.", rest: "Planning forever feels productive. It isn't." },
              { lead: "Simplicity is discipline.", rest: "Anyone can add. Removing takes guts." },
              { lead: "AI does the boring parts.", rest: "Humans do the interesting parts. That's the deal." },
              { lead: "Outcomes over hours.", rest: "I don't sell time. I sell things that work." },
              { lead: "Generic landing pages are a disease.", rest: "Honestly, I can't stand them. If this one looks like everyone else's, something went wrong." },
              { lead: "This will change.", rest: "So will the services. So will this website. That's the point — stay lean, keep learning, don't get precious about it." },
            ].map(({ lead, rest }, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span><span className="text-zinc-900 font-semibold">{lead}</span> {rest}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            003 — NOW
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              My current focus is quiet AI systems that handle repetitive, painful
              workflows for teams and individuals.
            </p>
            <p>
              You set it once. It runs silently, replaces the noisy apps you're tired of
              checking, and just delivers clean results — while you do the work that actually matters.
            </p>
            <p>
              Occasionally, I also run one-time UX strategy sessions to help figure out
              what to build (and what to kill) before anything gets coded.
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
              No subscriptions. No monthly fees. You pay once, and that's it.
            </p>
            <div className="space-y-2">
              <p className="text-zinc-900 font-semibold">Quiet AI Systems</p>
              <p>
                One-time builds that take over a painful workflow, run silently
                in the background, and keep delivering long after you've forgotten about them.
                Set it once. Forget it. No babysitting required.
              </p>
              <p>
                €4,500 (focused automation) to €18,000 (full background system).<br />
                Fast delivery is standard.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-900 font-semibold">UX Consulting</p>
              <p>
                One-time deep dives. I review your workflows, tell you what to simplify,
                what to automate, and how to make it obvious. You get a clear, actionable plan —
                not a deck full of buzzwords.
              </p>
              <p>From €2,500. Ships in 3–5 days.</p>
            </div>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            005 — LET'S BUILD
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              If you have one workflow that constantly eats your time and attention — or need
              help figuring out what to simplify first — just email me the pain. Describe the
              problem in a few sentences. I'll reply with a fixed quote in 24 hours.
            </p>
            <p>No decks. No discovery calls. No calendars to navigate.</p>
            <p>
              <a href="mailto:jan@kindspace.studio" className="text-zinc-900 hover:text-zinc-500 transition-colors underline">jan@kindspace.studio</a><br />
              <a href="https://x.com/JanKosutnik" className="text-zinc-900 hover:text-zinc-500 transition-colors underline">@JanKosutnik on X</a><br />
              <a href="https://www.linkedin.com/in/jankosutnik/" className="text-zinc-900 hover:text-zinc-500 transition-colors underline">LinkedIn</a>
            </p>
          </div>
        </section>

        <section className="max-w-2xl py-16 md:mx-auto">
          <p className="text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8">
            006 — ABOUT
          </p>
          <div className="space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            <p>
              I've spent most of my career as an experience designer and consultant.<br />
              Tried frontend development and QA along the way — learned plenty, then moved on.
            </p>
            <p>
              These days I combine that background with AI to build quiet systems and offer
              focused UX consulting on the side.
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
