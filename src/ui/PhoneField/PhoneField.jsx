import { Controller, useFormContext } from 'react-hook-form'
import PhoneInputLib from 'react-phone-input-2'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import 'react-phone-input-2/lib/style.css'

import * as S from './PhoneField.styled'

export const PhoneField = ({
  name = 'phone',
  rules = { required: true, minLength: 11 },
  label,
  onChange,
  ...props
}) => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error = Object.keys(errors).some((inputName) => inputName === name)

  const getCountryLocale = (locale) => {
    switch (locale) {
      case 'en':
        return 'gb'
      case 'ru':
        return 'ru'
      case 'fr':
        return 'fr'
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <S.PhoneField error={error}>
            <S.Label>{label || t('phone')}</S.Label>

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
              country={getCountryLocale(locale)}
            />
          </S.PhoneField>
        )
      }}
    />
  )
}
