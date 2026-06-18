import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Jan Košutnik - garden',
  description: 'Jan Košutnik - Ljubljana. A garden, not a blog.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body>{children}</body>
    </html>
  )
}
