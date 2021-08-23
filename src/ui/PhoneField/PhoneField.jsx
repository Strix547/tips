import { Controller, useFormContext } from 'react-hook-form'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as S from './PhoneField.styled'

export const PhoneField = ({ name, rules, value, placeholder, country }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <S.PhoneField>
            <S.Text>Номер телефона</S.Text>
            <PhoneInputLib
              {...field}
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
