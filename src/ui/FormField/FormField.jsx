import { Controller, useFormContext } from 'react-hook-form'

import * as S from './FormField.styled'

export const FormField = ({ name, rules, defaultValue, InputProps, ...props }) => {
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
            onChange={onChange}
          />
        )
      }}
    />
  )
}
