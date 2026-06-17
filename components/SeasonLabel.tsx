function getSeason(): string {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Ljubljana' }))
  const m = now.getMonth() + 1

  let prefix = ''
  if (m === 3 || m === 6 || m === 9 || m === 12) prefix = 'early '
  else if (m === 5 || m === 8 || m === 11 || m === 2) prefix = 'late '

  if (m >= 3 && m <= 5)       return prefix + 'spring'
  if (m >= 6 && m <= 8)       return prefix + 'summer'
  if (m >= 9 && m <= 11)      return prefix + 'autumn'
  return prefix + 'winter'
}

export default function SeasonLabel() {
  return <span>{getSeason()}</span>
}
