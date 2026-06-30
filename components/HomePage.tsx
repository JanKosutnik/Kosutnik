'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { principles, siteMeta } from '@/content/site'

type WritingPost = { slug: string; title: string; formattedDate: string }
type LineKind = 'cmd' | 'ok' | 'mut'

const BOOT: Array<{ kind: LineKind; text: string }> = [
  { kind: 'cmd', text: '$ build kosutnik.com' },
  { kind: 'ok',  text: '> resolving identity ...........' },
  { kind: 'ok',  text: '> linking principles (13) ......' },
  { kind: 'ok',  text: '> loading writing (2) ..........' },
  { kind: 'ok',  text: '> compiling services (2) .......' },
  { kind: 'ok',  text: '> stripping decoration .........' },
  { kind: 'mut', text: '> removed 6 things; nothing broke' },
  { kind: 'mut', text: '> done in 0.3s' },
]

function lineDelay(i: number): number {
  if (i === 0) return 220
  if (i >= BOOT.length - 2) return 200
  return 115
}

function BootLine({ kind, text }: { kind: LineKind; text: string }) {
  if (kind === 'cmd') return <span className="boot-cmd">{text}</span>
  if (kind === 'mut') return <span className="boot-mut">{text}</span>
  return <><span>{text} </span><span className="boot-ok">ok</span></>
}

function QA({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="qa">
      <p className="q">{q}</p>
      <p className="a">{children}</p>
    </div>
  )
}

export default function HomePage({ writing }: { writing: WritingPost[] }) {
  const [n, setN] = useState(0)
  const [booting, setBooting] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reduced = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const finish = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setN(BOOT.length)
    setBooting(false)
    setShowResult(true)
    setShowContent(true)
  }, [])

  const startBoot = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setN(0)
    setBooting(true)
    setShowResult(false)
    setShowContent(false)

    if (reduced.current) { finish(); return }

    let i = 0
    const step = () => {
      if (i < BOOT.length) {
        const idx = i++
        setN(i)
        timerRef.current = setTimeout(step, lineDelay(idx))
      } else {
        timerRef.current = setTimeout(finish, 300)
      }
    }
    timerRef.current = setTimeout(step, 0)
  }, [finish])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { startBoot(); return () => { if (timerRef.current) clearTimeout(timerRef.current) } }, [])

  useEffect(() => {
    if (!booting) return
    const onKey = (e: KeyboardEvent) => {
      if (['Enter', 'Escape', ' '].includes(e.key)) { e.preventDefault(); finish() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [booting, finish])

  const onHeroClick = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement
    if (t.tagName === 'BUTTON' || t.closest('a')) return
    if (booting) finish()
  }

  const onRecompile = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.scrollTo({ top: 0, behavior: reduced.current ? 'auto' : 'smooth' })
    startBoot()
  }

  return (
    <div className="wrap">
      <section id="hero" onClick={onHeroClick}>
        <pre className="boot" aria-label="build log">
          {BOOT.slice(0, n).map((line, i) => (
            <span key={i}>{i > 0 && '\n'}<BootLine {...line} /></span>
          ))}
        </pre>
        {booting && <p className="skiphint">(click to skip)</p>}
        <div className={`result${showResult ? ' show' : ''}`}>
          <p className="result-nav">
            {'→ '}
            <a href="#principles">principles</a>
            {' · '}
            <a href="#writing">writing</a>
            {' · '}
            <a href="#work">work</a>
            {' · '}
            <a href={`mailto:${siteMeta.email}`}>email</a>
          </p>
          <button className="recompile" onClick={onRecompile}>{'↻ recompile'}</button>
        </div>
      </section>

      <div className={`content${showContent ? ' show' : ''}`}>
        <section id="about">
          <p className="lbl">about</p>
          <p>I'm a designer and developer based in Ljubljana. Over the years I've worked on software from every angle — designing how it looks, building how it works, testing whether it holds. That taught me to spot what doesn't need to be there.</p>
          <p>I work independently now. One project at a time.</p>
        </section>

        <section id="work">
          <p className="lbl">work</p>
          <QA q="What do you do?">
            I build small systems that stay out of the way. Software, processes, the occasional decision someone has been avoiding.
          </QA>
          <QA q="What kind of clients?">
            Small teams whose stack got heavier than it should be. People who don't want a slide deck, and already half-know what to remove.
          </QA>
          <QA q="How do you work?">
            Plain English. Fixed scope. Fixed fee. Three sentences in an email is the right opening move.
          </QA>
          <QA q="What won't you do?">
            Decks. Discovery calls. Calendars. Retainers. Newsletters.
          </QA>
          <QA q="What are you available for?">
            Complexity Diagnostic (€1,200, 5 days, written) and Quiet Systems (from €6,000, ~2 weeks). One at a time.
          </QA>
          <QA q="What are you reading?">
            <a href="https://www.elonmuskbook.org/" target="_blank" rel="noopener noreferrer">The Book of Elon</a>. Mostly for the discipline.
          </QA>
          <QA q="What if I'm not ready to hire?">
            Read the <a href="#principles">principles</a>. If they land, we'll probably get on.
          </QA>
          <QA q="How do I reach you?">
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>. Also on{' '}
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a> and{' '}
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </QA>
        </section>

        <section id="principles">
          <p className="lbl">principles (13)</p>
          <ol className="pr">
            {principles.map((p, i) => (
              <li key={i}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="writing" className="write">
          <p className="lbl">writing ({writing.length})</p>
          {writing.map((post) => (
            <div key={post.slug} className="row">
              <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
              <span className="d">{post.formattedDate}</span>
            </div>
          ))}
          <p className="foot">A garden, not a blog — these grow slowly.</p>
        </section>

        <footer className="colophon">
          <span>© 2026 Jan Košutnik · Ljubljana</span>
          <span>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            {' · '}
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>
            {' · '}
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </footer>
      </div>
    </div>
  )
}
