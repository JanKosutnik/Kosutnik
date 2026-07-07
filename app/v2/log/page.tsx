import type { Metadata } from 'next'
import styles from '../v2.module.css'

export const metadata: Metadata = { title: 'Log' }

export default function V2LogPage() {
  return <main className={styles.main}><section><h1>Log</h1><p>No entries yet.</p></section></main>
}
