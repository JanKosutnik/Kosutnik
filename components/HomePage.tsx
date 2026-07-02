import Link from 'next/link'
import { principles, siteMeta } from '@/content/site'

type WritingPost = { slug: string; title: string; formattedDate: string }

function QA({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="qa">
      <p className="q">{q}</p>
      <div className="a">{children}</div>
    </div>
  )
}

export default function HomePage({ writing }: { writing: WritingPost[] }) {
  return (
    <>
      <section className="section" id="about" aria-label="About Jan">
        <div className="rail" aria-hidden="true"></div>
        <div className="section-content">
          <p>
            I'm Jan, a designer and developer based in Ljubljana. Over the years I've
            worked on software from every angle - designing how it looks, building how it
            works, testing whether it holds. That taught me to spot what doesn't need to
            be there.
          </p>
          <p>I work independently now. One project at a time.</p>
        </div>
      </section>

      <section className="section" id="work" aria-label="Work">
        <div className="rail">
          <span className="rail-idx">01</span>
          <span className="rail-label">work</span>
        </div>
        <div className="section-content">
          <QA q="What do you do?">
            I build small systems that stay out of the way. Software, processes, the
            occasional decision someone has been avoiding.
          </QA>
          <QA q="What kind of clients?">
            Small teams whose stack got heavier than it should be. People who don't want a
            slide deck, and already half-know what to remove.
          </QA>
          <QA q="How do you work?">
            Plain English. Fixed scope. Fixed fee. Three sentences in an email is the
            right opening move.
          </QA>
          <QA q="What won't you do?">
            Decks. Discovery calls. Calendars. Retainers. Newsletters.
          </QA>
          <QA q="What are you available for?">
            Complexity Diagnostic (€1,200, written) and Quiet Systems (from €6,000). One
            at a time.
          </QA>
          <QA q="What if I'm not ready to hire?">
            Read the <a href="#principles">principles</a>. If they land, we'll probably
            get on.
          </QA>
          <QA q="How do I reach you?">
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>. Also on{' '}
            <a
              href="https://x.com/JanKosutnik"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/jankosutnik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </QA>
        </div>
      </section>

      <section className="section" id="principles" aria-label="Principles">
        <div className="rail">
          <span className="rail-idx">02</span>
          <span className="rail-label">principles</span>
        </div>
        <div className="section-content">
          <ol className="prlist">
            {principles.map((p, i) => (
              <li key={i}>
                <span className="pr-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="writing" aria-label="Writing">
        <div className="rail">
          <span className="rail-idx">03</span>
          <span className="rail-label">writing</span>
        </div>
        <div className="section-content">
          <div>
            {writing.map(post => (
              <div key={post.slug} className="write-row">
                <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
                <span className="write-date">{post.formattedDate}</span>
              </div>
            ))}
          </div>
          <p className="write-foot">A garden, not a blog - these grow slowly.</p>
        </div>
      </section>

      <footer className="colophon">
        <span>© 2026 Jan Košutnik · Ljubljana</span>
      </footer>
    </>
  )
}
