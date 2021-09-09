import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { FormField, FormControlLabel } from 'ui'

import * as S from './TipAmount.styled'

export const TipAmount = ({ presets = [100, 149, 299], onChange }) => {
  const useFormProps = useForm()
  const [selectedPreset, setSelectedPreset] = useState(presets[0])
  const currency = '₽'
  const minPresetValue = Math.min(...presets)
  const maxPresetValue = Math.max(...presets)

  const onBaseAmountChange = (value) => {
    setSelectedPreset(parseInt(value, 10))
    // onChange(value)
  }

  const baseAmountRadios = presets.map((value) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.BaseAmountRadio active={selectedPreset === value}>
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

        <S.BaseAmountRadioGroup
          name="emodji"
          value={selectedPreset}
          onChange={(_, value) => onBaseAmountChange(value)}
        >
          {baseAmountRadios}
        </S.BaseAmountRadioGroup>
      </FormProvider>
    </S.TipAmount>
  )
}
