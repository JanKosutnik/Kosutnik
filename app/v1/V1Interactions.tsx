'use client'

import { useEffect } from 'react'

const sectionIds = ['work', 'principles', 'writing']

export default function V1Interactions() {
  useEffect(() => {
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
      window.removeEventListener('scroll', updateInteractions)
      window.removeEventListener('resize', updateInteractions)
    }
  }, [])

  return null
}
