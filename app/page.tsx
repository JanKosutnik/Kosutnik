import type { Metadata } from 'next'
import { siteMeta } from '@/content/site'
import { getWriting } from '@/lib/writing'
import HomePage from '@/components/HomePage'

const BASE_URL = 'https://kosutnik.com'

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: 'website',
    url: BASE_URL,
    siteName: siteMeta.name,
  },
}

export default function Page() {
  const writing = (getWriting() as Array<{ slug: string; title: string; formattedDate: string }>)
    .map(({ slug, title, formattedDate }) => ({ slug, title, formattedDate }))

  return <HomePage writing={writing} />
}
