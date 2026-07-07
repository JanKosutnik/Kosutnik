import type { Metadata } from 'next'
import V2Page from './v2/page'

export const metadata: Metadata = {
  title: 'Kosutnik',
  description: "Jan Košutnik's notes and principles.",
  alternates: { canonical: 'https://kosutnik.com/' },
}

export default function HomePage() {
  return <V2Page />
}
