import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getWriting, getWritingBySlug } from '@/lib/writing'

export function generateStaticParams() {
  return getWriting().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getWritingBySlug(slug)
  return { title: post ? `${post.title} - Jan Košutnik` : 'Not found' }
}

export default async function WritingPage({ params }) {
  const { slug } = await params
  const post = getWritingBySlug(slug)
  if (!post) notFound()

  return (
    <div className="max-w-[580px] mx-auto px-6 py-16">
      <p className="mb-12">
        <Link
          href="/"
          className="text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--faint)' }}
        >
          ← Jan Košutnik
        </Link>
      </p>
      <article>
        <h1 className="font-semibold text-base mb-1">{post.title}</h1>
        <p className="text-sm mb-8" style={{ color: 'var(--faint)' }}>{post.date}</p>
        <div
          className="leading-relaxed [&>p]:mb-4 [&>h2]:font-medium [&>h2]:mt-8 [&>h2]:mb-3"
          style={{ color: 'var(--soft)' }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}
