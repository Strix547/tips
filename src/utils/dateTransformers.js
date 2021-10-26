export const transformDateLabelToIso = (date) => {
  if (!date) return

  const [d, m, y] = date.split('/')

  return new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10) + 1)
    .toISOString()
    .split('T')[0]
}

export const transformDateTimeToLabel = (dateTime) => {
  return `${dateTime?.toLocaleDateString()} ${dateTime?.toLocaleTimeString().slice(0, 5)}`
}

export const transformDateToIso = (date) => {
  if (!date) return

  return new Date(date).toISOString().split('T')[0]
}

export const transformDateToLabel = (date) => {
  if (!date) return

  const [y, m, d] = new Date(date).toISOString().split('T')[0].split('-')
  return `${d}/${m}/${y}`
}
