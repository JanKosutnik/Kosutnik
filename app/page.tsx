import type { Metadata } from 'next'
import Link from 'next/link'
import SiteFrame from '@/components/SiteFrame'
import { getWriting } from '@/lib/writing'
import styles from './v1/v1.module.css'

export const metadata: Metadata = {
  title: 'Kosutnik',
  description: "Jan Košutnik's notes, principles and build log.",
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  const notes = getWriting().slice(0, 3)

  return (
    <SiteFrame>
      <section className={styles.grid}>
        <div aria-hidden="true" />
        <div className={styles.prose}>
          <p>
            I live in Ljubljana and work independently, one project at a time. I spend most of my time thinking
            about how software feels to use, where complexity sneaks in and what can be removed.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h1>latest notes</h1></header>
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

      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h2>directory</h2></header>
        <div className={styles.prose}>
          <p className={styles.links}>
            <Link href="/notes/">notes</Link>
            <Link href="/principles/">principles</Link>
            <Link href="/log/">log</Link>
          </p>
        </div>
      </section>
    </SiteFrame>
  )
}
