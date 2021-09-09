import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { FormField, FormControlLabel } from 'ui'

import * as S from './MainInfo.styled'

export const MainInfo = () => {
  const useFormProps = useForm()

  const [platformType, setPlatformType] = useState('restaurant')

  const platformTypes = [
    { label: 'Ресторан', value: 'restaurant' },
    { label: 'Фитнес-центр', value: 'fitness-center' },
    { label: 'Салон красоты', value: 'beauty-saloon' },
    { label: 'Автосервис', value: 'car-service' },
    { label: 'Другое', value: 'other' }
  ]

  const onPlatformTypeChange = (value) => {
    setPlatformType(value)
  }

  const platformTypeRadios = platformTypes.map(({ label, value }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={<S.PlatformTypeRadio active={platformType === value}>{label}</S.PlatformTypeRadio>}
        control={<Radio />}
      />
    )
  })

  return (
    <S.MainInfo>
      <FormProvider {...useFormProps}>
        <S.Heading level={6}>Основная информация</S.Heading>

        <FormField label="Заголовок площадки" name="name" placeholder="Введите заголовок" />
        <FormField label="Адрес площадки" name="address" placeholder="Введите адрес" />

        <S.PlatformTypeRow>
          <S.Label>Тип площадки</S.Label>

          <S.PlatformTypeRadioGroup
            name="platformType"
            value={platformType}
            onChange={(_, value) => onPlatformTypeChange(value)}
          >
            {platformTypeRadios}
          </S.PlatformTypeRadioGroup>
        </S.PlatformTypeRow>
      </FormProvider>
    </S.MainInfo>
  )
}
