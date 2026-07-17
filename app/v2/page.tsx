import type { Metadata } from 'next'
import V2FamilySite from './V2FamilySite'

export const metadata: Metadata = {
  title: 'Kosutnik - V2',
  description: "A warm editorial version of Jan Košutnik's personal website.",
  robots: { index: false, follow: false },
}

export default function V2Page() {
  return <V2FamilySite />
}
