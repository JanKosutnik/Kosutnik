import type { Metadata } from 'next'
import { principles } from '@/content/site'
import styles from '../v2.module.css'

export const metadata: Metadata = { title: 'Principles' }

export default function V2PrinciplesPage() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Principles</h1>
        <ul className={styles.principles}>
          {principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ul>
      </section>
    </main>
  )
}
