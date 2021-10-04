export const transformDateToIso = (date) => {
  const [d, m, y] = date.split('/')

  return new Date(parseInt(y, 10), parseInt(m, 10), parseInt(d, 10)).toISOString().split('T')[0]
}
