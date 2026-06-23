import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Terminal from '@/components/terminal/Terminal'
import TitleBar from '@/components/terminal/TitleBar'
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

  it('renders a theme toggle button', () => {
    render(<TitleBar theme="dark" onToggleTheme={() => {}} />)
    expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument()
  })
})

const noop = () => {}
const promptProps = { value: '', onChange: noop, onSubmit: noop, onHistoryUp: noop, onHistoryDown: noop, onCtrlL: noop }

describe('Prompt', () => {
  it('renders the prompt prefix elements', () => {
    render(<Prompt {...promptProps} />)
    expect(screen.getByText('jan@kosutnik')).toBeInTheDocument()
    expect(screen.getByText('~')).toBeInTheDocument()
  })

  it('renders a labelled command input', () => {
    render(<Prompt {...promptProps} />)
    expect(screen.getByRole('textbox', { name: 'Command' })).toBeInTheDocument()
  })
})

describe('Terminal', () => {
  it('renders the title bar', () => {
    render(<Terminal />)
    expect(screen.getByText('jan@kosutnik: ~ — zsh')).toBeInTheDocument()
  })

  it('renders the output log region', () => {
    render(<Terminal />)
    expect(screen.getByRole('log')).toBeInTheDocument()
  })

  it('renders the command input', () => {
    render(<Terminal />)
    expect(screen.getByRole('textbox', { name: 'Command' })).toBeInTheDocument()
  })

  it('shows the about section on mount', () => {
    render(<Terminal />)
    expect(screen.getByText(/Designer and developer/)).toBeInTheDocument()
  })

  it('shows a navigation hint on mount', () => {
    render(<Terminal />)
    expect(screen.getByText(/Type 'help'/)).toBeInTheDocument()
  })
})
