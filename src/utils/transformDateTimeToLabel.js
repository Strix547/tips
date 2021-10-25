export const transformDateTimeToLabel = (dateTime) => {
  return `${dateTime?.toLocaleDateString()} ${dateTime?.toLocaleTimeString().slice(0, 5)}`
}