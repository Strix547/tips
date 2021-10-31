import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Rating.styled'

export const Rating = ({ name, rules, required }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.Rating
            value={value}
            onChange={(_, value) => {
              if (!value) return
              onChange(value)
            }}
          />
        )
      }}
    />
  )
}
