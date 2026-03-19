import Clock from "./components/Clock";

const SECTION = "max-w-2xl py-16 md:mx-auto";
const LABEL = "text-[0.75rem] tracking-widest uppercase text-zinc-500 mb-8";
const BODY = "space-y-6 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700";
const LINK = "hover:opacity-70 transition-opacity underline";
const LINK_COLOR = { color: "#aa99ff" };

const navItems = [
  { label: "LOCATION", value: "LJUBLJANA" },
  { label: "STATUS",   value: "ACTIVE" },
  { label: "FOCUS",    value: "DESIGN ENGINEERING" },
];

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
    <div className="min-h-screen text-zinc-900 font-mono font-medium" style={{backgroundColor:"#f3f3f2"}}>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-20 flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-8 py-6 backdrop-blur-sm" style={{backgroundColor:"#f3f3f2e6"}}>
        <div className="flex flex-col gap-[2px]">
          <span className="text-[0.65rem] tracking-widest uppercase font-bold">
            JAN KOSUTNIK
            <span className="animate-blink ml-[2px]">█</span>
          </span>
          <span className="text-[0.65rem] tracking-widest uppercase text-zinc-500">©2026</span>
        </div>

        <div className="flex items-start gap-4 md:gap-10 text-[0.65rem] tracking-widest uppercase">
          {navItems.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-[2px]">
              <span className="text-zinc-500">{label}</span>
              <span>{value}</span>
            </div>
          ))}
          <div className="flex flex-col gap-[2px]">
            <span className="text-zinc-500">LOCAL TIME</span>
            <span className="tabular-nums"><Clock /></span>
          </div>
        </div>

        {/* Section links */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.65rem] tracking-widest uppercase">
          {[
            { label: "Statement",  href: "#statement" },
            { label: "Manifesto",  href: "#manifesto" },
            { label: "Now",        href: "#now" },
            { label: "Let's Build",href: "#lets-build" },
            { label: "About",      href: "#about" },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="text-zinc-500 hover:text-zinc-900 transition-colors">{label}</a>
          ))}
        </div>

        {/* Gradient fade below nav */}
        <div className="absolute inset-x-0 top-full h-12 pointer-events-none" style={{background: "linear-gradient(to bottom, #f3f3f2, transparent)"}} />
      </nav>

      {/* Main */}
      <main className="pt-48 md:pt-36 px-8 md:px-16 lg:px-24">

        {/* Tagline */}
        <section className="max-w-2xl py-8 md:mx-auto">
          <p className="text-[1.1rem] leading-snug tracking-wide text-zinc-900 font-semibold">
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
              So I stopped building software that adds to the pile. Now I only build the opposite —
              software that does the job, then shuts up. No interface to babysit. No alerts to clear.
              You get results while you're busy doing something that actually matters.
            </p>
            <p className="text-zinc-900 font-semibold">
              Quiet software. That's what I'm interested in now.
            </p>
          </div>
        </section>

        {/* 002 — Manifesto */}
        <section id="manifesto" className={SECTION}>
          <p className={LABEL}>002 — MANIFESTO</p>
          <ul className="space-y-4 text-[0.85rem] leading-relaxed tracking-wide text-zinc-700">
            {manifesto.map(({ lead, rest }, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-zinc-500 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>
                  <span className="text-zinc-900 font-semibold">{lead}</span> {rest}
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
              Most of my time goes into quiet AI systems — the kind that handle repetitive,
              painful workflows for teams and individuals. You set it once. It runs silently.
              It replaces the noisy apps you're tired of checking. It delivers results while
              you focus on work that actually matters.
            </p>
            <p>
              Sometimes I lead one-time UX strategy sessions — helping figure out what to build
              and what to kill before anyone writes a line of code.
            </p>
            <p>
              And every now and then, I still design a website or take on something purely visual.
              Old habits. I enjoy it when the project is right.
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

      <footer className="px-8 py-6 text-[0.65rem] tracking-widest uppercase text-zinc-500">
        Made with discipline in Ljubljana • No tracking, no cookies, no bullshit.
      </footer>

    </div>
  );
}
