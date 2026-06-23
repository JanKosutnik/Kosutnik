import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Terminal from '@/components/terminal/Terminal'
import TitleBar from '@/components/terminal/TitleBar'
import Sidebar from '@/components/terminal/Sidebar'
import Prompt from '@/components/terminal/Prompt'

describe('TitleBar', () => {
  it('renders the default label', () => {
    render(<TitleBar />)
    expect(screen.getByText('jan@kosutnik: ~ — zsh')).toBeInTheDocument()
  })

  it('renders a custom label', () => {
    render(<TitleBar label="custom tab" />)
    expect(screen.getByText('custom tab')).toBeInTheDocument()
  })
})

describe('Sidebar', () => {
  const secs = [
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' },
  ]

  it('renders the brand line', () => {
    render(<Sidebar sections={secs} activeSection={null} />)
    expect(screen.getByText('jan@kosutnik')).toBeInTheDocument()
    expect(screen.getByText(':~$ ls')).toBeInTheDocument()
  })

  it('renders each section as a button', () => {
    render(<Sidebar sections={secs} activeSection={null} />)
    expect(screen.getByRole('button', { name: /about/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact/ })).toBeInTheDocument()
  })

  it('marks the active section with aria-current', () => {
    render(<Sidebar sections={secs} activeSection="about" />)
    expect(screen.getByRole('button', { name: /about/ })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: /contact/ })).not.toHaveAttribute('aria-current')
  })
})

describe('Prompt', () => {
  it('renders the prompt prefix elements', () => {
    render(<Prompt value="" onChange={() => {}} onSubmit={() => {}} />)
    expect(screen.getByText('jan@kosutnik')).toBeInTheDocument()
    expect(screen.getByText('~')).toBeInTheDocument()
  })

  it('renders a labelled command input', () => {
    render(<Prompt value="" onChange={() => {}} onSubmit={() => {}} />)
    expect(screen.getByRole('textbox', { name: 'Command' })).toBeInTheDocument()
  })
})

describe('Terminal', () => {
  it('renders the title bar', () => {
    render(<Terminal />)
    expect(screen.getByText('jan@kosutnik: ~ — zsh')).toBeInTheDocument()
  })

  it('renders all section names in the sidebar', () => {
    render(<Terminal />)
    const nav = screen.getByRole('navigation', { name: 'Sections' })
    expect(nav).toBeInTheDocument()
    // spot-check a few section ids
    expect(screen.getByRole('button', { name: /about/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /writing/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact/ })).toBeInTheDocument()
  })

  it('renders the output log region', () => {
    render(<Terminal />)
    expect(screen.getByRole('log')).toBeInTheDocument()
  })

  it('renders the command input', () => {
    render(<Terminal />)
    expect(screen.getByRole('textbox', { name: 'Command' })).toBeInTheDocument()
  })
})
