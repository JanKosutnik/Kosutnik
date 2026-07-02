import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BandClient from '@/components/BandClient'
import { siteMeta } from '@/content/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kosutnik.com'),
  title: siteMeta.title,
  description: siteMeta.description,
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>

        <header className="band">
          <div className="band-inner">
            <span className="compile-line" aria-live="polite" aria-atomic="true">
              <span className="band-prompt" aria-hidden="true">$ </span>
              <span id="band-cmd">build kosutnik.com</span>
              <span id="band-caret" className="band-caret" aria-hidden="true"></span>
              <span id="band-done"> - done in 0.3s ✓</span>
            </span>

            <nav className="band-nav" id="band-nav" aria-label="Site navigation">
              <a href="#work">work</a>
              <a href="#principles">principles</a>
              <a href="#writing">writing</a>
              <a href={`mailto:${siteMeta.email}`}>email</a>
            </nav>

            <span className="band-meta" aria-label="Location and time">
              Ljubljana · <time id="band-clock" dateTime=""></time>
            </span>
          </div>
        </header>

        <main id="main-content">
          {children}
        </main>

        <BandClient />
      </body>
    </html>
  )
}
