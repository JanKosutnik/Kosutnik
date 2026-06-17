'use client'

import { useEffect, useState } from 'react'

function getTime(): string {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Ljubljana',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default function LjubljanaClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(getTime())
    const id = setInterval(() => setTime(getTime()), 30_000)
    return () => clearInterval(id)
  }, [])

  return <span>{time ?? '—:—'}</span>
}
