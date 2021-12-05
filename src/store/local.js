import { makeAutoObservable, runInAction } from 'mobx'

import * as localApi from 'api/local'

export const localStore = makeAutoObservable({
  countries: [],
  cities: [],
  selectedCountryCode: null,
  currency: { label: '€', value: 'EUR' },
  isAddressesLoading: false,
  addresses: [],
  lang: '',

  setSelectedCountryCode: (code) => {
    localStore.selectedCountryCode = code
  },

  getCities: async (searchText) => {
    const cities = await localApi.getCities({
      search: searchText,
      countryCode: localStore.selectedCountryCode,
      languageCode: 'EN',
      limit: 10
    })

    runInAction(() => {
      localStore.cities = cities
    })
  },

  getCountries: async (searchText) => {
    const countries = await localApi.getCountries({
      search: searchText,
      languageCode: 'EN',
      limit: 10
    })

    runInAction(() => {
      localStore.countries = countries
    })
  },

  getLanguage: async () => {
    const storageLang = localStorage.getItem('lang')

    if (storageLang) {
      return storageLang
    } else {
      const langCode = await localApi.getSuggestedLanguage()
      localStore.lang = langCode
      localStorage.setItem('lang', langCode)
      return langCode
    }
  },

  setLang: (lang) => {
    localStore.lang = lang
    localStorage.setItem('lang', lang)
  }
})
