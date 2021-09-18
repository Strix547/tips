import { useEffect } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'

import { Switch, Button, ColorPickerField, FormField } from 'ui'

import { localStore, qrCodesStore } from 'store'

import * as S from './PaymentCardOptionsPanel.styled'

export const PaymentCardOptionsPanelIndividual = ({ action }) => {
  const useFormProps = useForm()

  const { name, preset1, preset2, preset3, impressions, bgColor, buttonColor } =
    useFormProps.watch()
  const currencyLabel = localStore.currency.label

  useEffect(() => {
    qrCodesStore.setQrCode({
      name,
      amountPresets: [preset1, preset2, preset3],
      impressions,
      bgColor,
      buttonColor
    })
  }, [name, preset1, preset2, preset3, impressions, bgColor, buttonColor])

  const tipAmountPresetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
    <Controller
      control={useFormProps.control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.FormField
            value={value}
            placeholder="Сумма"
            InputProps={{ endAdornment: currencyLabel }}
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

  const onActionClick = () => {
    action.onClick({
      name,
      preset1,
      preset2,
      preset3,
      impressions,
      bgColor,
      buttonColor
    })
  }

  return (
    <S.PaymentCardOptionsPanelIndividual>
      <FormProvider {...useFormProps}>
        <FormField label="Название" name="name" placeholder="Введите название" required />

        <S.AmountPresetsRow>
          <S.Label>Предустановленные суммы чаевых</S.Label>

          <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
        </S.AmountPresetsRow>

        <S.Options>
          <S.Label>Впечатления</S.Label>
          <Switch name="impressions" size="big" />
        </S.Options>

        <ColorPickerField name="bgColor" defaultValue="#fff" label="Код цвета для подложки" />

        <ColorPickerField name="buttonColor" defaultValue="#3bc76b" label="Код цвета для кнопки" />

        <Button onClick={onActionClick}>{action.label}</Button>
      </FormProvider>
    </S.PaymentCardOptionsPanelIndividual>
  )
}
