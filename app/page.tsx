import type { Metadata } from 'next'
import V1Site from './v1/V1Site'

export const metadata: Metadata = {
  title: 'Kosutnik',
  description: "Jan Košutnik's notes, ideas, and principles.",
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  return <V1Site homeHref="/" color />
}
