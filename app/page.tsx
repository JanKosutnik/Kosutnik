import type { Metadata } from 'next'
import Link from 'next/link'
import SiteFrame from '@/components/SiteFrame'
import { getWriting } from '@/lib/writing'
import styles from './v1/v1.module.css'

export const metadata: Metadata = {
  title: 'Kosutnik',
  description: "Jan Košutnik's notes and principles.",
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  const notes = getWriting()

  return (
    <SiteFrame>
      <section className={styles.grid} id="about">
        <header className={styles.sectionTitle}><h1>about</h1></header>
        <div className={styles.prose}>
          <p>I am Jan, a UX and product designer based in Ljubljana, Slovenia.</p>
          <p>
            I have worked on software from several sides: designing how it feels, building how it works, and testing
            whether it holds. That made me interested in what most software carries but does not need.
          </p>
          <p>
            I work independently, one project at a time. I spend most of my time thinking about how software feels
            to use, where complexity sneaks in and what can be removed.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h2>notes</h2></header>
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
