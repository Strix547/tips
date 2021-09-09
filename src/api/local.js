import { API } from 'core/axios'

export const getSuggestedLocation = () => {
  return API.get('/suggested-location')
}

export const getSupportedLanguages = () => {
  return API.get('/supported-language-codes')
}

export const getSuggestedLanguage = () => {
  return API.get('/suggested-language')
}

export const getCountyNames = ({ search, languageCode, limit = 10 }) => {
  return API.get('/country-names', { params: { search, 'language-code': languageCode, limit } })
}

export const getCityNames = ({ search, countryCode, languageCode, limit = 10 }) => {
  return API.get('/city-names', {
    params: {
      search,
      'country-code': countryCode,
      'language-code': languageCode,
      limit
    }
  })
}
