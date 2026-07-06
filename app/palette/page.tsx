import type { CSSProperties } from 'react'
import styles from './palette.module.css'

const options = [
  { name: 'Charcoal', color: '#141414' },
  { name: 'Graphite', color: '#181A1B' },
  { name: 'Ink', color: '#11151A' },
  { name: 'Green-black', color: '#111713' },
  { name: 'Warm black', color: '#181614' },
]

export default function PalettePage() {
  return (
    <main className={styles.page}>
      {options.map(({ name, color }) => (
        <section
          className={styles.option}
          key={color}
          style={{ '--sample-background': color } as CSSProperties}
        >
          <header>
            <strong>{name}</strong>
            <span>{color}</span>
          </header>
          <div className={styles.sample}>
            <p>I am Jan, a UX and product designer based in Ljubljana.</p>
            <p>
              I have worked on software from several sides: designing how it feels, building how it works and
              testing whether it holds. That made me interested in what most software carries but does not need.
            </p>
          </div>
        </section>
      ))}
    </main>
  )
}
