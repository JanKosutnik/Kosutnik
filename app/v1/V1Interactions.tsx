'use client'

import { useEffect } from 'react'

const sectionIds = ['hello', 'now', 'notes', 'principles', 'elsewhere']

export default function V1Interactions() {
  useEffect(() => {
    const page = document.getElementById('content')
    const header = document.querySelector<HTMLElement>('[data-v1-header]')
    const links = new Map(
      Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-section]')).map((link) => [
        link.dataset.section,
        link,
      ]),
    )
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const sectionPanels = Array.from(document.querySelectorAll<HTMLElement>('[data-section-panel]'))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting)
        })
      },
      { rootMargin: '-15% 0px -55% 0px' },
    )

    sectionPanels.forEach((section) => sectionObserver.observe(section))
    if (page) page.dataset.sectionMotion = 'true'

    const setActive = (id: string) => {
      links.forEach((link, section) => {
        const active = section === id
        link.dataset.active = String(active)
        if (active) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    }

    let frame = 0
    const updateInteractions = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (header) header.dataset.scrolled = String(window.scrollY > 12)

        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
        const activationLine = (header?.offsetHeight ?? 0) + window.innerHeight * 0.25
        const activeSection = atBottom
          ? sections.at(-1)
          : sections.findLast((section) => section.getBoundingClientRect().top <= activationLine)

        setActive(activeSection?.id ?? '')
      })
    }

    updateInteractions()
    window.addEventListener('scroll', updateInteractions, { passive: true })
    window.addEventListener('resize', updateInteractions)

    return () => {
      cancelAnimationFrame(frame)
      sectionObserver.disconnect()
      if (page) delete page.dataset.sectionMotion
      window.removeEventListener('scroll', updateInteractions)
      window.removeEventListener('resize', updateInteractions)
    }
  }, [])

  return null
}
