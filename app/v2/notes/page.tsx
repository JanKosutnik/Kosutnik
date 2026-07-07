import type { Metadata } from 'next'
import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import styles from '../v2.module.css'

export const metadata: Metadata = { title: 'Notes' }

export default function V2NotesPage() {
  const notes = getWriting()

  return (
    <main className={styles.main}>
      <section>
        <h1>Notes</h1>
        <ol className={styles.entries}>
          {notes.map((note: { slug: string; title: string; date: string; formattedDate: string }) => (
            <li key={note.slug}>
              <time dateTime={note.date.replaceAll('.', '-')}>{note.formattedDate}</time>
              <Link href={`/v2/notes/${note.slug}/`}>{note.title}</Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
