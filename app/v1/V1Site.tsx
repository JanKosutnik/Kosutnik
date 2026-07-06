import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import V1Interactions from './V1Interactions'
import styles from './v1.module.css'

const principles = [
  'If you can remove it without breaking anything, remove it.',
  'If you need a manual to use it, the design is making you do its job.',
  'Every feature you add is a promise to keep it working - forever.',
  'Count the time a tool costs you, not just the time it saves.',
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  'A tool should help you finish - not keep you coming back.',
]

export default function V1Site({ homeHref = '/', color = false }: { homeHref?: string; color?: boolean }) {
  const writing = getWriting()

  return (
    <main className={`${styles.page} ${color ? styles.color : ''}`} id="content">
      <V1Interactions />
      <header className={styles.header} data-v1-header>
        <Link className={styles.brand} href={homeHref}>Kosutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#hello" data-section="hello">hello</a>
          <a href="#now" data-section="now">now</a>
          <a href="#notes" data-section="notes">notes</a>
          <a href="#principles" data-section="principles">principles</a>
          <a href="#contact" data-section="contact">contact</a>
        </nav>
      </header>

      <section className={`${styles.grid} ${styles.intro}`} id="hello" aria-labelledby="intro-title">
        <h1 id="intro-title">
          <span>I am Jan, a UX and product designer based in Ljubljana, Slovenia.</span>
          <span>
            I have worked on software from several sides: designing how it feels, building how it works, and testing
            whether it holds. That made me interested in what most software carries but does not need.
          </span>
        </h1>
        <p>This place changes when I do. That&apos;s the whole point.</p>
      </section>

      <section className={styles.grid} id="now" data-section-panel>
        <header className={styles.sectionTitle}><span>01</span><h2>now</h2></header>
        <div className={styles.prose}>
          <p>I live in Ljubljana and work independently. One project at a time.</p>
          <p>
            I spend most of my time thinking about how software feels to use, where complexity sneaks in and what
            can be removed.
          </p>
          <p>This site is part notebook and part reference shelf. I update it when I have something worth keeping.</p>
        </div>
      </section>

      <section className={styles.grid} id="notes" data-section-panel>
        <header className={styles.sectionTitle}><span>02</span><h2>notes</h2></header>
        <div className={styles.writingContent}>
          <div className={styles.writing}>
            {writing.map((post: { slug: string; title: string; date: string; formattedDate: string }) => (
              <Link href={`/writing/${post.slug}/`} key={post.slug}>
                <span>{post.title}</span>
                <time dateTime={post.date.replaceAll('.', '-')}>{post.formattedDate}</time>
              </Link>
            ))}
          </div>
          <p className={styles.note}>A garden rather than a blog. These grow slowly.</p>
        </div>
      </section>

      <section className={styles.grid} id="principles" data-section-panel>
        <header className={styles.sectionTitle}><span>03</span><h2>principles</h2></header>
        <ol className={styles.principles}>
          {principles.map((principle, index) => (
            <li key={principle}><span>{String(index + 1).padStart(2, '0')}</span><p>{principle}</p></li>
          ))}
        </ol>
      </section>

      <section className={styles.grid} id="contact" data-section-panel>
        <header className={styles.sectionTitle}><span>04</span><h2>contact</h2></header>
        <div className={styles.prose}>
          <p className={styles.links}>
            <a href="mailto:jan@kosutnik.com">Email</a>
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </section>

      <footer className={styles.footer}>© 2026 Jan Košutnik · Ljubljana</footer>
    </main>
  )
}
