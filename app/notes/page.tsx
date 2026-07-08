import type { Metadata } from 'next'
import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import styles from '@/app/v2/v2.module.css'

export const metadata: Metadata = { title: 'Notes - Kosutnik' }

export default function NotesPage() {
  const notes = getWriting()

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">Kosutnik</Link>
        <nav aria-label="Page navigation">
          <Link href="/#about">about</Link>
          <Link href="/notes/" aria-current="page">notes</Link>
          <Link href="/principles/">principles</Link>
        </nav>
      </header>

      <section>
        <h1>notes</h1>
        <ol className={styles.notes}>
          {notes.map((note: { slug: string; title: string; date: string; formattedDate: string }) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}/`}>{note.title}</Link>
              <time dateTime={note.date.replaceAll('.', '-')}>{note.formattedDate}</time>
            </li>
          ))}
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
