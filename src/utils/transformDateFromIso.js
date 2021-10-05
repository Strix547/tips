export const transformDateFromIso = (date) => {
  const [y, m, d] = new Date(date).toISOString().split('T')[0].split('-')
  return `${d}/${m}/${y}`
}
