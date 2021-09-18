const pad = (value) => {
  return value < 10 ? `0${value}` : value
}

export const getTimeZoneOffset = () => {
  const date = new Date()
  const sign = date.getTimezoneOffset() > 0 ? '-' : '+'
  const offset = Math.abs(date.getTimezoneOffset())
  const hours = pad(Math.floor(offset / 60))
  const minutes = pad(offset % 60)

  return `${sign}${hours}:${minutes}`
}
