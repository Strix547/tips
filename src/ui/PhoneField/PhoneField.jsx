import { Controller, useFormContext } from 'react-hook-form'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as S from './PhoneField.styled'

export const PhoneField = ({
  name = 'phone',
  rules = { required: true, minLength: 11 },
  placeholder = '+7 (___) ___-__-__',
  country = 'ru',
  ...props
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const haveError = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <S.PhoneField haveError={haveError}>
            <S.Label>Номер телефона</S.Label>

            <PhoneInputLib
              {...field}
              {...props}
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
