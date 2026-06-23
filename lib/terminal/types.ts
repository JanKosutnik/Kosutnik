// ── Output blocks ─────────────────────────────────────────────

export interface TextOutputBlock    { type: 'text';    content: string }
export interface ErrorOutputBlock   { type: 'error';   content: string }
export interface SectionOutputBlock { type: 'section'; sectionId: string }
export interface ClearOutputBlock   { type: 'clear' }
export interface HelpOutputBlock    { type: 'help' }
export interface DidYouMeanBlock    { type: 'dym';     suggestion: string }
export interface HistoryBlock       { type: 'history'; entries: string[] }

export type OutputBlock =
  | TextOutputBlock
  | ErrorOutputBlock
  | SectionOutputBlock
  | ClearOutputBlock
  | HelpOutputBlock
  | DidYouMeanBlock
  | HistoryBlock

// ── Command model ─────────────────────────────────────────────

export interface ParseResult {
  command: string
  args: string[]
  raw: string
}

export interface Command {
  name: string
  aliases?: string[]
  description: string
  execute(args: string[]): OutputBlock[]
}

export interface ExecuteContext {
  historyEntries?: string[]
}

// ── History & suggestions ─────────────────────────────────────

export interface Suggestion {
  value: string
  label: string
  score: number
}
