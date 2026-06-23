import type { Metadata } from 'next'
import { sections, siteMeta } from '@/content/site'
import SsrContent from '@/components/SsrContent'
import Terminal from '@/components/terminal/Terminal'

const BASE_URL = 'https://kosutnik.com'

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: siteMeta.name,
  },
  twitter: {
    card: 'summary',
    title: siteMeta.title,
    description: siteMeta.description,
  },
}

export default function Home() {
  return (
    <>
      {/*
        SSR content: always in the DOM for no-JS users and crawlers.
        Terminal mounts and applies aria-hidden to this div once JS runs.
      */}
      <div id="ssr-fallback">
        <SsrContent sections={sections} meta={siteMeta} />
      </div>

      <Terminal />
    </>
  )
}
