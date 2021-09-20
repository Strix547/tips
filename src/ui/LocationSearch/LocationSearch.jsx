import { useState, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import throttle from 'lodash.throttle'

import { localStore } from 'store'

import { Autocomplete } from 'ui'

import * as S from './LocationSearch.styled'

export const LocationSearch = observer(() => {
  const useFormProps = useFormContext()

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)

  const getCountriesThrottle = useCallback(
    throttle((searchText) => localStore.getCountries(searchText), 500),
    [localStore]
  )

  const getCitiesThrottle = useCallback(
    throttle((searchText) => localStore.getCities(searchText), 500),
    [localStore]
  )

  const onCityInputChange = ({ target }) => {
    getCitiesThrottle(target.value)
  }

  const onCityChange = (_, newCity, reason) => {
    console.log(useFormProps.watch(), reason, newCity, useFormProps.formState.errors)
    if (reason !== 'select-option') return

    setSelectedCity(newCity)
    useFormProps.setValue('city', newCity)
    useFormProps.clearErrors('city')
  }

  const onCountryInputChange = ({ target }) => {
    getCountriesThrottle(target.value)
  }

  const onCountryChange = (_, newCountry, reason) => {
    console.log(useFormProps.watch(), reason, newCountry, useFormProps.formState.errors)

    if (reason !== 'select-option') return

    localStore.setSelectedCountryCode(newCountry.code)
    setSelectedCountry(toJS(newCountry.name))
    useFormProps.setValue('country', toJS(newCountry.name))
    useFormProps.clearErrors('country')
  }

  return (
    <>
      <Autocomplete
        name="country"
        label="Страна"
        value={selectedCountry}
        options={localStore.countries}
        required
        getOptionLabel={({ name }) => name}
        noOptionsText="Страны не найдены"
        onInputChange={onCountryInputChange}
        onChange={onCountryChange}
        renderInput={(props) => <S.FormField placeholder="Выберите страну" {...props} />}
      />

      {selectedCountry && (
        <Autocomplete
          name="city"
          label="Город"
          value={selectedCity}
          options={localStore.cities}
          noOptionsText="Города не найдены"
          required
          onInputChange={onCityInputChange}
          onChange={onCityChange}
          renderInput={(props) => <S.FormField placeholder="Выберите город" {...props} />}
        />
      )}
    </>
  )
})
