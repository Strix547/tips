import { useState, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { useFormContext } from 'react-hook-form'
import throttle from 'lodash.throttle'

import { Autocomplete } from 'ui'

import { localStore } from 'store'

import * as S from './AddressSearch.styled'

export const AddressSearch = observer(({ label = 'Адрес' }) => {
  const useFormProps = useFormContext()

  const [address, setAddress] = useState('')
  const { addresses } = localStore

  const getAddressesThrottle = useCallback(
    throttle((searchText) => localStore.getAddress(searchText), 500),
    [localStore]
  )

  const onPlatformInputChange = (_, value) => {
    setAddress(value)

    if (value) {
      getAddressesThrottle(value)
    }
  }

  const onPlatformChange = (_, __, reason) => {
    if (reason !== 'select-option') return

    useFormProps.clearErrors('address')
  }

  return (
    <Autocomplete
      name="address"
      label={label}
      options={addresses}
      required
      getOptionLabel={({ title }) => title}
      noOptionsText={address.length ? 'Адрес не найден' : 'Введите адрес'}
      onInputChange={onPlatformInputChange}
      onChange={onPlatformChange}
      renderInput={(props) => <S.FormField {...props} placeholder="Введите адрес" />}
    />
  )
})
