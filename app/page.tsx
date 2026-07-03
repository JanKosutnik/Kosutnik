import type { Metadata } from 'next'
import V1Site from './v1/V1Site'

export const metadata: Metadata = {
  title: 'Jan Košutnik',
  description: 'Designer and developer based in Ljubljana.',
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  return <V1Site homeHref="/" />
}
