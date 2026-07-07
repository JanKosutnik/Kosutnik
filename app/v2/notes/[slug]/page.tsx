import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWriting, getWritingBySlug } from '@/lib/writing'
import styles from '../../v2.module.css'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getWriting().map(({ slug }: { slug: string }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getWritingBySlug((await params).slug)
  return { title: post?.title ?? 'Not found' }
}

export default async function V2NotePage({ params }: PageProps) {
  const post = getWritingBySlug((await params).slug)
  if (!post) notFound()

  return (
    <main className={styles.main}>
      <article className={styles.note}>
        <header>
          <time dateTime={post.date.replaceAll('.', '-')}>{post.formattedDate}</time>
          <h1>{post.title}</h1>
        </header>
        <div className={styles.prose} dangerouslySetInnerHTML={{ __html: post.html }} />
        <p><Link href="/v2/notes/">All notes</Link></p>
      </article>
    </main>
  )
}
