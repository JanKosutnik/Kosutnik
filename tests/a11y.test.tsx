import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { axe } from 'jest-axe'
import Terminal from '@/components/terminal/Terminal'
import SsrContent from '@/components/SsrContent'
import { sections, siteMeta } from '@/content/site'

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  })
})

describe('accessibility', () => {
  it('SsrContent has no axe violations', async () => {
    const { container } = render(
      <SsrContent sections={sections} meta={siteMeta} />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Terminal has no axe violations', async () => {
    const { container } = render(<Terminal />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
