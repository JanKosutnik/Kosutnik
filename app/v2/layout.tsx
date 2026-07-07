import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './v2.module.css'

export const metadata: Metadata = {
  title: { default: 'Kosutnik', template: '%s · Kosutnik' },
  description: 'Notes, projects and references kept by Jan Košutnik.',
}

const navigation = [
  ['log', '/v2/log/'],
  ['notes', '/v2/notes/'],
  ['projects', '/v2/projects/'],
  ['library', '/v2/library/'],
  ['principles', '/v2/principles/'],
]

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/v2/">Kosutnik</Link>
        <nav aria-label="V2 navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
        <a href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>
        <span>© 2026 Jan Košutnik</span>
      </footer>
    </div>
  )
}
