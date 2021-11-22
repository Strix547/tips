import { CURRENCIES } from 'core/constants'

export const getCurrencySymbol = (currencyLabel) => {
  return CURRENCIES.find(({ value }) => currencyLabel === value)?.symbol
}
