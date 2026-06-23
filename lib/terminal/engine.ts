import type { Command, OutputBlock, ParseResult } from './types'

// TODO: split raw input string into command + args
export function parseInput(_raw: string): ParseResult {
  throw new Error('not implemented')
}

// TODO: resolve alias to canonical command name
export function resolveAlias(_input: string, _commands: Command[]): string {
  throw new Error('not implemented')
}

// TODO: dispatch to the matching command and return its output
export function executeCommand(_parsed: ParseResult, _commands: Command[]): OutputBlock[] {
  throw new Error('not implemented')
}
