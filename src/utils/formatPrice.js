export const formatPrice = (price, currency) => {
  return `${price.toLocaleString()} ${currency}`
}
