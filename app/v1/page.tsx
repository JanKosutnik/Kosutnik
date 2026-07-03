import type { Metadata } from 'next'
import V1Site from './V1Site'

export const metadata: Metadata = {
  title: 'Jan Košutnik - V1',
  description: 'Designer and developer based in Ljubljana.',
  robots: { index: false, follow: false },
}

export default function V1Page() {
  return <V1Site />
}
