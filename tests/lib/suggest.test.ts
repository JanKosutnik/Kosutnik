import { describe, it, expect } from 'vitest'
import { levenshtein, getSuggestions, didYouMean } from '@/lib/terminal/suggest'

// ── levenshtein ────────────────────────────────────────────────

describe('levenshtein', () => {
  it('returns 0 for identical strings', () => {
    expect(levenshtein('hello', 'hello')).toBe(0)
    expect(levenshtein('', '')).toBe(0)
  })

  it('returns length of non-empty string against empty string', () => {
    expect(levenshtein('abc', '')).toBe(3)
    expect(levenshtein('', 'abc')).toBe(3)
  })

  it('returns 1 for single substitution', () => {
    expect(levenshtein('cat', 'bat')).toBe(1)
  })

  it('returns 1 for single insertion', () => {
    expect(levenshtein('cat', 'cart')).toBe(1)
  })

  it('returns 1 for single deletion', () => {
    expect(levenshtein('cats', 'cat')).toBe(1)
  })

  it('handles common terminal typos', () => {
    expect(levenshtein('abuot', 'about')).toBe(2)
    expect(levenshtein('hlep', 'help')).toBe(2)
    expect(levenshtein('wriitng', 'writing')).toBe(2)
  })
})

// ── getSuggestions ─────────────────────────────────────────────

describe('getSuggestions', () => {
  const cmds = ['about', 'cat', 'clear', 'echo', 'help', 'ls', 'writing']

  it('returns prefix matches with score 0', () => {
    const results = getSuggestions('ab', cmds)
    expect(results[0].value).toBe('about')
    expect(results[0].score).toBe(0)
  })

  it('returns substring matches with score 1', () => {
    const results = getSuggestions('rit', cmds)
    const wr = results.find((r) => r.value === 'writing')
    expect(wr).toBeDefined()
    expect(wr!.score).toBe(1)
  })

  it('returns levenshtein matches within distance 2', () => {
    const results = getSuggestions('hlep', cmds)
    const h = results.find((r) => r.value === 'help')
    expect(h).toBeDefined()
    expect(h!.score).toBeLessThanOrEqual(2)
  })

  it('excludes matches with distance > 2', () => {
    const results = getSuggestions('xyz', cmds)
    expect(results).toHaveLength(0)
  })

  it('returns empty array for empty input', () => {
    expect(getSuggestions('', cmds)).toHaveLength(0)
  })

  it('sorts results: prefix first, then substring, then levenshtein', () => {
    const results = getSuggestions('c', cmds)
    const catIdx = results.findIndex((r) => r.value === 'cat')
    const clearIdx = results.findIndex((r) => r.value === 'clear')
    // both are prefix matches (score 0), should be present
    expect(catIdx).toBeGreaterThanOrEqual(0)
    expect(clearIdx).toBeGreaterThanOrEqual(0)
  })
})

// ── didYouMean ─────────────────────────────────────────────────

describe('didYouMean', () => {
  const cmds = ['about', 'cat', 'clear', 'echo', 'help', 'ls', 'writing', 'contact']

  it('returns the nearest match for a typo within distance 2', () => {
    expect(didYouMean('abuot', cmds)).toBe('about')
    expect(didYouMean('hlep', cmds)).toBe('help')
    expect(didYouMean('ls', cmds)).toBe('ls') // exact
  })

  it('returns null when no match is within distance 2', () => {
    expect(didYouMean('xyzzy', cmds)).toBeNull()
  })

  it('is case-insensitive', () => {
    expect(didYouMean('ABOUT', cmds)).toBe('about')
  })

  it('prefers shorter distance over longer', () => {
    // 'ca' has dist 1 from 'cat' and dist 2+ from others
    const result = didYouMean('ca', cmds)
    expect(result).toBe('cat')
  })
})
