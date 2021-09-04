import { Controller, useFormContext } from 'react-hook-form'

import * as S from './FormField.styled'

export const FormField = ({ name, rules, defaultValue, InputProps, onlyNumbers, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        const { ref, value, onChange } = field

        return (
          <S.FormField
            {...props}
            InputProps={{
              inputProps: { maxLength: 255 },
              inputRef: ref,
              ...InputProps
            }}
            value={value}
            onChange={(e) => {
              if (!onlyNumbers) return onChange(e)
              const { value } = e.target

              return value.length === 0 || !Number.isNaN(parseInt(value, 10)) ? onChange(e) : null
            }}
          />
        )
      }}
    />
  )
}
