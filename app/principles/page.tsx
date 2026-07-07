import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import styles from '@/app/v1/v1.module.css'

export const metadata: Metadata = { title: 'Principles - Kosutnik' }

const principles = [
  { text: 'If you can remove it without breaking anything, remove it.', status: 'current' },
  { text: 'If you need a manual to use it, the design is making you do its job.', status: 'current' },
  { text: 'Every feature you add is a promise to keep it working - forever.', status: 'current' },
  { text: 'Count the time a tool costs you, not just the time it saves.', status: 'current' },
  { text: "Don't start from what everyone else built. Start from the problem in front of you.", status: 'current' },
  { text: "Simple isn't less. It's everything that matters and nothing that doesn't.", status: 'current' },
  { text: 'A tool should help you finish - not keep you coming back.', status: 'current' },
]

export default function PrinciplesPage() {
  return (
    <SiteFrame current="principles">
      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h1>principles</h1></header>
        <div className={styles.writingContent}>
          <p className={styles.note}>Last revised: 07/07/2026</p>
          <ol className={styles.principles}>
            {principles.map((principle, index) => (
              <li
                className={principle.status === 'retired' ? styles.retired : undefined}
                data-status={principle.status}
                key={principle.text}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteFrame>
  )
}
