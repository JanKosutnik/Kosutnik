import { describe, it, expect } from 'vitest'
import { getCompletions, applyCompletion } from '@/lib/terminal/completion'
import { buildCommands } from '@/lib/terminal/engine'

const cmds = buildCommands()

describe('getCompletions', () => {
  it('returns commands starting with prefix', () => {
    const results = getCompletions('ab', cmds)
    expect(results).toContain('about')
  })

  it('excludes exact matches', () => {
    const results = getCompletions('about', cmds)
    expect(results).not.toContain('about')
  })

  it('returns empty for empty input', () => {
    expect(getCompletions('', cmds)).toHaveLength(0)
  })

  it('returns at most 8 results', () => {
    expect(getCompletions('a', cmds).length).toBeLessThanOrEqual(8)
  })

  it('includes aliases', () => {
    // 'h' should match 'help' and 'history'
    const results = getCompletions('h', cmds)
    expect(results.length).toBeGreaterThan(0)
  })

  it('returns sorted results', () => {
    const results = getCompletions('c', cmds)
    expect(results).toEqual([...results].sort())
  })
})

describe('applyCompletion', () => {
  it('appends the suffix of the completion to the input', () => {
    expect(applyCompletion('ab', 'about')).toBe('about')
  })

  it('is case-preserving on the prefix', () => {
    expect(applyCompletion('Ab', 'about')).toBe('About')
  })

  it('handles full match (no suffix to add)', () => {
    expect(applyCompletion('about', 'about')).toBe('about')
  })
})
