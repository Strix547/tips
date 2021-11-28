import { useFormContext } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import { PLATFORM_TYPES } from 'core/constants'

import { FormField, FormControlLabel, RadioGroup } from 'ui'

import * as S from './MainInfo.styled'

export const MainInfo = () => {
  const { t } = useTranslation('common')
  const { watch } = useFormContext()

  const isOtherPlatformType = watch('platformType') === 'OTHER'

  const platformTypeRadios = PLATFORM_TYPES.map(({ label, value }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.PlatformTypeRadio active={watch('platformType') === value}>
            {t(label)}
          </S.PlatformTypeRadio>
        }
        control={<Radio />}
      />
    )
  })

  return (
    <S.MainInfo>
      <S.Heading level={6}>{t('main-info')}</S.Heading>

      <FormField label={t('platform-title')} name="name" placeholder={t('enter-title')} required />
      <FormField
        label={t('platform-address')}
        name="address"
        placeholder={t('enter-address')}
        required
      />

      <S.PlatformTypeRow>
        <S.Label>{t('platform-type')}</S.Label>

        <RadioGroup name="platformType">{platformTypeRadios}</RadioGroup>
      </S.PlatformTypeRow>

      {isOtherPlatformType && (
        <FormField name="platformTypeCustom" placeholder={t('enter-platform-type')} required />
      )}
    </S.MainInfo>
  )
}
