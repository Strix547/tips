export const CURRENCIES = [
  { label: 'USD', value: 'USD', symbol: '$', locale: '' },
  { label: 'EUR', value: 'EUR', symbol: '€' },
  { label: 'GBP', value: 'GBP', symbol: '£' }
]

export const PLATFORM_TYPES = [
  { label: 'restaurant', value: 'RESTAURANT' },
  { label: 'fitnes-center', value: 'FITNESS_CENTER' },
  { label: 'beauty-saloon', value: 'BEAUTY_SALON' },
  { label: 'car-service', value: 'CAR_SERVICE' },
  { label: 'other', value: 'OTHER' }
]

export const USER_ROLES = [
  { label: 'users', value: 'REGULAR' },
  { label: 'business-acocunt', value: 'BUSINESS' },
  { label: 'unverified', value: 'UNVERIFIED' },
  { label: 'admins', value: 'ADMIN' }
]

export const stripeKey =
  process.env.NODE_ENV === 'development' ?  process.env.STIPE_KEY_DEV : process.env.STIPE_KEY_PROD 
