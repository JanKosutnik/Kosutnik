import type { Metadata } from 'next'
import Link from 'next/link'
import SiteFrame from '@/components/SiteFrame'
import { getWriting } from '@/lib/writing'
import styles from '@/app/v1/v1.module.css'

export const metadata: Metadata = { title: 'Notes - Kosutnik' }

export default function NotesPage() {
  const notes = getWriting()

  return (
    <SiteFrame current="notes">
      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h1>notes</h1></header>
        <div className={styles.writingContent}>
          <div className={styles.writing}>
            {notes.map((note: { slug: string; title: string; date: string; formattedDate: string }) => (
              <Link href={`/notes/${note.slug}/`} key={note.slug}>
                <span>{note.title}</span>
                <time dateTime={note.date.replaceAll('.', '-')}>{note.formattedDate}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
