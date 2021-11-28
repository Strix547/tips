import { useFormContext, Controller } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import { Switch, Button, FormField } from 'ui'

import { userStore } from 'store'

import * as S from './PaymentCardOptionsPanel.styled'

export const PaymentCardOptionsPanelIndividual = observer(({ action }) => {
  const { t } = useTranslation('common')
  const { control } = useFormContext()

  const currency = userStore.personalData.currency.symbol

  const tipAmountPresetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.FormField
            key={name}
            value={value}
            placeholder={t('tip-amount')}
            InputProps={{ endAdornment: currency }}
            onChange={({ target: { value } }) => {
              const numReg = /^\d+$/
              const isNumber = numReg.test(value)
              const isEmpty = value.length === 0
              const lessSixSymbols = value.length < 6

              if (isEmpty) return onChange(value)

              if (isNumber && lessSixSymbols) {
                return onChange(parseInt(value, 10))
              }
            }}
          />
        )
      }}
    />
  ))

  return (
    <S.PaymentCardOptionsPanelIndividual>
      <FormField name="name" label={t('qr-name')} placeholder={t('enter-name')} required />

      <S.AmountPresetsRow>
        <S.Label>{t('preset-tip-amounts')}</S.Label>

        <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
      </S.AmountPresetsRow>

      <S.Options>
        <Switch name="impression" label={t('impressions')} labelPlacement="start" size="big" />
      </S.Options>

      <Button type="submit">{action.label}</Button>
    </S.PaymentCardOptionsPanelIndividual>
  )
})
