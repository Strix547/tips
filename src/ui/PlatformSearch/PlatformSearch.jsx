import { useState, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { useFormContext } from 'react-hook-form'
import throttle from 'lodash.throttle'

import { Autocomplete } from 'ui'

import { platformsStore, userStore } from 'store'

import * as S from './PlatformSearch.styled'

export const PlatformSearch = observer(({ label }) => {
  const useFormProps = useFormContext()

  const [platform, setPlatform] = useState('')
  const { platformSearchList } = platformsStore

  const userId = userStore.id

  const getPlatformsThrottle = useCallback(
    throttle((searchText) => platformsStore.searchPlatforms({ text: searchText, userId }), 500),
    [platformsStore]
  )

  const onPlatformInputChange = (_, value) => {
    setPlatform(value)

    if (value) {
      getPlatformsThrottle(value)
    }
  }

  const onPlatformChange = (_, __, reason) => {
    if (reason !== 'select-option') return

    useFormProps.clearErrors('country')
  }

  return (
    <Autocomplete
      name="platform"
      label={label}
      options={platformSearchList}
      required
      getOptionLabel={({ title }) => title}
      noOptionsText={platform.length ? 'Площадки не найдены' : 'Введите название площадки'}
      onInputChange={onPlatformInputChange}
      onChange={onPlatformChange}
      renderInput={(props) => <S.FormField {...props} placeholder="Введите название площадки" />}
    />
  )
})
