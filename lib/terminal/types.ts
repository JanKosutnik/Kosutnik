// ── Output blocks ─────────────────────────────────────────────

export interface TextOutputBlock    { type: 'text';       content: string }
export interface ErrorOutputBlock   { type: 'error';      content: string }
export interface SectionOutputBlock { type: 'section';    sectionId: string }
export interface ClearOutputBlock   { type: 'clear' }
export interface HelpOutputBlock    { type: 'help' }
export interface DidYouMeanBlock    { type: 'dym';        suggestion: string }
export interface HistoryBlock       { type: 'history';    entries: string[] }
export interface ClockOutputBlock   { type: 'clock' }
export interface OpenUrlBlock       { type: 'open-url';   url: string }
export interface NotesBlock         { type: 'notes';      entries: string[] }
export interface NoteAddBlock       { type: 'note-add';   text: string }
export interface NotesClearBlock    { type: 'notes-clear' }

export type OutputBlock =
  | TextOutputBlock
  | ErrorOutputBlock
  | SectionOutputBlock
  | ClearOutputBlock
  | HelpOutputBlock
  | DidYouMeanBlock
  | HistoryBlock
  | ClockOutputBlock
  | OpenUrlBlock
  | NotesBlock
  | NoteAddBlock
  | NotesClearBlock

// ── Command model ─────────────────────────────────────────────

export interface ParseResult {
  command: string
  args: string[]
  raw: string
}

export interface ExecuteContext {
  historyEntries?: string[]
  notes?: string[]
}

export interface Command {
  name: string
  aliases?: string[]
  description: string
  execute(args: string[], ctx?: ExecuteContext): OutputBlock[]
}

// ── History & suggestions ─────────────────────────────────────

export interface Suggestion {
  value: string
  label: string
  score: number
}
