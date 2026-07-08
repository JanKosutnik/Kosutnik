import type { Metadata } from 'next'
import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import styles from './v2.module.css'

export const metadata: Metadata = {
  title: 'Kosutnik - V2',
  description: "A minimal version of Jan Košutnik's personal website.",
  robots: { index: false, follow: false },
}

const principles = [
  'If you can remove it without breaking anything, remove it.',
  'If you need a manual to use it, the design is making you do its job.',
  'Every feature you add is a promise to keep it working - forever.',
  'Count the time a tool costs you, not just the time it saves.',
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  'A tool should help you finish - not keep you coming back.',
]

export default function V2Page({ basePath = '/v2/' }: { basePath?: '/' | '/v2/' } = {}) {
  const notes = getWriting()
  const aboutHref = `${basePath}#about`
  const notesHref = `${basePath}#notes`
  const principlesHref = `${basePath}#principles`

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href={basePath}>Kosutnik</Link>
        <nav aria-label="Page navigation">
          <a href={aboutHref}>about</a>
          <a href={notesHref}>notes</a>
          <a href={principlesHref}>principles</a>
        </nav>
      </header>

      <section id="about" className={styles.about}>
        <h1>about</h1>
        <div>
          <p>I am Jan, a UX and product designer based in Ljubljana, Slovenia.</p>
          <p>
            I have worked on software from several sides: designing how it feels, building how it works and testing
            whether it holds. That made me interested in what most software carries but does not need.
          </p>
          <p>
            I work independently, one project at a time. I spend most of my time thinking about how software feels
            to use, where complexity sneaks in and what can be removed.
          </p>
        </div>
      </section>

      <section id="notes">
        <h2>notes</h2>
        <ol className={styles.notes}>
          {notes.map((note: { slug: string; title: string; date: string; formattedDate: string }) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}/`}>{note.title}</Link>
              <time dateTime={note.date.replaceAll('.', '-')}>{note.formattedDate}</time>
            </li>
          ))}
        </ol>
      </section>

      <section id="principles">
        <h2>principles</h2>
        <ol className={styles.principles}>
          {principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ol>
      </section>

      <footer>
        <a href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>
        <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  )
}
