import { makeAutoObservable, runInAction } from 'mobx'

import * as localApi from 'api/local'

export const localStore = makeAutoObservable({
  countries: [],
  cities: [],
  selectedCountryCode: '',
  currency: { label: '₽', value: 'RUB' },

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
  }
})
