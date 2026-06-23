import { render, screen, fireEvent, act, within } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Terminal from '@/components/terminal/Terminal'
import CommandPalette from '@/components/terminal/CommandPalette'
import { buildCommands } from '@/lib/terminal/engine'

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  })
})

const CMDS = buildCommands()

// ── Theme toggle ───────────────────────────────────────────────

describe('theme toggle', () => {
  it('renders a theme toggle button', () => {
    render(<Terminal />)
    expect(screen.getByRole('button', { name: /switch to.*theme/i })).toBeInTheDocument()
  })

  it('toggles data-theme on the root element', async () => {
    render(<Terminal />)
    const btn = screen.getByRole('button', { name: /switch to.*theme/i })
    await act(async () => { fireEvent.click(btn) })
    const container = document.querySelector('[data-theme]')
    expect(container?.getAttribute('data-theme')).toBe('light')
  })
})

// ── Command palette ────────────────────────────────────────────

describe('CommandPalette', () => {
  it('renders all commands', () => {
    const onRun = vi.fn()
    const onClose = vi.fn()
    render(<CommandPalette commands={CMDS} onRun={onRun} onClose={onClose} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    // 'help' should appear in the list
    expect(screen.getByText('help')).toBeInTheDocument()
  })

  it('filters by query', async () => {
    const onRun = vi.fn()
    const onClose = vi.fn()
    render(<CommandPalette commands={CMDS} onRun={onRun} onClose={onClose} />)
    const input = screen.getByRole('textbox')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'abo' } })
    })
    expect(screen.getByText('about')).toBeInTheDocument()
    expect(screen.queryByText('writing')).not.toBeInTheDocument()
  })

  it('calls onRun and onClose when Enter pressed on selection', async () => {
    const onRun = vi.fn()
    const onClose = vi.fn()
    render(<CommandPalette commands={CMDS} onRun={onRun} onClose={onClose} />)
    const input = screen.getByRole('textbox')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'about' } })
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    expect(onRun).toHaveBeenCalledWith('about')
    expect(onClose).toHaveBeenCalled()
  })

  it('calls onClose on Escape', async () => {
    const onRun = vi.fn()
    const onClose = vi.fn()
    render(<CommandPalette commands={CMDS} onRun={onRun} onClose={onClose} />)
    const input = screen.getByRole('textbox')
    await act(async () => {
      fireEvent.keyDown(input, { key: 'Escape' })
    })
    expect(onClose).toHaveBeenCalled()
  })

  it('opens on Ctrl+K and closes on Escape', async () => {
    render(<Terminal />)
    const input = screen.getByRole('textbox', { name: 'Command' })
    await act(async () => {
      fireEvent.keyDown(input, { key: 'k', ctrlKey: true })
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})

// ── Reverse search ────────────────────────────────────────────

describe('reverse search', () => {
  it('Ctrl+R switches to reverse-search display', async () => {
    render(<Terminal />)
    const input = screen.getByRole('textbox', { name: 'Command' })
    await act(async () => { fireEvent.keyDown(input, { key: 'r', ctrlKey: true }) })
    expect(screen.getByText(/reverse-i-search/i)).toBeInTheDocument()
  })
})
