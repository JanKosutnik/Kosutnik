import { render, screen, within, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Terminal from '@/components/terminal/Terminal'

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  })
  window.history.pushState(null, '', '/')
})

afterEach(() => {
  window.history.pushState(null, '', '/')
})

// ── Deep links ─────────────────────────────────────────────────

describe('deep links', () => {
  it('opens the hashed section on load', async () => {
    window.history.pushState(null, '', '#writing')
    render(<Terminal />)
    await act(async () => {})
    expect(screen.getByText('Writing')).toBeInTheDocument()
    expect(screen.getByText('On removing things')).toBeInTheDocument()
  })

  it('updates the hash when a section command is run', async () => {
    render(<Terminal />)
    const input = screen.getByRole('textbox', { name: 'Command' })
    await act(async () => {
      fireEvent.change(input, { target: { value: 'contact' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    expect(window.location.hash).toBe('#contact')
  })

  it('responds to popstate and opens the new section', async () => {
    render(<Terminal />)
    await act(async () => {
      window.history.pushState(null, '', '#principles')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
    expect(screen.getByText('Principles')).toBeInTheDocument()
  })
})

// ── History recall ─────────────────────────────────────────────

describe('history recall', () => {
  it('clicking a history entry re-runs the command', async () => {
    render(<Terminal />)
    const input = screen.getByRole('textbox', { name: 'Command' })

    await act(async () => {
      fireEvent.change(input, { target: { value: 'writing' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    await act(async () => {
      fireEvent.change(input, { target: { value: 'history' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })

    const log = screen.getByRole('log')
    expect(within(log).getAllByText('writing').length).toBeGreaterThan(0)

    const historyEntry = within(log).getByRole('button', { name: 'writing' })
    await act(async () => {
      fireEvent.click(historyEntry)
    })

    expect(screen.getAllByText('Writing').length).toBeGreaterThan(0)
  })
})
