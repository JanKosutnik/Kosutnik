import { render, screen, within, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Terminal from '@/components/terminal/Terminal'

// localStorage mock
beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  })
})

function getInput() {
  return screen.getByRole('textbox', { name: 'Command' })
}

describe('Terminal — wired engine', () => {
  it('pre-populates with the about section on mount', async () => {
    render(<Terminal />)
    // about.render() returns blocks including the statement
    expect(
      screen.getByText(/Designer and developer interested in user experience/),
    ).toBeInTheDocument()
  })

  it('typing `about` + Enter renders about section output', async () => {
    render(<Terminal />)
    const input = getInput()
    await act(async () => {
      fireEvent.change(input, { target: { value: 'about' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    // statement should appear at least once (pre-populated + new render)
    const matches = screen.getAllByText(/Designer and developer interested in user experience/)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('unknown command shows did-you-mean', async () => {
    render(<Terminal />)
    const input = getInput()
    await act(async () => {
      fireEvent.change(input, { target: { value: 'abuot' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    expect(screen.getByText(/command not found/i)).toBeInTheDocument()
    // dym renders in the log as "Did you mean: [button]?"
    const log = screen.getByRole('log')
    expect(within(log).getByText(/did you mean/i)).toBeInTheDocument()
  })

  it('clicking a sidebar section clears log and renders that section', async () => {
    render(<Terminal />)
    const writingBtn = screen.getByRole('button', { name: /writing/ })
    await act(async () => {
      fireEvent.click(writingBtn)
    })
    expect(screen.getByText('Writing')).toBeInTheDocument()
    expect(screen.getByText('On removing things')).toBeInTheDocument()
    // about statement should NOT be in the log (it was cleared)
    expect(
      screen.queryByText(/Designer and developer interested in user experience/),
    ).not.toBeInTheDocument()
  })
})
