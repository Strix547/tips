import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { FormField, FormControlLabel } from 'ui'

import * as S from './TipAmount.styled'

export const TipAmount = ({ onChange }) => {
  const useFormProps = useForm()
  const [baseAmount, setBaseAmount] = useState(149)
  const currency = '₽'

  const baseAmounts = [100, 149, 299]

  const onBaseAmountChange = (value) => {
    setBaseAmount(parseInt(value, 10))
    // onChange(value)
  }

  const baseAmountRadios = baseAmounts.map((value) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={
          <S.BaseAmountRadio active={baseAmount === value}>
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
          placeholder="От 100 до 600"
          InputProps={{ endAdornment: currency }}
        />

        <S.BaseAmountRadioGroup
          name="emodji"
          value={baseAmount}
          onChange={(_, value) => onBaseAmountChange(value)}
        >
          {baseAmountRadios}
        </S.BaseAmountRadioGroup>
      </FormProvider>
    </S.TipAmount>
  )
}
