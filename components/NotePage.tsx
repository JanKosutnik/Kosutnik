import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWriting, getWritingBySlug } from '@/lib/writing'
import styles from '@/app/writing/[slug]/post.module.css'

export default function NotePage({ slug }: { slug: string }) {
  const post = getWritingBySlug(slug)
  if (!post) notFound()

  const otherNotes = getWriting().filter(
    ({ slug: noteSlug }: { slug: string }) => noteSlug !== post.slug,
  )

  return (
    <main className={styles.page}>
      <header className={styles.masthead}>
        <Link className={styles.brand} href="/">Kosutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <Link href="/notes/" aria-current="page">notes</Link>
          <Link href="/principles/">principles</Link>
        </nav>
      </header>

      <article className={styles.article}>
        <aside className={styles.postAside} aria-label="other notes">
          <div className={styles.articleHeader}>
            <Link href="/notes/">notes</Link>
            <time dateTime={post.date.replaceAll('.', '-')}>{post.formattedDate}</time>
          </div>
          <section className={styles.pastPosts}>
            <h2>other notes</h2>
            <ol>
              {otherNotes.map(({ slug: noteSlug, title, date, formattedDate }: {
                slug: string
                title: string
                date: string
                formattedDate: string
              }) => (
                <li key={noteSlug}>
                  <Link href={`/notes/${noteSlug}/`}>{title}</Link>
                  <time dateTime={date.replaceAll('.', '-')}>{formattedDate}</time>
                </li>
              ))}
            </ol>
          </section>
        </aside>
        <div className={styles.postContent}>
          <h1>{post.title}</h1>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link className={styles.backLink} href="/notes/">
            <span aria-hidden="true">←</span> Back to notes
          </Link>
        </div>
      </article>
    </main>
  )
}
