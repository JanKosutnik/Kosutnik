import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeToggle from '@/components/ThemeToggle'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kosutnik.com'),
  title: 'Jan Košutnik — builds small systems that stay out of the way',
  description:
    'Jan Košutnik builds small systems that stay out of the way. Software, processes, and the occasional decision someone has been avoiding. Ljubljana.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}` }} />
      </head>
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/">Kosutnik</a>
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
