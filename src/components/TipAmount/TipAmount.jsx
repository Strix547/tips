import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { Radio } from '@material-ui/core'

import { FormField, RadioGroup, FormControlLabel } from 'ui'

import { localStore } from 'store'

import * as S from './TipAmount.styled'

export const TipAmount = observer(({ presets = [100, 149, 299] }) => {
  const useFormProps = useForm()
  const { watch, setValue } = useFormProps

  useEffect(() => {
    if (watch('preset')) {
      setValue('amount', watch('preset'))
    }
  }, [watch('preset')])

  const currency = localStore.currency.label
  const minPresetValue = Math.min(...presets)
  const maxPresetValue = Math.max(...presets)

  const baseAmountRadios = presets.map((value) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.BaseAmountRadio
            active={parseInt(watch('preset'), 10) === value}
            onClick={() => {
              setValue('amount', value)
            }}
          >
            {value} {currency}
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
          InputProps={{ endAdornment: currency }}
        />

        <RadioGroup name="preset">{baseAmountRadios}</RadioGroup>
      </FormProvider>
    </S.TipAmount>
  )
})
