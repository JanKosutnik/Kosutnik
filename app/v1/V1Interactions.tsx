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

    const setActive = (id: string) => {
      links.forEach((link, section) => {
        const active = section === id
        link.dataset.active = String(active)
        if (active) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    }

    let frame = 0
    const updateHeader = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (header) header.dataset.scrolled = String(window.scrollY > 12)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65%' },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', updateHeader)
    }
  }, [])

  return null
}
