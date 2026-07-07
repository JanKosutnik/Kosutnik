import type { Metadata } from 'next'
import styles from '../v2.module.css'

export const metadata: Metadata = { title: 'Library' }

export default function V2LibraryPage() {
  return <main className={styles.main}><section><h1>Library</h1><p>No books added.</p></section></main>
}
