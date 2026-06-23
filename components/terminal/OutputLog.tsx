import type { OutputBlock } from '@/lib/terminal/types'

interface OutputLogProps {
  blocks: OutputBlock[]
}

export default function OutputLog({ blocks: _blocks }: OutputLogProps) {
  return (
    <div
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
      className="flex-1 overflow-y-auto px-4 py-3 text-[var(--term-fg)]"
    >
      {/* TODO: render OutputBlock[] in Prompt 5 */}
    </div>
  )
}
