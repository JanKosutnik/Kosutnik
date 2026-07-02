'use client'

import { useEffect } from 'react'

export default function BandClient() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cmdEl = document.getElementById('band-cmd') as HTMLElement | null
    const doneEl = document.getElementById('band-done') as HTMLElement | null
    const caretEl = document.getElementById('band-caret') as HTMLElement | null
    const clockEl = document.getElementById('band-clock') as HTMLElement | null

    // ── 1. Compile animation (once per session) ───────────────────
    let stopped = false
    let animTimer: ReturnType<typeof setTimeout> | null = null

    const booted = sessionStorage.getItem('kosutnik_booted')

    if (!reduced && !booted && cmdEl && doneEl && caretEl) {
      const target = 'build kosutnik.com'
      cmdEl.textContent = ''
      doneEl.style.display = 'none'
      caretEl.style.display = 'inline-block'

      let i = 0
      const type = () => {
        if (stopped) return
        cmdEl.textContent = target.slice(0, i++)
        if (i <= target.length) {
          animTimer = setTimeout(type, 55)
        } else {
          animTimer = setTimeout(() => {
            if (stopped) return
            caretEl.style.display = 'none'
            doneEl.style.display = ''
            sessionStorage.setItem('kosutnik_booted', '1')
          }, 250)
        }
      }
      animTimer = setTimeout(type, 400)
    } else {
      if (caretEl) caretEl.style.display = 'none'
      if (!booted) sessionStorage.setItem('kosutnik_booted', '1')
    }

    // ── 2. Live Ljubljana clock ────────────────────────────────────
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Ljubljana',
    })
    const tick = () => {
      if (clockEl) clockEl.textContent = fmt.format(new Date())
    }
    tick()
    const interval = setInterval(tick, 15_000)

    // ── 3. Scrollspy ──────────────────────────────────────────────
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('#band-nav a[href^="#"]')
    const sections = ['work', 'principles', 'writing'] as const
    const activeSet = new Set<string>()

    const setActive = (id: string | null) => {
      navLinks.forEach(a => {
        a.classList.toggle('on', id !== null && a.getAttribute('href') === `#${id}`)
      })
    }

    const observers: IntersectionObserver[] = []

    if ('IntersectionObserver' in window) {
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              activeSet.add(id)
              setActive(id)
            } else {
              activeSet.delete(id)
              if (activeSet.size === 0) setActive(null)
            }
          },
          { rootMargin: '-30% 0px -60% 0px' },
        )
        obs.observe(el)
        observers.push(obs)
      })
    }

    const onScroll = () => {
      if (observers.length > 0) return
      const threshold = window.scrollY + window.innerHeight * 0.35
      let active: string | null = null
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top + window.scrollY <= threshold) active = id
      })
      setActive(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── 4. Deep links ──────────────────────────────────────────────
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        setTimeout(
          () => target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }),
          100,
        )
      }
    }

    return () => {
      stopped = true
      if (animTimer !== null) clearTimeout(animTimer)
      clearInterval(interval)
      observers.forEach(obs => obs.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
