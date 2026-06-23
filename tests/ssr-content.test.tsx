import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SsrContent from '@/components/SsrContent'
import { sections, siteMeta } from '@/content/site'

describe('SsrContent', () => {
  it('renders all section titles', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Now')).toBeInTheDocument()
    expect(screen.getByText('Principles')).toBeInTheDocument()
    expect(screen.getByText('Open questions')).toBeInTheDocument()
    expect(screen.getByText('Writing')).toBeInTheDocument()
    expect(screen.getByText('Reading')).toBeInTheDocument()
    expect(screen.getByText('Uses')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the about statement', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    expect(
      screen.getByText(/Designer and developer interested in user experience/),
    ).toBeInTheDocument()
  })

  it('renders principles', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    expect(screen.getByText(/Before you build something/)).toBeInTheDocument()
    expect(screen.getByText(/Every feature you add/)).toBeInTheDocument()
  })

  it('renders open questions', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    expect(screen.getByText(/How do you count the time/)).toBeInTheDocument()
    expect(screen.getByText(/When does removing something/)).toBeInTheDocument()
  })

  it('renders writing entries as links', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    const link = screen.getByRole('link', { name: 'On removing things' })
    expect(link).toHaveAttribute('href', '/writing/on-removing-things/')
    expect(screen.getByRole('link', { name: 'Notes toward a calmer interface' })).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    // scope to the contact section to avoid matching the email in work + footer
    const contactSection = document.getElementById('contact')!
    expect(within(contactSection).getByRole('link', { name: 'jan@kosutnik.com' })).toBeInTheDocument()
    expect(within(contactSection).getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com/JanKosutnik')
    expect(within(contactSection).getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders the name and location in the header', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    expect(screen.getByRole('heading', { level: 1, name: siteMeta.name })).toBeInTheDocument()
    expect(screen.getByText(siteMeta.location)).toBeInTheDocument()
  })

  it('each section has an accessible heading', () => {
    render(<SsrContent sections={sections} meta={siteMeta} />)
    sections.forEach((section) => {
      expect(screen.getByRole('heading', { name: section.title })).toBeInTheDocument()
    })
  })
})
