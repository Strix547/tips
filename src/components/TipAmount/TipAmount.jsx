import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { Radio } from '@material-ui/core'

import { FormField, RadioGroup, FormControlLabel } from 'ui'

import { localStore } from 'store'

import * as S from './TipAmount.styled'

export const TipAmount = observer(({ presets }) => {
  const useFormProps = useFormContext()
  const { watch, setValue, clearErrors } = useFormProps

  useEffect(() => {
    if (watch('preset')) {
      setValue('tipAmount', watch('preset'))
      clearErrors('tipAmount')
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
              setValue('tipAmount', value)
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
      <FormField
        label="Сумма чаевых"
        name="tipAmount"
        placeholder={`От ${minPresetValue} до ${maxPresetValue}`}
        InputProps={{ endAdornment: currency }}
        required
      />

      <RadioGroup name="preset">{baseAmountRadios}</RadioGroup>
    </S.TipAmount>
  )
})
