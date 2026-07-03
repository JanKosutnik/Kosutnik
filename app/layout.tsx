import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { siteMeta } from '@/content/site'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/Inter-subset.woff2',
  weight: '100 900',
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
        <meta name="color-scheme" content="dark light" />
      </head>
      <body>{children}</body>
    </html>
  )
}
