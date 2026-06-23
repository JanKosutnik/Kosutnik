interface PromptProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

// TODO: accessible label, visible focus ring, 44px touch target
export default function Prompt({ value: _value, onChange: _onChange, onSubmit: _onSubmit }: PromptProps) {
  return null
}
