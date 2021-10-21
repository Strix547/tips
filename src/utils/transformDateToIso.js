export const transformDateToIso = (date) => {
  if (!date) return

  return new Date(date).toISOString().split('T')[0]
}
