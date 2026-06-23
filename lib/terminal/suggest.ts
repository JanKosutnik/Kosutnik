import type { Suggestion } from './types'

// ── Levenshtein distance ──────────────────────────────────────

export function levenshtein(a: string, b: string): number {
  const m = a.length
  const n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  )
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

// ── Suggestion ranking ────────────────────────────────────────

export function getSuggestions(input: string, commands: string[]): Suggestion[] {
  if (!input) return []
  const lower = input.toLowerCase()

  return commands
    .map((cmd): Suggestion => {
      const c = cmd.toLowerCase()
      // prefix match scores 0; substring match scores 1; otherwise levenshtein
      const score = c.startsWith(lower)
        ? 0
        : c.includes(lower)
          ? 1
          : levenshtein(lower, c)
      return { value: cmd, label: cmd, score }
    })
    .filter((s) => s.score <= 2)
    .sort((a, b) => a.score - b.score || a.value.localeCompare(b.value))
}

// ── Did-you-mean ──────────────────────────────────────────────

export function didYouMean(input: string, commands: string[]): string | null {
  const lower = input.toLowerCase()
  let best: string | null = null
  let bestDist = Infinity

  for (const cmd of commands) {
    const dist = levenshtein(lower, cmd.toLowerCase())
    if (dist < bestDist && dist <= 2) {
      bestDist = dist
      best = cmd
    }
  }

  return best
}
