import { API } from 'core/axios'

const transformCountries = (countries) => {
  return countries.map(({ localCountryName, countryCode }) => ({
    name: localCountryName,
    code: countryCode
  }))
}

const transformCities = (cities) => {
  return cities.map(({ cityName }) => cityName)
}

export const getSuggestedLocation = () => {
  return API.get('/suggested-location')
}

export const getSupportedLanguages = () => {
  return API.get('/supported-language-codes')
}

export const getSuggestedLanguage = () => {
  return API.get('/suggested-language')
}

export const getCountries = async ({ search, languageCode, limit = 10 }) => {
  try {
    const { data } = await API.get('/country-names', {
      params: { search, 'language-code': languageCode, limit }
    })

    return transformCountries(data)
  } catch (err) {
    //
  }
}

export const getCities = async ({ search, countryCode, languageCode, limit = 10 }) => {
  const { data } = await API.get('/city-names', {
    params: {
      search,
      'country-code': countryCode,
      'language-code': languageCode,
      limit
    }
  })

  return transformCities(data)
}
