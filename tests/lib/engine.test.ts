import { describe, it, expect } from 'vitest'
import { parseInput, resolveAlias, buildCommands, executeCommand, ALIASES } from '@/lib/terminal/engine'

// ── parseInput ─────────────────────────────────────────────────

describe('parseInput', () => {
  it('parses a simple command', () => {
    expect(parseInput('help')).toEqual({ command: 'help', args: [], raw: 'help' })
  })

  it('parses a command with args', () => {
    expect(parseInput('cat about')).toEqual({ command: 'cat', args: ['about'], raw: 'cat about' })
  })

  it('strips leading/trailing whitespace', () => {
    expect(parseInput('  echo   hello  ')).toEqual({
      command: 'echo',
      args: ['hello'],
      raw: '  echo   hello  ',
    })
  })

  it('handles extra spaces between tokens', () => {
    const result = parseInput('echo  foo   bar')
    expect(result.command).toBe('echo')
    expect(result.args).toEqual(['foo', 'bar'])
  })

  it('handles empty input', () => {
    expect(parseInput('')).toEqual({ command: '', args: [], raw: '' })
    expect(parseInput('   ')).toEqual({ command: '', args: [], raw: '   ' })
  })

  it('normalises command to lowercase', () => {
    expect(parseInput('HELP').command).toBe('help')
    expect(parseInput('Cat About').command).toBe('cat')
  })

  it('strips quotes from quoted args', () => {
    const result = parseInput('echo "hello world"')
    expect(result.args[0]).toBe('hello world')
  })

  it('strips single quotes from quoted args', () => {
    const result = parseInput("echo 'foo bar'")
    expect(result.args[0]).toBe('foo bar')
  })
})

// ── resolveAlias ──────────────────────────────────────────────

describe('resolveAlias', () => {
  const cmds = buildCommands()

  it('resolves known aliases from ALIASES map', () => {
    expect(resolveAlias('?', cmds)).toBe('help')
    expect(resolveAlias('man', cmds)).toBe('help')
    expect(resolveAlias('dir', cmds)).toBe('ls')
    expect(resolveAlias('more', cmds)).toBe('cat')
    expect(resolveAlias('say', cmds)).toBe('echo')
    expect(resolveAlias('reset', cmds)).toBe('clear')
  })

  it('returns a real command unchanged', () => {
    expect(resolveAlias('help', cmds)).toBe('help')
    expect(resolveAlias('cat', cmds)).toBe('cat')
  })

  it('returns unknown commands unchanged', () => {
    expect(resolveAlias('bogus', cmds)).toBe('bogus')
  })

  it('covers all ALIASES entries', () => {
    for (const [alias, target] of Object.entries(ALIASES)) {
      expect(resolveAlias(alias, cmds)).toBe(target)
    }
  })
})

// ── executeCommand ────────────────────────────────────────────

describe('executeCommand', () => {
  const cmds = buildCommands()

  it('executes help and returns text output', () => {
    const result = executeCommand(parseInput('help'), cmds)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0].type).toBe('text')
  })

  it('executes help <cmd> for a specific command', () => {
    const result = executeCommand(parseInput('help cat'), cmds)
    expect(result[0].type).toBe('text')
    expect((result[0] as { type: 'text'; content: string }).content).toContain('cat')
  })

  it('returns error for help with unknown command', () => {
    const result = executeCommand(parseInput('help unknowncmd'), cmds)
    expect(result[0].type).toBe('error')
  })

  it('executes ls and lists section ids', () => {
    const result = executeCommand(parseInput('ls'), cmds)
    expect(result[0].type).toBe('text')
    const content = (result[0] as { type: 'text'; content: string }).content
    expect(content).toContain('about')
    expect(content).toContain('contact')
  })

  it('executes cat <section> and returns section block', () => {
    const result = executeCommand(parseInput('cat about'), cmds)
    expect(result[0]).toEqual({ type: 'section', sectionId: 'about' })
  })

  it('returns error for cat unknown section', () => {
    const result = executeCommand(parseInput('cat nonexistent'), cmds)
    expect(result[0].type).toBe('error')
  })

  it('returns error for cat with no argument', () => {
    const result = executeCommand(parseInput('cat'), cmds)
    expect(result[0].type).toBe('error')
  })

  it('executes echo and returns text', () => {
    const result = executeCommand(parseInput('echo hello world'), cmds)
    expect(result[0]).toEqual({ type: 'text', content: 'hello world' })
  })

  it('executes clear', () => {
    const result = executeCommand(parseInput('clear'), cmds)
    expect(result[0]).toEqual({ type: 'clear' })
  })

  it('executes section commands directly (e.g. about)', () => {
    const result = executeCommand(parseInput('about'), cmds)
    expect(result[0]).toEqual({ type: 'section', sectionId: 'about' })
  })

  it('resolves alias before dispatch', () => {
    const result = executeCommand(parseInput('dir'), cmds)
    // dir → ls → list of sections
    expect(result[0].type).toBe('text')
  })

  it('returns error + did-you-mean for close misspelling', () => {
    const result = executeCommand(parseInput('abuot'), cmds)
    expect(result[0].type).toBe('error')
    expect(result[1].type).toBe('text')
    expect((result[1] as { type: 'text'; content: string }).content).toMatch(/about/i)
  })

  it('returns error only (no suggestion) for unrecognisable input', () => {
    const result = executeCommand(parseInput('xyzzy'), cmds)
    expect(result[0].type).toBe('error')
  })

  it('returns empty array for empty input', () => {
    expect(executeCommand(parseInput(''), cmds)).toHaveLength(0)
  })

  it('injects now date correctly', () => {
    const fixedDate = new Date('2026-06-23T12:00:00Z')
    const dateCmds = buildCommands(fixedDate)
    const result = executeCommand(parseInput('date'), dateCmds)
    expect(result[0].type).toBe('text')
    const content = (result[0] as { type: 'text'; content: string }).content
    expect(content).toContain('2026')
  })
})
