import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import { FormField, RadioGroup, FormControlLabel } from 'ui'

import * as S from './TipAmount.styled'

export const TipAmount = ({ currency, presets, required = true }) => {
  const { t } = useTranslation('common')
  const useFormProps = useFormContext()
  const { watch, setValue, clearErrors } = useFormProps

  useEffect(() => {
    if (watch('preset')) {
      setValue('tipAmount', watch('preset'))
      clearErrors('tipAmount')
    }
  }, [watch('preset')])

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
        label={t('tip-amount')}
        name="tipAmount"
        type="number"
        placeholder={`От ${minPresetValue} до ${maxPresetValue}`}
        InputProps={{ endAdornment: currency }}
        required={required}
      />

      <RadioGroup name="preset">{baseAmountRadios}</RadioGroup>
    </S.TipAmount>
  )
}
