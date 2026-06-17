'use client'

import { useEffect, useState } from 'react'

function getSeason(): string {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Ljubljana' }))
  const m = now.getMonth() + 1 // 1–12

  let prefix = ''
  let season = ''

  if (m === 3 || m === 6 || m === 9 || m === 12) prefix = 'early '
  else if (m === 5 || m === 8 || m === 11 || m === 2) prefix = 'late '

  if (m >= 3 && m <= 5)       season = 'spring'
  else if (m >= 6 && m <= 8)  season = 'summer'
  else if (m >= 9 && m <= 11) season = 'autumn'
  else                         season = 'winter'

  return prefix + season
}

export default function SeasonLabel() {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    setLabel(getSeason())
  }, [])

  if (!label) return null
  return <span>{label}</span>
}
