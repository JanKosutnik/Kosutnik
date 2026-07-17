import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import styles from './family.module.css'

const principles = [
  'If you can remove it without breaking anything, remove it.',
  'If you need a manual to use it, the design is making you do its job.',
  'Every feature you add is a promise to keep it working - forever.',
  'Count the time a tool costs you, not just the time it saves.',
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  'A tool should help you finish - not keep you coming back.',
]

export default function V2FamilySite() {
  const writing = getWriting()

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/v2/">Kosutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#now">Now</a>
          <a href="#notes">Notes</a>
          <a href="#principles">Principles</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.intro} aria-labelledby="intro-title">
        <h1 id="intro-title">Kosutnik</h1>
        <p>
          Jan Košutnik works on software from several sides: how it feels, how it works, and what it can do without.
        </p>
      </section>

      <section className={styles.section} id="now">
        <h2>Now</h2>
        <div className={styles.prose}>
          <p>I live in Ljubljana and work independently. One project at a time.</p>
          <p>I spend most of my time thinking about where complexity sneaks in and what can be removed.</p>
        </div>
      </section>

      <section className={styles.section} id="notes">
        <h2>Notes</h2>
        <div className={styles.linksList}>
          {writing.map((post: { slug: string; title: string; date: string; formattedDate: string }) => (
            <Link href={`/notes/${post.slug}/`} key={post.slug}>
              <span>{post.title}</span>
              <time dateTime={post.date.replaceAll('.', '-')}>{post.formattedDate}</time>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} id="principles">
        <h2>Principles</h2>
        <ol className={styles.principles}>
          {principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ol>
      </section>

      <section className={styles.section} id="contact">
        <h2>Contact</h2>
        <p className={styles.contact}>
          <a href="mailto:jan@kosutnik.com">Email</a>
          <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>

      <footer className={styles.footer}>© 2026 Jan Košutnik · Ljubljana</footer>
    </main>
  )
}
