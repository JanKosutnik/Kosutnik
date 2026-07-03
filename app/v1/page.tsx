import type { Metadata } from 'next'
import Link from 'next/link'
import V1Interactions from './V1Interactions'
import styles from './v1.module.css'

export const metadata: Metadata = {
  title: 'Jan Košutnik - V1',
  description: 'Designer and developer based in Ljubljana.',
  robots: { index: false, follow: false },
}

const principles = [
  'If you can remove it and nothing breaks, remove it.',
  'If you need a manual to use it, the design is making you do its job.',
  'Every feature you add is a promise to keep it working - forever.',
  'Count the time a tool costs you, not just the time it saves.',
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  'A tool should help you finish - not keep you coming back.',
]

function Answer({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className={styles.answer}>
      <h3>{question}</h3>
      <div>{children}</div>
    </div>
  )
}

export default function V1Page() {
  return (
    <main className={styles.page} id="content">
      <V1Interactions />
      <header className={styles.header} data-v1-header>
        <Link className={styles.brand} href="/v1/">Jan Košutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#work" data-section="work">work</a>
          <a href="#principles" data-section="principles">principles</a>
          <a href="#writing" data-section="writing">writing</a>
        </nav>
      </header>

      <section className={`${styles.grid} ${styles.intro}`} aria-labelledby="intro-title">
        <h1 id="intro-title">
          I&apos;m Jan, a designer and developer based in Ljubljana. Over the years I&apos;ve worked on software from every
          angle - designing how it looks, building how it works, testing whether it holds. That taught me to spot what
          doesn&apos;t need to be there.
        </h1>
        <p>I work independently now. One project at a time.</p>
      </section>

      <section className={styles.grid} id="work">
        <header className={styles.sectionTitle}><span>01</span><h2>work</h2></header>
        <div className={styles.stack}>
          <Answer question="What do you do?"><p>I build small systems that stay out of the way. Software, processes, the occasional decision someone has been avoiding.</p></Answer>
          <Answer question="What kind of clients?"><p>Small teams whose stack got heavier than it should be. People who don&apos;t want a slide deck, and already half-know what to remove.</p></Answer>
          <Answer question="How do you work?"><p>Plain English. Fixed scope. Fixed fee. Three sentences in an email is the right opening move.</p></Answer>
          <Answer question="What won't you do?"><p>Decks. Discovery calls. Calendars. Retainers. Newsletters.</p></Answer>
          <Answer question="What are you available for?"><p>Complexity Diagnostic (€1,200, written) and Quiet Systems (from €6,000). One at a time.</p></Answer>
          <Answer question="What if I'm not ready to hire?"><p>Read the <a href="#principles">principles</a>. If they land, we&apos;ll probably get on.</p></Answer>
          <Answer question="How do I reach you?">
            <p><a href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>. Also on <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a> and <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </Answer>
        </div>
      </section>

      <section className={styles.grid} id="principles">
        <header className={styles.sectionTitle}><span>02</span><h2>principles</h2></header>
        <ol className={styles.principles}>
          {principles.map((principle, index) => (
            <li key={principle}><span>{String(index + 1).padStart(2, '0')}</span><p>{principle}</p></li>
          ))}
        </ol>
      </section>

      <section className={styles.grid} id="writing">
        <header className={styles.sectionTitle}><span>03</span><h2>writing</h2></header>
        <div>
          <div className={styles.writing}>
            <Link href="/writing/on-removing-things/"><span>On removing things</span><time dateTime="2026-05-18">18/05/2026</time></Link>
            <Link href="/writing/notes-toward-a-calmer-interface/"><span>Notes toward a calmer interface</span><time dateTime="2026-04-02">02/04/2026</time></Link>
          </div>
          <p className={styles.note}>A garden, not a blog - these grow slowly.</p>
        </div>
      </section>

      <footer className={styles.footer}>© 2026 Jan Košutnik · Ljubljana</footer>
    </main>
  )
}
