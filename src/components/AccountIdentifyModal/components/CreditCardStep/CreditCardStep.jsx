import Link from 'next/link'
import { Checkbox, FormField, LocationSearch } from 'ui'

import * as S from './CreditCardStep.styled'

export const CreditCardStep = ({ useFormProps }) => {
  const ibanOptions = {
    supportedCountries: ['SEPA'],
    style: {
      base: {
        padding: 20
      }
    }
  }

  return (
    <S.CreditCardStep>
      <S.FieldsLabel>Заполните поля:</S.FieldsLabel>

      <LocationSearch useFormProps={useFormProps} />

      <FormField name="address" label="Адрес" placeholder="Введите адрес" required />

      <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" required />

      <S.IbanContainer>
        <S.Label>IBAN</S.Label>
        <S.Iban options={ibanOptions} />
      </S.IbanContainer>

      <S.Agreement>
        <Checkbox rules={{ required: true }} name="agreement" />

        <S.Text>Соглашаюсь с </S.Text>

        <Link href="https://stripe.com/connect-account/legal/recipient">
          <a>политикой stripe</a>
        </Link>
      </S.Agreement>
    </S.CreditCardStep>
  )
}
