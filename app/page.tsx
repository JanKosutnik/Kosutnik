import type { Metadata } from 'next'
import V2Site from './v2/V2Site'

export const metadata: Metadata = {
  title: 'Kosutnik',
  description: "Jan Košutnik's notes and principles.",
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  return <V2Site basePath="/" />
}
