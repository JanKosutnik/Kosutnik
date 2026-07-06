import type { CSSProperties } from 'react'
import styles from './palette.module.css'

const options = [
  { name: 'Charcoal', color: '#141414', text: '#ECEBE7', muted: '#92918D' },
  { name: 'Graphite', color: '#181A1B', text: '#ECEBE7', muted: '#92918D' },
  { name: 'Ink', color: '#11151A', text: '#ECEBE7', muted: '#92918D' },
  { name: 'Green-black', color: '#111713', text: '#ECEBE7', muted: '#92918D' },
  { name: 'Warm black', color: '#181614', text: '#ECEBE7', muted: '#92918D' },
  { name: 'Deep teal', color: '#123437', text: '#EDF3EE', muted: '#A6BCB8' },
  { name: 'Forest', color: '#193126', text: '#F2EBDD', muted: '#A8B5A8' },
  { name: 'Aubergine', color: '#2B1B2D', text: '#F5EAF2', muted: '#BCA9B9' },
  { name: 'Oxblood', color: '#3A171C', text: '#F7ECE8', muted: '#C9A4A2' },
  { name: 'Soft sage', color: '#D9E2D0', text: '#172018', muted: '#5F6D61' },
]

export default function PalettePage() {
  return (
    <main className={styles.page}>
      {options.map(({ name, color, text, muted }) => (
        <section
          className={styles.option}
          key={color}
          style={{
            '--sample-background': color,
            '--sample-text': text,
            '--sample-muted': muted,
          } as CSSProperties}
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
