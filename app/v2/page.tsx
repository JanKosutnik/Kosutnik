import Link from 'next/link'
import { getWriting } from '@/lib/writing'
import styles from './v2.module.css'

const directory = [
  ['log', 'Dated decisions, changes and things shipped.', '/v2/log/'],
  ['notes', 'Longer thoughts worth keeping.', '/v2/notes/'],
  ['projects', 'Current state, changes and open questions.', '/v2/projects/'],
  ['library', 'Books and annotations.', '/v2/library/'],
  ['principles', 'Rules kept until they stop working.', '/v2/principles/'],
]

export default function V2HomePage() {
  const notes = getWriting()

  return (
    <main className={styles.main}>
      <section>
        <h1>Recent notes</h1>
        <ol className={styles.entries}>
          {notes.slice(0, 3).map((note: { slug: string; title: string; date: string; formattedDate: string }) => (
            <li key={note.slug}>
              <time dateTime={note.date.replaceAll('.', '-')}>{note.formattedDate}</time>
              <Link href={`/v2/notes/${note.slug}/`}>{note.title}</Link>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Directory</h2>
        <dl className={styles.directory}>
          {directory.map(([label, description, href]) => (
            <div key={href}>
              <dt><Link href={href}>{label}</Link></dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
