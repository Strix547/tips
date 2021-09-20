import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { FormField, RadioGroup, FormControlLabel } from 'ui'

import { localStore } from 'store'

import * as S from './TipAmount.styled'

export const TipAmount = ({ presets = [100, 149, 299] }) => {
  const useFormProps = useForm()

  const presetSelected = useFormProps.watch('preset')

  const currencyLabel = localStore.currency.label
  const minPresetValue = Math.min(...presets)
  const maxPresetValue = Math.max(...presets)

  const baseAmountRadios = presets.map((value) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.BaseAmountRadio active={parseInt(presetSelected, 10) === value}>
            {value} {currencyLabel}
          </S.BaseAmountRadio>
        }
        control={<Radio />}
      />
    )
  })

  return (
    <S.TipAmount>
      <FormProvider {...useFormProps}>
        <FormField
          label="Сумма чаевых"
          name="amount"
          placeholder={`От ${minPresetValue} до ${maxPresetValue}`}
          InputProps={{ endAdornment: currencyLabel }}
        />

        <RadioGroup name="preset">{baseAmountRadios}</RadioGroup>
      </FormProvider>
    </S.TipAmount>
  )
}
