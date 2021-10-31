import { Controller, useFormContext } from 'react-hook-form'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import * as S from './DatePicker.styled'

export const DatePicker = ({
  label,
  name,
  rules,
  required,
  onChange,
  defaultValue,
  placeholderText,
  maxDate,
  ...props
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <S.DatePicker error={error}>
          {label && <S.Label>{label}</S.Label>}

          <Picker
            {...props}
            placeholderText={placeholderText}
            maxDate={maxDate}
            defaultValue={defaultValue}
            selected={field.value}
            onChange={(value) => {
              if (onChange) {
                onChange(value)
              }

              field.onChange(value)
            }}
            onSelect={field.onChange}
          />
        </S.DatePicker>
      )}
    />
  )
}
