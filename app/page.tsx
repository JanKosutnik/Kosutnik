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

const notes = [
  "Most software isn't built for you. It's built to keep you inside it. There's a difference and it's worth understanding.",
  "Everyone calls it a productivity tool. Nobody counts the hours it costs you to actually run the thing.",
  "You stopped being the user at some point. Now you're the metric that justifies someone else's roadmap.",
  "Nobody planned it this way. Incentives do funny things to people over time.",
  "Removing a feature is hard. Not technically - politically. You need conviction, a meeting, and someone willing to look boring.",
  "Every feature is a debt. The launch is just when you sign the papers.",
  "The best tool is the one you stop thinking about.",
  "Before you automate anything, ask if it should exist at all. That question is worth more than most of the automation.",
  "AI doesn't fix a broken process. It makes the broken parts happen faster.",
  "Five tools, good intentions, workflows built around the gaps between them - and someone calls it a system. It isn't.",
  "Every product worth respecting was defined mostly by what it refused to become.",
  "What actually changed for you? That's the only question that matters.",
  "This will change. That's fine. It means it's still honest.",
];

export default function Home() {
  return (
    <div className="min-h-screen font-mono font-medium" style={{backgroundColor:"var(--bg)", color:"var(--fg)"}}>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-20 flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-8 py-6 backdrop-blur-sm" style={{backgroundColor:"var(--bg-alpha)"}}>
        <div className="flex flex-col gap-[2px]">
          <div className="flex items-center justify-between gap-8">
            <a href="/" className="text-[0.65rem] tracking-widest uppercase font-bold no-underline" style={{color:"var(--fg)"}}>
              JAN KOSUTNIK
              <span className="animate-blink ml-[2px]">█</span>
            </a>
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <span className="text-[0.65rem] tracking-widest uppercase tabular-nums"><Clock /></span>
            </div>
          </div>
          <span className="text-[0.65rem] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">©2026</span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.65rem] tracking-widest uppercase">
          {[
            { label: "About",   href: "#about" },
            { label: "Notes",   href: "#notes" },
            { label: "Work",    href: "#work" },
            { label: "Contact", href: "mailto:jan@kindspace.studio" },
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

        <div className="absolute inset-x-0 top-full h-12 pointer-events-none" style={{background: "linear-gradient(to bottom, var(--bg-gradient), transparent)"}} />
      </nav>

      {/* Main */}
      <main className="pt-48 md:pt-36 px-8 md:px-16 lg:px-24">

        {/* Tagline */}
        <section className="max-w-2xl py-8 md:mx-auto">
          <p className="text-[1.1rem] leading-snug tracking-wide font-semibold">
            Software that gets out of the way.
          </p>
        </section>

        {/* 001 - About */}
        <section id="about" className={SECTION}>
          <p className={LABEL}>001 - ABOUT</p>
          <div className={BODY}>
            <p>Hi, I'm Jan (pronounced like "yawn", without the w).</p>
            <p>
              I've spent most of my career helping people figure out what to build - and more often, what not
              to build. UX strategy, frontend work, QA. Not because I couldn't choose, but because I wanted
              to understand where things actually break. It's almost always before the first line of code gets written.
            </p>
            <p>
              Lately I've been building small things with AI. Micro apps that save me an hour here, thirty
              minutes there. Nothing impressive to look at. That's the point. I'm also building this site
              with Claude Code - partly to ship something, partly to understand where AI-assisted development
              actually falls apart.
            </p>
            <p>I live in Ljubljana. I work with people everywhere.</p>
            <p>This is where I think out loud.</p>
          </div>
        </section>

        {/* 002 - Notes */}
        <section id="notes" className={SECTION}>
          <p className={LABEL}>002 - NOTES</p>
          <ul className="space-y-4 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700 dark:text-zinc-300">
            {notes.map((note, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-500 dark:text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 003 - Work */}
        <section id="work" className={SECTION}>
          <p className={LABEL}>003 - WORK</p>
          <div className={BODY}>
            <p>Two things I do, when the problem is right.</p>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>Complexity Diagnostic.</span>{" "}
              I go through everything you're running - tools, subscriptions, workflows - and tell you exactly
              what's costing you. Not vaguely. Specifically. This tool is redundant. This workflow has steps
              that shouldn't exist. This subscription nobody has opened since March. Five working days. A short
              written audit with a clear list of what to cut and one thing worth building. Fixed fee, €450.
            </p>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>Quiet systems.</span>{" "}
              Tell me about the workflow eating your week. The one across three tools, full of copy-pasting,
              where things slip every time someone's out of office. I'll build something that handles it - one
              job, nothing extra, live in your business in under two weeks. Projects start at €1,200, scoped
              and fixed upfront. No surprises.
            </p>
            <p>Not for you if the goal is to impress rather than fix.</p>
            <p>
              Email me three sentences about the problem. I'll reply with what I'd do, what it costs, and how
              long it takes.
            </p>
            <p>No decks. No discovery calls. No calendars.</p>
            <p>
              <a href="mailto:jan@kindspace.studio" className={LINK} style={LINK_COLOR}>jan@kindspace.studio</a>{" · "}
              <a href="https://x.com/JanKosutnik" className={LINK} style={LINK_COLOR}>@JanKosutnik on X</a>{" · "}
              <a href="https://www.linkedin.com/in/jankosutnik/" className={LINK} style={LINK_COLOR}>LinkedIn</a>
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
