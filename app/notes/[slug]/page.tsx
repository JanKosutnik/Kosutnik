import type { Metadata } from 'next'
import NotePage from '@/components/NotePage'
import { getWriting, getWritingBySlug } from '@/lib/writing'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getWriting().map(({ slug }: { slug: string }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getWritingBySlug((await params).slug)
  return { title: post ? `${post.title} - Kosutnik` : 'Not found' }
}

export default async function NotesSlugPage({ params }: PageProps) {
  return <NotePage slug={(await params).slug} />
}
