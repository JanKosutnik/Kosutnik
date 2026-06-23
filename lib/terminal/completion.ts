import type { Command } from './types'

export function getCompletions(input: string, commands: Command[]): string[] {
  const lower = input.toLowerCase()
  if (!lower) return []
  const names = commands.flatMap((c) => [c.name, ...(c.aliases ?? [])])
  return names.filter((n) => n.startsWith(lower) && n !== lower).sort().slice(0, 8)
}

export function applyCompletion(input: string, completion: string): string {
  const lower = input.toLowerCase()
  const prefix = completion.slice(lower.length)
  return input + prefix
}
