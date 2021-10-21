import { useFormContext } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { PLATFORM_TYPES } from 'core/constants'

import { FormField, FormControlLabel, RadioGroup } from 'ui'

import * as S from './MainInfo.styled'

export const MainInfo = () => {
  const { watch } = useFormContext()

  const isOtherPlatformType = watch('platformType') === 'OTHER'

  const platformTypeRadios = PLATFORM_TYPES.map(({ label, value }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.PlatformTypeRadio active={watch('platformType') === value}>
            {label}
          </S.PlatformTypeRadio>
        }
        control={<Radio />}
      />
    )
  })

  return (
    <S.MainInfo>
      <S.Heading level={6}>Основная информация</S.Heading>

      <FormField label="Заголовок площадки" name="name" placeholder="Введите заголовок" required />
      <FormField label="Адрес площадки" name="address" placeholder="Введите адрес" required />

      <S.PlatformTypeRow>
        <S.Label>Тип площадки</S.Label>

        <RadioGroup name="platformType">{platformTypeRadios}</RadioGroup>
      </S.PlatformTypeRow>

      {isOtherPlatformType && (
        <FormField name="platformTypeCustom" placeholder="Введите тип площадки" required />
      )}
    </S.MainInfo>
  )
}
