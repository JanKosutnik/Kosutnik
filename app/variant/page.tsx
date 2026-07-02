import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './variant.module.css'

export const metadata: Metadata = {
  title: 'Jan Košutnik - garden',
  description:
    'This is a garden, not a blog. Things here grow at different speeds - some are seedlings, a few have weathered into evergreen.',
  alternates: { canonical: 'https://kosutnik.com/variant/' },
}

const seedlings = [
  'How do you count the time a tool costs you - not just the time it saves?',
  'When does removing a feature improve a product more than adding one?',
  "What's the difference between simple and merely less?",
  'How much of "must-have" is just a habit no one questioned?',
]

const principles = [
  'Before you build something, ask if it needs to exist at all.',
  'If you can remove it and nothing breaks, remove it.',
  "A good tool stays out of your way. The best one, you forget you're using.",
  'Every feature you add is a promise to keep it working - forever.',
  'Most "must-have" features are just habits no one ever questioned.',
  "When something feels confusing, it's not you. It's the design.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
]

const books = [
  { title: 'The Book of Elon', author: 'Eric Jorgenson', href: 'https://www.elonmuskbook.org/' },
  { title: 'Rework', author: 'Jason Fried & DHH', href: 'https://37signals.com/rework/' },
  { title: 'Getting Real', author: '37signals', href: 'https://basecamp.com/gettingreal' },
  { title: 'Hatching Twitter', author: 'Nick Bilton', href: 'https://www.nickbilton.com/' },
  { title: 'Bad Blood', author: 'John Carreyrou', href: 'https://www.penguinrandomhouse.com/' },
]

const listening = [
  { title: 'Founders', author: 'David Senra', href: 'https://www.founderspodcast.com/' },
  { title: 'My First Million', author: 'Sam Parr & Shaan Puri', href: 'https://www.mfmpod.com/' },
  { title: 'How I Built This', author: 'Guy Raz', href: 'https://www.npr.org/series/490248027/how-i-built-this' },
  { title: 'AI & I', author: 'Dan Shipper', href: 'https://every.to/podcast' },
  { title: "Lenny's Podcast", author: 'Lenny Rachitsky', href: 'https://www.lennysnewsletter.com/podcast' },
  { title: 'Dwarkesh Podcast', author: 'Dwarkesh Patel', href: 'https://www.dwarkesh.com/podcast' },
]

export default function VariantPage() {
  return (
    <>
      <a className={styles.skipLink} href="#garden">Skip to content</a>

      <main className={`variant-page ${styles.page}`} id="garden">
        <header className={styles.masthead}>
          <a className={styles.brand} href="/variant/">Jan Košutnik</a>

          <details className={styles.menu}>
            <summary>Menu</summary>
            <nav aria-label="Garden navigation">
              <a href="#tending">Tending now</a>
              <a href="#seedlings">Seedlings</a>
              <a href="#growing">Growing</a>
              <a href="#evergreen">Evergreen</a>
              <a href="#feeding">Feeding the garden</a>
            </nav>
          </details>
        </header>

        <section className={styles.intro} aria-labelledby="garden-intro">
          <h1 id="garden-intro">Jan Košutnik</h1>
          <p>
            This is a garden, not a blog. Things here grow at different speeds — some are seedlings I&apos;m still
            unsure about, a few have weathered into evergreen.
          </p>
        </section>

        <div className={styles.sections}>
          <section className={styles.section} id="tending">
            <header className={styles.sectionHeader}>
              <h2>Tending now</h2>
              <p>early summer</p>
            </header>
            <p className={styles.measure}>
              Between things - working out what to build next, and building small things with AI to find out.
              Rebuilding this site into something I actually use.
            </p>
          </section>

          <section className={styles.section} id="seedlings">
            <header className={styles.sectionHeader}>
              <h2>Seedlings</h2>
              <p>questions I&apos;m holding</p>
            </header>
            <ul className={styles.list}>
              {seedlings.map((question) => <li key={question}>{question}</li>)}
            </ul>
          </section>

          <section className={styles.section} id="growing">
            <header className={styles.sectionHeader}>
              <h2>Growing</h2>
              <p>notes, still moving</p>
            </header>
            <div className={styles.rows}>
              <Link href="/writing/on-removing-things/">
                <span>On removing things</span>
                <time dateTime="2026-05-18">18/05/2026</time>
              </Link>
              <Link href="/writing/notes-toward-a-calmer-interface/">
                <span>Notes toward a calmer interface</span>
                <time dateTime="2026-04-02">02/04/2026</time>
              </Link>
            </div>
          </section>

          <section className={styles.section} id="evergreen">
            <header className={styles.sectionHeader}>
              <h2>Evergreen</h2>
              <p>principles I keep returning to</p>
            </header>
            <ol className={styles.principles}>
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{principle}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.section} id="feeding">
            <header className={styles.sectionHeader}>
              <h2>Feeding the garden</h2>
              <p>books, tools & voices</p>
            </header>

            <div className={styles.feeding}>
              <div>
                <h3>Books</h3>
                <div className={styles.rows}>
                  {books.map((book) => (
                    <a href={book.href} key={book.title} target="_blank" rel="noopener noreferrer">
                      <span>{book.title}</span>
                      <span>{book.author}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3>Tools</h3>
                <p className={styles.tools}>
                  <a href="https://mymind.com/" target="_blank" rel="noopener noreferrer">mymind</a> ·{' '}
                  <a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer">Things</a> ·{' '}
                  Apple Notes ·{' '}
                  <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a>
                </p>
              </div>

              <div>
                <h3>Listening</h3>
                <div className={styles.rows}>
                  {listening.map((item) => (
                    <a href={item.href} key={item.title} target="_blank" rel="noopener noreferrer">
                      <span>{item.title}</span>
                      <span>{item.author}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <span>© 2026 Jan Košutnik</span>
          <span>Made with care in Ljubljana, Slovenia.</span>
          <a href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>
          <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>Ljubljana --:--</span>
        </footer>
      </main>
    </>
  )
}
