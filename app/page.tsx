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
  { lead: "Attention is sacred.",              rest: "We're bombarded every step of the way. Getting things done is harder than ever. Software shouldn't add to the noise — it should make the noise stop." },
  { lead: "The best tool disappears.",         rest: "You forget it's running. That's the goal." },
  { lead: "Simplicity is discipline.",         rest: "Anyone can add. Removing takes guts." },
  { lead: "No is harder than yes.",            rest: "Every feature you add is a feature someone has to learn, maintain, and ignore. Saying no is the real work." },
  { lead: "AI does the boring parts.",         rest: "Humans do the interesting parts. That's the deal." },
  { lead: "Outcomes over hours.",              rest: "That is it." },
  { lead: "Scroll jacking is still a thing.",  rest: "Somehow. It's the most annoying pattern on the web and it refuses to go away." },
  { lead: "This will change.",                 rest: "So will the services. So will this website. That's the point. Keep learning, don't get precious about it." },
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
            { label: "Statement",   href: "#statement" },
            { label: "Manifesto",   href: "#manifesto" },
            { label: "Now",         href: "#now" },
            { label: "Let's Build", href: "#lets-build" },
            { label: "About",       href: "#about" },
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
            <p>At some point I started looking at software differently.</p>
            <p>
              For too long, we've let software dictate how we work. We adapt to the tool instead
              of the other way around. We accept the bloat, the unnecessary features, the alerts
              that interrupt us mid-thought. We let notifications decide when we pay attention
              and to what.
            </p>
            <p>
              I got tired of it. Not just at work — in my personal life too. The same pattern
              everywhere. Apps demanding attention. Dashboards nobody asked for. Features designed
              to keep you inside the product, not to help you finish and leave.
            </p>
            <p>
              The average worker spends three hours a day managing tools instead of doing real
              work. Three hours. That's not productivity. That's overhead with a monthly fee.
            </p>
            <p>
              So I lost interest in adding to the noise. Now I'm drawn to the opposite — software
              that does its job and shuts up.
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

        {/* 003 — Now */}
        <section id="now" className={SECTION}>
          <p className={LABEL}>003 — NOW</p>
          <div className={BODY}>
            <p>
              Exploring what quiet AI systems could look like in practice. Small experiments.
              Seeing where it goes.
            </p>
            <p>
              Still doing UX strategy sessions — helping figure out what to build and what to
              kill before anyone writes code.
            </p>
            <p>
              And every now and then, a website or something purely visual. Old habits.
              I enjoy it when the project is right.
            </p>
          </div>
        </section>

        {/* 004 — Let's Build */}
        <section id="lets-build" className={SECTION}>
          <p className={LABEL}>004 — LET'S BUILD</p>
          <div className={BODY}>
            <p>Two ways I can help:</p>
            <p>
              If you're not sure where to start — I can look at what you're currently using and
              tell you what's quietly draining your time. Tools, subscriptions, workflows. You'll
              get a clear picture of what's costing you money and attention, and a short list of
              things to kill. Takes about five days. I call it a Complexity Diagnostic, but really
              it's just an honest inventory with recommendations.
            </p>
            <p>
              If you know what's broken — tell me about the workflow that's eating your time. The
              one that involves three tools, manual steps, and things falling through the cracks.
              I'll build a quiet system that handles it — purpose-built, nothing extra. You set it
              once and forget it's running.
            </p>
            <p>
              Either way, just email me. Describe the problem in a few sentences. I'll reply with
              a straight answer — what I'd do, what it would cost, how long it would take.
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
              I've spent most of my career as an experience designer and consultant.
              I tried front-end development and QA along the way — learned plenty, then moved on.
            </p>
            <p>
              I now use my background with AI to create quiet systems. I also provide
              focused UX consulting on the side.
            </p>
            <p>
              Based in Ljubljana, Slovenia.<br />
              Working with teams and individuals worldwide.
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
