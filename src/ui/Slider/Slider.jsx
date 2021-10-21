import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Slider.styled'

export const Slider = ({ name, rules, value, defaultValue, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange } }) => {
        return (
          <S.Slider
            {...props}
            value={value}
            onChangeCommitted={(_, value) => {
              onChange(value)
            }}
          />
        )
      }}
    />
  )
}
