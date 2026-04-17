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
  { lead: "Attention is sacred.",        rest: "Every app that demands it has decided their problem is more important than yours. Usually it isn\u2019t." },
  { lead: "The best tool disappears.",   rest: "You forget it\u2019s running. That\u2019s not a coincidence \u2014 that\u2019s the only measure of success I care about." },
  { lead: "Simplicity is discipline.",   rest: "Anyone can add a feature. Takes about twenty minutes and a JIRA ticket. Removing one takes conviction, a meeting, and someone willing to say no out loud." },
  { lead: "No is harder than yes.",      rest: "Every feature added is something to learn, maintain, and eventually route around. The best product decisions are the ones nobody notices because nothing broke." },
  { lead: "AI does the boring parts.",   rest: "The data entry. The summaries. The stuff that falls through the cracks at 5pm on a Friday. Humans decide what matters." },
  { lead: "Outcomes over hours.",        rest: "What changed for you is the only number that counts. How long it took to build is my problem, not yours." },
  { lead: "Small enough to explain.",    rest: "Two sentences. If it takes more, it\u2019s too complicated and I won\u2019t build it." },
  { lead: "This will change.",           rest: "The tools will change. This site will change. Good \u2014 that means it\u2019s still honest." },
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
            { label: "Statement",      href: "#statement" },
            { label: "Manifesto",      href: "#manifesto" },
            { label: "Now",            href: "#now" },
            { label: "Not For You",    href: "#not-for-you" },
            { label: "Let's Build",    href: "#lets-build" },
            { label: "About",          href: "#about" },
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
            <p>Software used to be a tool. You picked it up, used it, put it down. It had no opinion about whether you came back.</p>
            <p>
              That changed. Somewhere between the third dashboard nobody opens and the fifth app that does
              roughly what the second one does, software stopped being something you use and started being
              something you manage. The notifications, the feature releases, the onboarding nudges \u2014 none
              of that exists to help you finish faster. It exists to make sure you don\u2019t leave.
            </p>
            <p>
              The average knowledge worker burns three hours a day on this. Not because they are disorganized.
              Because software is now designed, with considerable skill, to create dependency instead of results.
            </p>
            <p>
              I got tired of watching good people lose their mornings to it. So I stopped building things that
              compete for your attention. Now I only build things that give it back and then disappear.
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
              Right now I am building a system that monitors client inboxes and drafts responses to
              recurring questions \u2014 the kind of thing that quietly eats 45 minutes a day and never makes
              it onto anyone\u2019s to-do list because it\u2019s not a task, it\u2019s just a tax.
            </p>
            <p>
              Also doing UX strategy when the question is what to build or what to kill before anyone
              writes code. And occasional visual work when the project earns it.
            </p>
          </div>
        </section>

        {/* 004 — This Isn't For You If */}
        <section id="not-for-you" className={SECTION}>
          <p className={LABEL}>004 — THIS IS NOT FOR YOU IF</p>
          <div className={BODY}>
            <p>This is <span className="font-semibold" style={{color:"var(--fg)"}}>NOT</span> for you if you want a chatbot because your competitor has one.</p>
            <p>Or if you want to \u201cimplement AI\u201d without first naming a workflow that\u2019s actually broken.</p>
            <p>Or if you want something to demo in a board meeting rather than something that saves two hours on a Tuesday.</p>
            <p>Or if you need a vendor to manage. I work with people who have a specific problem and want it gone.</p>
          </div>
        </section>

        {/* 005 — Let's Build */}
        <section id="lets-build" className={SECTION}>
          <p className={LABEL}>005 — LET\u2019S BUILD</p>
          <div className={BODY}>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>Not sure what\u2019s broken?</span><br />
              I\u2019ll go through everything you\u2019re running \u2014 tools, subscriptions, workflows \u2014 and show you
              exactly what\u2019s quietly costing you. Five working days. You get a written audit: what to cancel,
              what to consolidate, and one thing worth building. Fixed fee, \u20AC450. For context: three hours a
              day at any reasonable salary costs more than that every week. If nothing\u2019s worth building,
              you\u2019ll at least know exactly what to kill.
            </p>
            <p>
              <span className="font-semibold" style={{color:"var(--fg)"}}>Know what\u2019s broken?</span><br />
              Tell me about the workflow eating your week. The one that lives across three tools, involves
              copy-pasting between tabs, and has things slipping every time someone\u2019s out of office.
              I\u2019ll build something that handles it \u2014 one job, nothing extra, live in your business in under
              two weeks. Projects start at \u20AC1,200, scoped and fixed before anything gets built. No surprises.
            </p>
            <p>
              Email me three sentences about the problem. I\u2019ll reply with what I\u2019d do, what it costs,
              and how long it takes.
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
              I\u2019m Jan (pronounced Yan). I\u2019ve been an experience designer and consultant for most of my
              career, with detours through frontend development and QA that I don\u2019t regret \u2014 they taught
              me where things actually break down.
            </p>
            <p>
              It\u2019s almost never where people think. A team adopts five tools with the best intentions,
              builds workflows around the gaps between them, and calls it a system. It isn\u2019t. It\u2019s five
              tools and a prayer.
            </p>
            <p>
              Now I build things that are small on purpose. One job. Minimal surface area. No monthly fee
              for something nobody opens.
            </p>
            <p>Ljubljana, Slovenia. Working with teams worldwide.</p>
          </div>
        </section>

      </main>

      <footer className="px-8 py-6 text-[0.65rem] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
        Made with discipline in Ljubljana • No tracking, no cookies, no bullshit. • Last update: {LAST_UPDATE}
      </footer>

    </div>
  );
}
