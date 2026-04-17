import Clock from "./components/Clock";
import ThemeToggle from "./components/ThemeToggle";

const SECTION = "max-w-2xl py-16 md:mx-auto scroll-mt-48 md:scroll-mt-36";
const LABEL = "text-[0.75rem] tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-8";
const BODY = "space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700 dark:text-zinc-300";
const LINK = "hover:opacity-70 transition-opacity underline";
const LINK_COLOR = { color: "var(--link)" };

const LAST_UPDATE = new Date().toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const manifesto = [
  { lead: "Attention is sacred.",        rest: "Every app that demands it is making a bet that their problem is more important than yours. It usually isn't." },
  { lead: "The best tool disappears.",   rest: "You forget it's running. That's not a bug — that's the whole point." },
  { lead: "Simplicity is discipline.",   rest: "Anyone can add a feature. Removing one takes conviction." },
  { lead: "No is harder than yes.",      rest: "Every feature is something someone has to learn, maintain, work around, and eventually resent. Saying no is the real work." },
  { lead: "AI does the boring parts.",   rest: "Data entry. Summaries. The stuff that falls through the cracks at 5pm. Humans decide what matters. That's the deal." },
  { lead: "Outcomes over hours.",        rest: "How long it took to build is irrelevant. What changed for you is the only number that matters." },
  { lead: "Small enough to explain.",    rest: "If you can't describe what a system does in two sentences, it's too complicated. I won't build it." },
  { lead: "This will change.",           rest: "The tools will change. The services will change. This site will change. Good. That means it's still honest." },
];

export default function Home() {
  return (
    <div className="min-h-screen font-mono font-medium" style={{backgroundColor:"var(--bg)", color:"var(--fg)"}}>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-20 flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-8 py-6 backdrop-blur-sm" style={{backgroundColor:"var(--bg-alpha)"}}>
        <div className="flex flex-col gap-[2px]">
          <div className="flex items-center justify-between gap-8">
            <span className="text-[0.65rem] tracking-widest uppercase font-bold">
              JAN KOSUTNIK
              <span className="animate-blink ml-[2px]">█</span>
            </span>
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <span className="text-[0.65rem] tracking-widest uppercase tabular-nums"><Clock /></span>
            </div>
          </div>
          <span className="text-[0.65rem] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">©2026</span>
        </div>

        {/* Section links — middle */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.65rem] tracking-widest uppercase">
          {[
            { label: "Statement",          href: "#statement" },
            { label: "Manifesto",          href: "#manifesto" },
            { label: "Not For You If",     href: "#not-for-you" },
            { label: "Now",                href: "#now" },
            { label: "Let's Build",        href: "#lets-build" },
            { label: "About",              href: "#about" },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="hover:opacity-70 transition-opacity" style={LINK_COLOR}>{label}</a>
          ))}
        </div>

        <div className="hidden md:flex flex-col gap-1 text-[0.65rem] tracking-widest uppercase">
          <div className="flex gap-4">
            <span className="text-zinc-500 dark:text-zinc-400 w-24 shrink-0">LOCAL TIME</span>
            <span className="tabular-nums"><Clock /></span>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-500 dark:text-zinc-400 w-24 shrink-0">LAST UPDATE</span>
            <span>{LAST_UPDATE}</span>
          </div>
          <div className="flex gap-4 mt-1">
            <span className="text-zinc-500 dark:text-zinc-400 w-24 shrink-0">THEME</span>
            <ThemeToggle />
          </div>
        </div>

        {/* Gradient fade below nav */}
        <div className="absolute inset-x-0 top-full h-12 pointer-events-none" style={{background: "linear-gradient(to bottom, var(--bg-gradient), transparent)"}} />
      </nav>

      {/* Main */}
      <main className="pt-48 md:pt-36 px-8 md:px-16 lg:px-24">

        {/* Tagline */}
        <section className="max-w-2xl py-8 md:mx-auto">
          <p className="text-[1.1rem] leading-snug tracking-wide font-semibold">
            Software that stays out of your way.
          </p>
        </section>

        {/* 001 — Statement */}
        <section id="statement" className={SECTION}>
          <p className={LABEL}>001 — STATEMENT</p>
          <div className={BODY}>
            <p>Software used to feel like a tool. You picked it up, used it, put it down. It waited for you.</p>
            <p>
              That's not how it works anymore. Now software has goals of its own. It wants your attention,
              your data, your habit. It sends you notifications you didn't ask for, adds features you'll
              never use, and measures success by how long you stay inside it, not by how quickly you can
              leave. Somewhere between the third dashboard nobody opens and the fifth app that does roughly
              the same thing as the second, you stopped being the user. You became the product.
            </p>
            <p>
              The average worker burns three hours a day managing tools instead of doing work. Three hours.
              That's not a productivity problem. That's a design philosophy and it's working exactly as intended.
            </p>
            <p>
              I got tired of it. Not just the AI hype, but all of it — the bloat, the noise, the software
              that demands attention it never earned. So I stopped building things that compete for your time.
              Now I only build things that give it back.
            </p>
          </div>
        </section>

        {/* 002 — Manifesto */}
        <section id="manifesto" className={SECTION}>
          <p className={LABEL}>002 — MANIFESTO</p>
          <ul className="space-y-4 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700 dark:text-zinc-300">
            {manifesto.map(({ lead, rest }, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-500 dark:text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>
                  <span className="font-semibold" style={{color:"var(--fg)"}}>{lead}</span> {rest}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 003 — This Isn't For You If */}
        <section id="not-for-you" className={SECTION}>
          <p className={LABEL}>003 — THIS ISN'T FOR YOU IF</p>
          <ul className="space-y-3 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700 dark:text-zinc-300">
            {[
              "You want a chatbot because your competitor has one.",
              "You want to "implement AI" without first naming a specific workflow that's currently broken.",
              "You want something to impress investors rather than actually save time.",
              "You're looking for a vendor to manage. I work best when you have a real problem and want it gone.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-500 dark:text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 004 — Now */}
        <section id="now" className={SECTION}>
          <p className={LABEL}>004 — NOW</p>
          <div className={BODY}>
            <p>
              Running small experiments with quiet AI systems — testing what's actually useful
              versus what sounds useful in a demo.
            </p>
            <p>
              UX strategy on the side, when the question is what to build and what to kill before
              anyone writes code.
            </p>
            <p>Occasional visual work when the project earns it.</p>
            <p>Based in Ljubljana. Working worldwide.</p>
          </div>
        </section>

        {/* 005 — Let's Build */}
        <section id="lets-build" className={SECTION}>
          <p className={LABEL}>005 — LET'S BUILD</p>
          <div className={BODY}>
            <p>Two ways in:</p>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>You're not sure what's broken.</span><br />
              I'll audit what you're running — tools, subscriptions, workflows — and give you an
              honest picture of what's costing you time and money. Five working days. A short list
              of what to cut and one thing worth building. Fixed fee, paid upfront. If nothing's
              worth building, you'll still know exactly what to kill.
            </p>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>You know exactly what's broken.</span><br />
              Tell me about the workflow eating your week. The one spread across three tools with
              manual steps and things that keep slipping through. I'll build something quiet that
              handles it — purpose-built, nothing extra. Live in your business in under two weeks.
              You set it up once and stop thinking about it.
            </p>
            <p>
              Either way, email me three sentences about the problem. I'll reply with what I'd do,
              what it costs, and how long it takes.
            </p>
            <p>No decks. No discovery calls. No calendars.</p>
            <p>
              <a href="mailto:jan@kindspace.studio" className={LINK} style={LINK_COLOR}>jan@kindspace.studio</a><br />
              <a href="https://x.com/JanKosutnik" className={LINK} style={LINK_COLOR}>@JanKosutnik on X</a><br />
              <a href="https://www.linkedin.com/in/jankosutnik/" className={LINK} style={LINK_COLOR}>LinkedIn</a>
            </p>
          </div>
        </section>

        {/* 006 — About */}
        <section id="about" className={SECTION}>
          <p className={LABEL}>006 — ABOUT</p>
          <div className={BODY}>
            <p>
              I'm an Experience designer and consultant who got tired of helping teams build things
              they didn't need.
            </p>
            <p>
              I spent years doing UX design and strategy, frontend work and QA — not because I
              couldn't choose, but because I wanted to understand where things actually break down.
              Turns out it's almost always before the first line of code gets written.
            </p>
            <p>
              Now I combine that background with AI to build systems that are small on purpose.
              One job. Minimal surface area. Nothing you have to babysit.
            </p>
            <p>
              Ljubljana, Slovenia. Working with people and teams all over the place.
            </p>
          </div>
        </section>

      </main>

      <footer className="px-8 py-6 text-[0.65rem] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
        Made with discipline in Ljubljana • No tracking, no cookies, no bullshit. • Last update: {LAST_UPDATE}
      </footer>

    </div>
  );
}
