import { useState, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import throttle from 'lodash.throttle'

import { localStore } from 'store'

import { Autocomplete } from 'ui'

import * as S from './LocationSearch.styled'

export const LocationSearch = observer(() => {
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
        label="Страна"
        options={localStore.countries}
        required
        getOptionLabel={({ name }) => name}
        noOptionsText={countryInput.length ? 'Страны не найдены' : 'Введите название страны'}
        onInputChange={onCountryInputChange}
        onChange={onCountryChange}
        renderInput={(props) => <S.FormField {...props} placeholder="Введите название страны" />}
      />

      {localStore.selectedCountryCode && (
        <Autocomplete
          name="city"
          label="Город"
          options={localStore.cities}
          noOptionsText={cityInput.length ? 'Города не найдены' : 'Введите название города'}
          required
          onInputChange={onCityInputChange}
          onChange={onCityChange}
          renderInput={(props) => <S.FormField {...props} placeholder="Введите название города" />}
        />
      )}
    </>
  )
})
