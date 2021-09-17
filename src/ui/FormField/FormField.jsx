import { Controller, useFormContext } from 'react-hook-form'

import * as S from './FormField.styled'

export const FormField = ({ name, rules, required, defaultValue, InputProps, ...props }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const haveError = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        const { ref, value, onChange } = field

        return (
          <S.FormField
            {...props}
            haveError={haveError}
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
