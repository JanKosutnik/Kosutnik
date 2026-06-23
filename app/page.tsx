import type { Metadata } from 'next'
import { sections, siteMeta } from '@/content/site'
import SsrContent from '@/components/SsrContent'
import Terminal from '@/components/terminal/Terminal'

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: 'website',
    locale: 'en_US',
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
        SSR content: always in the DOM.
        - No JS: visible and fully readable.
        - With JS: Terminal mounts and overlays; this div gets aria-hidden
          via the Terminal component's useEffect so crawlers still see it.
      */}
      <div id="ssr-fallback">
        <SsrContent sections={sections} meta={siteMeta} />
      </div>

      {/* Client island — returns null until Prompt 3 when the shell is built */}
      <Terminal />
    </>
  )
}
