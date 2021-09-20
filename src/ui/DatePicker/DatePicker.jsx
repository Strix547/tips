import { Controller, useFormContext } from 'react-hook-form'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import * as S from './DatePicker.styled'

export const DatePicker = ({ label, name, rules, required, defaultValue, ...props }) => {
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
      render={({ field: { value, onChange } }) => (
        <S.DatePicker haveError={haveError}>
          {label && <S.Label>{label}</S.Label>}

          <Picker
            {...props}
            defaultValue={defaultValue}
            selected={value}
            onChange={onChange}
            onSelect={onChange}
          />
        </S.DatePicker>
      )}
    />
  )
}
