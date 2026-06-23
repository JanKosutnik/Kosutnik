import type { Suggestion } from './types'

// TODO: compute edit distance between two strings
export function levenshtein(_a: string, _b: string): number {
  throw new Error('not implemented')
}

// TODO: return ranked suggestions for partial input against known commands
export function getSuggestions(_input: string, _commands: string[]): Suggestion[] {
  throw new Error('not implemented')
}

// TODO: return closest match if within threshold, else null
export function didYouMean(_input: string, _commands: string[]): string | null {
  throw new Error('not implemented')
}
