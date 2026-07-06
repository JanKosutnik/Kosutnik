import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWriting, getWritingBySlug } from '@/lib/writing'
import styles from './post.module.css'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getWriting().map(({ slug }: { slug: string }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getWritingBySlug(slug)

  return {
    title: post ? `${post.title} - Kosutnik` : 'Not found',
  }
}

export default async function VariantWritingPage({ params }: PageProps) {
  const { slug } = await params
  const post = getWritingBySlug(slug)

  if (!post) notFound()

  return (
    <main className={styles.page}>
      <header className={styles.masthead}>
        <Link className={styles.brand} href="/">Kosutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <Link href="/#now">now</Link>
          <Link href="/#notes">notes</Link>
          <Link href="/#principles">principles</Link>
          <Link href="/#elsewhere">elsewhere</Link>
        </nav>
      </header>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <Link href="/#notes">notes</Link>
          <time dateTime={post.date.replaceAll('.', '-')}>{post.formattedDate}</time>
        </header>
        <div>
          <h1>{post.title}</h1>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Link className={styles.backLink} href="/#notes">
            <span aria-hidden="true">←</span> Back to notes
          </Link>
        </div>
      </article>
    </main>
  )
}
