import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import styles from '@/app/v1/v1.module.css'

export const metadata: Metadata = { title: 'Log - Kosutnik' }

export default function LogPage() {
  return (
    <SiteFrame current="log">
      <section className={styles.grid}>
        <header className={styles.sectionTitle}><h1>log</h1></header>
        <div className={styles.writingContent}>
          <article>
            <p className={styles.note}><time dateTime="2026-07-07">07/07/2026</time></p>
            <div className={styles.prose}>
              <p>
                Restructured this site. Killed the one-page scroll, the numbered sections, and the lines where the
                site explained its own philosophy. A site that narrates its vibe is performing for visitors; the
                point is utility for me. What&apos;s left: notes, principles, and this log. The homepage is now a
                paragraph of current state and the latest notes. Projects will show up here as entries when they
                exist, not as empty pages promising them.
              </p>
            </div>
          </article>
        </div>
      </section>
    </SiteFrame>
  )
}
