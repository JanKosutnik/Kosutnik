// Pure history model — no DOM or localStorage here; persistence is React's job

export interface HistoryState {
  entries: string[]
  cursor: number // -1 = at input (not navigating)
}

export function createHistory(initial: string[] = []): HistoryState {
  return { entries: initial, cursor: -1 }
}

export function pushEntry(state: HistoryState, input: string): HistoryState {
  if (!input.trim()) return state
  // avoid consecutive duplicates
  const entries =
    state.entries[state.entries.length - 1] === input
      ? state.entries
      : [...state.entries, input]
  return { entries, cursor: -1 }
}

export function navigateUp(state: HistoryState): { state: HistoryState; value: string } {
  if (state.entries.length === 0) return { state, value: '' }
  const cursor =
    state.cursor === -1
      ? state.entries.length - 1
      : Math.max(0, state.cursor - 1)
  return { state: { ...state, cursor }, value: state.entries[cursor] }
}

export function navigateDown(state: HistoryState): { state: HistoryState; value: string } {
  if (state.cursor === -1) return { state, value: '' }
  const cursor = state.cursor + 1
  if (cursor >= state.entries.length) {
    return { state: { ...state, cursor: -1 }, value: '' }
  }
  return { state: { ...state, cursor }, value: state.entries[cursor] }
}

export function resetCursor(state: HistoryState): HistoryState {
  return { ...state, cursor: -1 }
}

// ── Bang recall ───────────────────────────────────────────────

export function expandBang(input: string, state: HistoryState): string | null {
  const entries = state.entries
  if (input === '!!') {
    return entries[entries.length - 1] ?? null
  }
  const bangN = input.match(/^!(-?\d+)$/)
  if (bangN) {
    const n = parseInt(bangN[1], 10)
    if (n > 0 && n <= entries.length) {
      return entries[n - 1]
    }
    if (n < 0 && -n <= entries.length) {
      return entries[entries.length + n]
    }
  }
  return null
}
