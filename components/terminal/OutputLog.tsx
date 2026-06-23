import type { OutputBlock } from '@/lib/terminal/types'

interface OutputLogProps {
  blocks: OutputBlock[]
}

// TODO: render role="log" aria-live="polite" output region
export default function OutputLog({ blocks: _blocks }: OutputLogProps) {
  return null
}
