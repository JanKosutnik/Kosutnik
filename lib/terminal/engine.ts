import type { Command, ExecuteContext, OutputBlock, ParseResult } from './types'
import { sections, siteMeta } from '@/content/site'
import { didYouMean } from './suggest'

// ── Parse ─────────────────────────────────────────────────────

export function parseInput(raw: string): ParseResult {
  const trimmed = raw.trim()
  if (!trimmed) return { command: '', args: [], raw }

  const tokens = trimmed.match(/"[^"]*"|'[^']*'|\S+/g) ?? []
  const [first, ...rest] = tokens
  const command = (first ?? '').toLowerCase()
  const args = rest.map((t) =>
    (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))
      ? t.slice(1, -1)
      : t,
  )
  return { command, args, raw }
}

// ── Alias map ─────────────────────────────────────────────────

export const ALIASES: Record<string, string> = {
  '?': 'help',
  man: 'help',
  list: 'ls',
  dir: 'ls',
  more: 'cat',
  read: 'cat',
  print: 'echo',
  say: 'echo',
  quit: 'clear',
  reset: 'clear',
}

export function resolveAlias(input: string, commands: Command[]): string {
  if (ALIASES[input]) return ALIASES[input]
  const known = commands.map((c) => c.name)
  if (known.includes(input)) return input
  // check if any command has this as an alias
  for (const cmd of commands) {
    if (cmd.aliases?.includes(input)) return cmd.name
  }
  return input
}

// ── Built-in command registry ─────────────────────────────────

export function buildCommands(now: Date = new Date()): Command[] {
  const sectionIds = sections.map((s) => s.id)
  const sectionMap = Object.fromEntries(sections.map((s) => [s.id, s]))

  const cmds: Command[] = [
    {
      name: 'help',
      aliases: ['?', 'man'],
      description: 'Show available commands. Usage: help [command]',
      execute(args) {
        if (args[0]) {
          const target = resolveAlias(args[0], cmds)
          const cmd = cmds.find((c) => c.name === target)
          if (!cmd) {
            return [{ type: 'error', content: `help: no manual entry for '${args[0]}'` }]
          }
          return [{ type: 'text', content: `${cmd.name}: ${cmd.description}` }]
        }
        const lines = cmds.map((c) => `  ${c.name.padEnd(12)} ${c.description}`)
        return [{ type: 'text', content: lines.join('\n') }]
      },
    },
    {
      name: 'ls',
      aliases: ['list', 'dir'],
      description: 'List available sections',
      execute(_args) {
        return [{ type: 'text', content: sectionIds.join('  ') }]
      },
    },
    {
      name: 'cat',
      aliases: ['more', 'read'],
      description: 'Display a section. Usage: cat <section>',
      execute(args) {
        if (!args[0]) {
          return [{ type: 'error', content: 'cat: missing operand' }]
        }
        const id = args[0].toLowerCase()
        const section = sectionMap[id]
        if (!section) {
          return [{ type: 'error', content: `cat: ${id}: no such file or section` }]
        }
        return [{ type: 'section', sectionId: id }]
      },
    },
    {
      name: 'echo',
      aliases: ['print', 'say'],
      description: 'Print text. Usage: echo <text>',
      execute(args) {
        return [{ type: 'text', content: args.join(' ') }]
      },
    },
    {
      name: 'clear',
      aliases: ['quit', 'reset'],
      description: 'Clear the terminal output',
      execute(_args) {
        return [{ type: 'clear' }]
      },
    },
    {
      name: 'date',
      description: 'Show current date and time',
      execute(_args) {
        return [{ type: 'text', content: now.toLocaleString('en-GB', { timeZone: 'Europe/Ljubljana' }) }]
      },
    },
    {
      name: 'whoami',
      description: 'Identify the current user',
      execute(_args) {
        return [{ type: 'text', content: siteMeta.name }]
      },
    },
    {
      name: 'history',
      description: 'List command history',
      execute(_args) {
        // entries are injected at runtime via ExecuteContext
        return [{ type: 'text', content: 'No history yet.' }]
      },
    },
    ...sections.map<Command>((section) => ({
      name: section.id,
      description: `Show ${section.title} section`,
      execute(_args) {
        return [{ type: 'section', sectionId: section.id }]
      },
    })),
  ]

  return cmds
}

// ── Execute ───────────────────────────────────────────────────

export function executeCommand(
  parsed: ParseResult,
  commands: Command[],
  ctx: ExecuteContext = {},
): OutputBlock[] {
  if (!parsed.command) return []

  const resolved = resolveAlias(parsed.command, commands)
  const cmd = commands.find((c) => c.name === resolved)

  if (!cmd) {
    const allNames = commands.flatMap((c) => [c.name, ...(c.aliases ?? [])])
    const suggestion = didYouMean(parsed.command, allNames)
    if (suggestion) {
      return [
        { type: 'error', content: `${parsed.command}: command not found` },
        { type: 'dym', suggestion },
      ]
    }
    return [{ type: 'error', content: `${parsed.command}: command not found` }]
  }

  // history command needs runtime context
  if (resolved === 'history') {
    const entries = ctx.historyEntries ?? []
    if (entries.length === 0) return [{ type: 'text', content: 'No history yet.' }]
    return [{ type: 'history', entries }]
  }

  return cmd.execute(parsed.args)
}
