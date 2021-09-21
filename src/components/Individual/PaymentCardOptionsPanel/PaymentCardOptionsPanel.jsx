import { useFormContext, Controller } from 'react-hook-form'

import { Switch, Button, FormField } from 'ui'

import { CURRENCIES } from 'core/constants'

import * as S from './PaymentCardOptionsPanel.styled'

export const PaymentCardOptionsPanelIndividual = ({ action }) => {
  const { control } = useFormContext()

  const currencySymbol = CURRENCIES.find(({ value }) => value === 'EUR').symbol

  const tipAmountPresetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.FormField
            value={value}
            placeholder="Сумма"
            InputProps={{ endAdornment: currencySymbol }}
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
      <FormField label="Название" name="name" placeholder="Введите название" required />

      <S.AmountPresetsRow>
        <S.Label>Предустановленные суммы чаевых</S.Label>

        <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
      </S.AmountPresetsRow>

      <S.Options>
        <S.Label>Впечатления</S.Label>
        <Switch name="impressions" size="big" />
      </S.Options>

      {/* <ColorPickerField name="bgColor" label="Код цвета для подложки" />

      <ColorPickerField name="buttonColor" label="Код цвета для кнопки" /> */}

      <Button onClick={action.onClick}>{action.label}</Button>
    </S.PaymentCardOptionsPanelIndividual>
  )
}
