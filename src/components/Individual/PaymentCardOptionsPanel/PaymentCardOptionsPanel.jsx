import { useFormContext, Controller } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import { Switch, Button, FormField } from 'ui'

import { localStore } from 'store'

import * as S from './PaymentCardOptionsPanel.styled'

export const PaymentCardOptionsPanelIndividual = observer(({ action }) => {
  const { control } = useFormContext()

  const currency = localStore.currency.label

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
            placeholder="Сумма"
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
      <FormField name="name" label="Название" placeholder="Введите название" required />

      <S.AmountPresetsRow>
        <S.Label>Предустановленные суммы чаевых</S.Label>

        <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
      </S.AmountPresetsRow>

      <S.Options>
        <Switch name="impression" label="Впечатления" labelPlacement="start" size="big" />
      </S.Options>

      <Button onClick={action.onClick}>{action.label}</Button>
    </S.PaymentCardOptionsPanelIndividual>
  )
})
