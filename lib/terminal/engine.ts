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
  for (const cmd of commands) {
    if (cmd.aliases?.includes(input)) return cmd.name
  }
  return input
}

// ── Built-in command registry ─────────────────────────────────

export function buildCommands(now: Date = new Date()): Command[] {
  const sectionIds = sections.map((s) => s.id)
  const sectionMap = Object.fromEntries(sections.map((s) => [s.id, s]))
  const commandCount = sectionIds.length + 12 // builtins + sections

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
      execute() {
        return [{ type: 'text', content: sectionIds.join('  ') }]
      },
    },
    {
      name: 'cat',
      aliases: ['more', 'read'],
      description: 'Display a section. Usage: cat <section>',
      execute(args) {
        if (!args[0]) return [{ type: 'error', content: 'cat: missing operand' }]
        const id = args[0].toLowerCase()
        const section = sectionMap[id]
        if (!section) return [{ type: 'error', content: `cat: ${id}: no such file or section` }]
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
      execute() {
        return [{ type: 'clear' }]
      },
    },
    {
      name: 'date',
      description: 'Show current date and time in Ljubljana',
      execute() {
        return [{ type: 'text', content: now.toLocaleString('en-GB', { timeZone: 'Europe/Ljubljana' }) }]
      },
    },
    {
      name: 'clock',
      description: 'Show a live clock for Ljubljana',
      execute() {
        return [{ type: 'clock' }]
      },
    },
    {
      name: 'whoami',
      description: 'Identify the current user',
      execute() {
        return [{ type: 'text', content: siteMeta.name }]
      },
    },
    {
      name: 'history',
      description: 'List command history',
      execute() {
        return [{ type: 'text', content: 'No history yet.' }]
      },
    },
    {
      name: 'open',
      description: 'Open a URL or section. Usage: open <url|section>',
      execute(args) {
        if (!args[0]) return [{ type: 'error', content: 'open: missing argument' }]
        const target = args[0]
        if (sectionMap[target.toLowerCase()]) {
          return [{ type: 'section', sectionId: target.toLowerCase() }]
        }
        if (target.startsWith('http') || target.startsWith('mailto:')) {
          return [
            { type: 'open-url', url: target },
            { type: 'text', content: `Opening ${target} ...` },
          ]
        }
        return [{ type: 'error', content: `open: ${target}: not a URL or known section` }]
      },
    },
    {
      name: 'note',
      description: 'Save or list notes. Usage: note [text] | note clear',
      execute(args, ctx) {
        if (args[0] === 'clear') return [{ type: 'notes-clear' }]
        if (args.length > 0) return [{ type: 'note-add', text: args.join(' ') }]
        const entries = ctx?.notes ?? []
        return [{ type: 'notes', entries }]
      },
    },
    {
      name: 'guide',
      aliases: ['quickstart', 'shortcuts'],
      description: 'Show a quick reference of sections and commands',
      execute() {
        const sectionList = sectionIds.join('  ')
        const lines = [
          'Sections:',
          `  ${sectionList}`,
          '',
          'Commands:',
          '  help          Show all commands',
          '  ls            List sections',
          '  clear         Clear the terminal',
          '  history       Command history',
          '  neofetch      System info',
          '  clock         Live Ljubljana time',
          '  note <text>   Save a note',
          '',
          'Tips:',
          '  Tab           Autocomplete',
          '  Ctrl+K        Command palette',
          '  Ctrl+R        Reverse search',
          '  Arrow Up/Down History navigation',
        ]
        return [{ type: 'text', content: lines.join('\n') }]
      },
    },
    {
      name: 'neofetch',
      description: 'Show system information',
      execute() {
        const lines = [
          `${siteMeta.name}@kosutnik`,
          '-'.repeat(siteMeta.name.length + 10),
          `OS:       kosutnik.dev`,
          `Shell:    /lib/terminal`,
          `Location: ${siteMeta.location}`,
          `Commands: ${commandCount} available`,
          `Contact:  ${siteMeta.email}`,
        ]
        return [{ type: 'text', content: lines.join('\n') }]
      },
    },
    ...sections.map<Command>((section) => ({
      name: section.id,
      description: `Show ${section.title} section`,
      execute() {
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

  if (resolved === 'history') {
    const entries = ctx.historyEntries ?? []
    if (entries.length === 0) return [{ type: 'text', content: 'No history yet.' }]
    return [{ type: 'history', entries }]
  }

  return cmd.execute(parsed.args, ctx)
}
