import { Controller, useFormContext } from 'react-hook-form'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as S from './PhoneField.styled'

export const PhoneField = ({ name, rules, value, placeholder, country, ...props }) => {
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
            <S.Text>Номер телефона</S.Text>

            <PhoneInputLib
              {...field}
              {...props}
              mask={{ ru: '7(...) ...-..-..' }}
              country={country}
              value={value}
              placeholder={placeholder}
            />
          </S.PhoneField>
        )
      }}
    />
  )
}
