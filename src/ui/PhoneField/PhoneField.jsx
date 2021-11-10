import { Controller, useFormContext } from 'react-hook-form'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as S from './PhoneField.styled'

export const PhoneField = ({
  name = 'phone',
  rules = { required: true, minLength: 11 },
  placeholder = '+7 (___) ___-__-__',
  country = 'ru',
  label = 'Номер телефона',
  onChange,
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
      rules={rules}
      render={({ field }) => {
        return (
          <S.PhoneField error={error}>
            <S.Label>{label}</S.Label>

            <PhoneInputLib
              {...field}
              {...props}
              onChange={(...props) => {
                field.onChange(...props)

                if (onChange) {
                  return onChange(...props)
                }
              }}
              name={name}
              country={country}
              placeholder={placeholder}
              mask={{ ru: '7(...) ...-..-..' }}
            />
          </S.PhoneField>
        )
      }}
    />
  )
}
