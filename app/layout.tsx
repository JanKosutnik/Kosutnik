import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
        <meta name="color-scheme" content="dark light" />
      </head>
      <body>{children}</body>
    </html>
  )
}
