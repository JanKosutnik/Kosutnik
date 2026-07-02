import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getWriting, getWritingBySlug } from '@/lib/writing'

export function generateStaticParams() {
  return getWriting().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getWritingBySlug(slug)
  return { title: post ? `${post.title} - Jan Kosutnik` : 'Not found' }
}

export default async function WritingPage({ params }) {
  const { slug } = await params
  const post = getWritingBySlug(slug)
  if (!post) notFound()

  return (
    <div className="wrap">
      <Link href="/" className="writing-back">← home</Link>

      <p className="lbl">writing/{slug}</p>

      <article>
        <h1 className="article-title">{post.title}</h1>
        <span className="article-date">{post.date}</span>
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}
