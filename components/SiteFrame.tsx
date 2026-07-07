import Link from 'next/link'
import V1Interactions from '@/app/v1/V1Interactions'
import styles from '@/app/v1/v1.module.css'

const navigation = [
  ['notes', '/notes/'],
  ['principles', '/principles/'],
  ['log', '/log/'],
]

export default function SiteFrame({
  children,
  current,
}: {
  children: React.ReactNode
  current?: string
}) {
  return (
    <main className={`${styles.page} ${styles.color}`} id="content">
      <V1Interactions />
      <header className={styles.header} data-v1-header>
        <Link className={styles.brand} href="/">Kosutnik</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href} aria-current={current === label ? 'page' : undefined}>{label}</Link>
          ))}
        </nav>
      </header>
      {children}
      <footer className={`${styles.footer} ${styles.links}`}>
        <a href="mailto:jan@kosutnik.com">Email</a>
        <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  )
}
