import { useState, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import throttle from 'lodash.throttle'
import { useTranslation } from 'next-i18next'

import { localStore } from 'store'

import { Autocomplete } from 'ui'

import * as S from './LocationSearch.styled'

export const LocationSearch = observer(() => {
  const { t } = useTranslation('common')
  const useFormProps = useFormContext()

  const [countryInput, setCountryInput] = useState('')
  const [cityInput, setCityInput] = useState('')

  const getCountriesThrottle = useCallback(
    throttle((searchText) => localStore.getCountries(searchText), 500),
    [localStore]
  )

  const getCitiesThrottle = useCallback(
    throttle((searchText) => localStore.getCities(searchText), 500),
    [localStore]
  )

  const onCityInputChange = (_, value) => {
    setCityInput(value)

    if (value) {
      getCitiesThrottle(value)
    }
  }

  const onCityChange = (_, __, reason) => {
    if (reason !== 'select-option') return

    useFormProps.clearErrors('city')
  }

  const onCountryInputChange = (_, value) => {
    setCountryInput(value)

    if (value) {
      getCountriesThrottle(value)
    }
  }

  const onCountryChange = (_, newCountry, reason) => {
    if (reason !== 'select-option') return

    localStore.setSelectedCountryCode(newCountry.code)
    useFormProps.clearErrors('country')
  }

  return (
    <>
      <Autocomplete
        name="country"
        label={t('country')}
        options={localStore.countries}
        required
        getOptionLabel={({ name }) => name}
        noOptionsText={countryInput.length ? t('countries-not-found') : t('enter-country-name')}
        onInputChange={onCountryInputChange}
        onChange={onCountryChange}
        renderInput={(props) => <S.FormField {...props} placeholder={t('enter-country-name')} />}
      />

      {localStore.selectedCountryCode && (
        <Autocomplete
          name="city"
          label={t('city')}
          options={localStore.cities}
          noOptionsText={cityInput.length ? t('cities-not-found') : t('enter-city-name')}
          required
          onInputChange={onCityInputChange}
          onChange={onCityChange}
          renderInput={(props) => <S.FormField {...props} placeholder={t('enter-city-name')} />}
        />
      )}
    </>
  )
})
