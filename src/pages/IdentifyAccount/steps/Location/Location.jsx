import Link from 'next/link'

import { Checkbox, FormField, LocationSearch } from 'ui'

import * as S from './Location.styled'

export const LocationStep = ({ stripePromise }) => {
  const ibanOptions = {
    supportedCountries: ['SEPA'],
    style: {
      base: {
        padding: 20
      }
    }
  }

  return (
    <S.LocationStep>
      <S.FieldsLabel>Заполните поля:</S.FieldsLabel>

      <LocationSearch />

      <FormField name="address" label="Адрес" placeholder="Введите адрес" required />

      <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" required />

      {stripePromise && (
        <S.IbanContainer>
          <S.Label>IBAN</S.Label>
          <S.Iban options={ibanOptions} />
        </S.IbanContainer>
      )}

      <S.Agreement>
        <Checkbox rules={{ required: true }} name="agreement" />

        <S.Text>Соглашаюсь с </S.Text>

        <Link href="https://stripe.com/connect-account/legal/recipient">
          <a>политикой stripe</a>
        </Link>
      </S.Agreement>
    </S.LocationStep>
  )
}
