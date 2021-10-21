export const getPriceLabel = (price, currency) => {
  return `${price?.toLocaleString()} ${currency}`
}
