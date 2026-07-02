import type { Metadata } from 'next'
import Image from 'next/image'
import { getWriting } from '@/lib/writing'
import styles from './variant.module.css'

export const metadata: Metadata = {
  title: 'Jan Košutnik - editorial variant',
  description: 'Software that gets out of the way. An alternate Kosutnik site direction.',
  alternates: { canonical: 'https://kosutnik.com/variant/' },
}

const notes = [
  "Most software isn't built for you. It's built to keep you inside it.",
  'Everyone calls it a productivity tool. Nobody counts the hours it costs to run the thing.',
  'At some point you stopped being the user. Now you are the number that keeps the roadmap alive.',
  'Nobody planned it this way. But here we are - that is what happens when the goal is retention, not results.',
  'Removing a feature takes conviction, a meeting, and someone willing to look boring. Most teams never find that person.',
  'Every feature is a debt. The launch is just when you sign the papers.',
  'The best tool is the one you stop thinking about.',
  'Before you automate anything, ask if it should exist at all.',
  "AI doesn't fix a broken process. It makes the broken parts happen faster.",
  'Five tools, good intentions, workflows filling the gaps between them. Someone calls it a system. It is not.',
  'Every product worth respecting was defined by what it refused to become.',
  'What actually changed for you? That is the only question that matters.',
  'This will change. That is fine - it means it is still honest.',
]

type WritingPost = {
  slug: string
  title: string
  formattedDate: string
}

export default function VariantPage() {
  const writing = getWriting() as WritingPost[]

  return (
    <>
      <a className={styles.skipLink} href="#variant-content">Skip to content</a>
      <main className={`variant-page ${styles.page}`} id="variant-content">
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Variant navigation">
          <a className={styles.wordmark} href="/variant/">Jan Košutnik</a>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#notes">Notes</a>
            <a href="#work">Work</a>
            <a href="#writing">Writing</a>
          </div>
        </nav>

        <div className={styles.heroInner}>
          <p className={styles.kicker}>Independent designer and developer · Ljubljana</p>
          <h1>Jan Košutnik</h1>
          <p className={styles.statement}>Software that gets out of the way.</p>
          <Image
            className={styles.heroMark}
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            width={480}
            height={480}
            priority
          />
        </div>

        <div className={styles.heroFoot}>
          <span>One project at a time.</span>
          <a href="#about">Read on ↓</a>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.editorial} id="about">
          <div className={styles.sectionMeta}>
            <span>About</span>
            <span>Updated 20 Apr 2026</span>
          </div>
          <div className={styles.prose}>
            <p>Hi, I&apos;m Jan (pronounced like &quot;yawn&quot;, without the w).</p>
            <p>
              I&apos;ve spent most of my career helping people figure out what to build - and more often, what not to
              build. UX strategy, frontend work, QA. Not because I couldn&apos;t choose, but because I wanted to understand
              where things actually break. It&apos;s almost always before the first line of code gets written.
            </p>
            <p>
              Lately I&apos;ve been building small things with AI. Micro apps that save me an hour here, thirty minutes
              there. Nothing impressive to look at. That&apos;s the point.
            </p>
            <p>
              I live in Ljubljana. I work with people everywhere. If you&apos;re drowning in tools that were supposed to
              help, you&apos;re probably who I built this for.
            </p>
          </div>
        </section>

        <section className={styles.notes} id="notes">
          <div className={styles.sectionHead}>
            <h2>Notes</h2>
            <p>Things I keep returning to.</p>
          </div>
          <ol className={styles.noteList}>
            {notes.map((note, index) => (
              <li key={note}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.work} id="work">
          <div className={styles.sectionHead}>
            <h2>Work</h2>
            <p>Two things I do, when the problem is right.</p>
          </div>

          <div className={styles.offers}>
            <article className={styles.offer}>
              <div className={styles.offerMeta}>
                <span>01</span>
                <span>Fixed fee · €450</span>
              </div>
              <h3>Complexity Diagnostic</h3>
              <p>
                I go through everything you&apos;re running - tools, subscriptions, workflows - and tell you exactly what&apos;s
                costing you. Five working days. A short written audit with a clear list of what to cut and one thing
                worth building.
              </p>
            </article>

            <article className={styles.offer}>
              <div className={styles.offerMeta}>
                <span>02</span>
                <span>From €1,200</span>
              </div>
              <h3>Quiet systems</h3>
              <p>
                Tell me about the workflow eating your week. I&apos;ll build something that handles it - one job, nothing
                extra, live in your business in under two weeks. Scoped and fixed upfront. No surprises.
              </p>
            </article>
          </div>

          <div className={styles.fit}>
            <h3>This isn&apos;t for you if:</h3>
            <ul>
              <li>You want a chatbot because your competitor has one.</li>
              <li>You want to implement AI without naming something that is actually broken.</li>
              <li>You want something to demo rather than something that saves two hours on a Tuesday.</li>
              <li>You need a vendor to manage.</li>
            </ul>
            <p>
              I work best when you have a specific problem and want it gone - not project-managed, not workshopped.
              Gone.
            </p>
          </div>
        </section>

        <section className={styles.writing} id="writing">
          <div className={styles.sectionHead}>
            <h2>Writing</h2>
            <p>A garden, not a blog.</p>
          </div>
          <div className={styles.writingList}>
            {writing.map((post) => (
              <a href={`/writing/${post.slug}/`} key={post.slug}>
                <span>{post.title}</span>
                <time>{post.formattedDate}</time>
              </a>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div>
            <p>Email me three sentences about the problem.</p>
            <a className={styles.email} href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className={styles.colophon}>© 2026 Jan Košutnik · No tracking. No cookies.</p>
        </footer>
      </div>
      </main>
    </>
  )
}
