import type { Metadata } from 'next'
import styles from '../v2.module.css'

export const metadata: Metadata = { title: 'Projects' }

export default function V2ProjectsPage() {
  return <main className={styles.main}><section><h1>Projects</h1><p>No active projects listed.</p></section></main>
}
