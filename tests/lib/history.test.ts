import { describe, it, expect } from 'vitest'
import {
  createHistory,
  pushEntry,
  navigateUp,
  navigateDown,
  resetCursor,
  expandBang,
} from '@/lib/terminal/history'

// ── createHistory ──────────────────────────────────────────────

describe('createHistory', () => {
  it('starts empty', () => {
    const h = createHistory()
    expect(h.entries).toHaveLength(0)
    expect(h.cursor).toBe(-1)
  })

  it('accepts initial entries', () => {
    const h = createHistory(['a', 'b'])
    expect(h.entries).toEqual(['a', 'b'])
  })
})

// ── pushEntry ──────────────────────────────────────────────────

describe('pushEntry', () => {
  it('adds a new entry and resets cursor', () => {
    const h = pushEntry(createHistory(), 'help')
    expect(h.entries).toEqual(['help'])
    expect(h.cursor).toBe(-1)
  })

  it('does not add blank/whitespace-only entries', () => {
    const h = pushEntry(createHistory(), '   ')
    expect(h.entries).toHaveLength(0)
  })

  it('does not add consecutive duplicate', () => {
    let h = createHistory()
    h = pushEntry(h, 'help')
    h = pushEntry(h, 'help')
    expect(h.entries).toEqual(['help'])
  })

  it('adds non-consecutive duplicates', () => {
    let h = createHistory()
    h = pushEntry(h, 'help')
    h = pushEntry(h, 'ls')
    h = pushEntry(h, 'help')
    expect(h.entries).toEqual(['help', 'ls', 'help'])
  })
})

// ── navigateUp / navigateDown ─────────────────────────────────

describe('navigateUp', () => {
  it('returns last entry on first up', () => {
    const h = createHistory(['a', 'b', 'c'])
    const { value } = navigateUp(h)
    expect(value).toBe('c')
  })

  it('continues backwards through history', () => {
    const h0 = createHistory(['a', 'b', 'c'])
    const { state: h1 } = navigateUp(h0) // cursor → 'c'
    const { value } = navigateUp(h1)     // cursor → 'b'
    expect(value).toBe('b')
  })

  it('stays at oldest entry when at beginning', () => {
    let h = createHistory(['a', 'b'])
    const r1 = navigateUp(h); h = r1.state
    const r2 = navigateUp(h); h = r2.state
    const r3 = navigateUp(h) // already at 0
    expect(r3.value).toBe('a')
    expect(r3.state.cursor).toBe(0)
  })

  it('returns empty string on empty history', () => {
    const { value } = navigateUp(createHistory())
    expect(value).toBe('')
  })
})

describe('navigateDown', () => {
  it('returns later entry when navigating down', () => {
    const base = createHistory(['a', 'b', 'c'])
    const r1 = navigateUp(base)
    const r2 = navigateUp(r1.state) // now at 'b'
    const r3 = navigateDown(r2.state)
    expect(r3.value).toBe('c')
  })

  it('returns empty string when going past the end', () => {
    const h = createHistory(['a'])
    const r1 = navigateUp(h)
    const r2 = navigateDown(r1.state)
    expect(r2.value).toBe('')
    expect(r2.state.cursor).toBe(-1)
  })

  it('is a no-op when cursor is -1', () => {
    const h = createHistory(['a', 'b'])
    const { value, state } = navigateDown(h)
    expect(value).toBe('')
    expect(state.cursor).toBe(-1)
  })
})

// ── resetCursor ────────────────────────────────────────────────

describe('resetCursor', () => {
  it('resets cursor to -1', () => {
    const h = navigateUp(createHistory(['a', 'b'])).state
    expect(h.cursor).toBeGreaterThanOrEqual(0)
    expect(resetCursor(h).cursor).toBe(-1)
  })
})

// ── expandBang ─────────────────────────────────────────────────

describe('expandBang', () => {
  const h = createHistory(['help', 'ls', 'cat about'])

  it('!! expands to last command', () => {
    expect(expandBang('!!', h)).toBe('cat about')
  })

  it('!1 expands to first command', () => {
    expect(expandBang('!1', h)).toBe('help')
  })

  it('!2 expands to second command', () => {
    expect(expandBang('!2', h)).toBe('ls')
  })

  it('!-1 expands to last command (negative index)', () => {
    expect(expandBang('!-1', h)).toBe('cat about')
  })

  it('!-2 expands to second-to-last', () => {
    expect(expandBang('!-2', h)).toBe('ls')
  })

  it('returns null for out-of-range index', () => {
    expect(expandBang('!99', h)).toBeNull()
  })

  it('returns null for non-bang input', () => {
    expect(expandBang('help', h)).toBeNull()
    expect(expandBang('!', h)).toBeNull()
  })

  it('returns null for !! on empty history', () => {
    expect(expandBang('!!', createHistory())).toBeNull()
  })
})
