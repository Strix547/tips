import Link from 'next/link'
import { Checkbox } from 'ui'

import * as S from './CreditCardStep.styled'

export const CreditCardStep = () => {
  // const stripe = useStripe()
  // const elements = useElements()

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
      <S.FieldsLabel>Введите данные вашей карты:</S.FieldsLabel>

      <S.Iban
        options={ibanOptions}
        onChange={(e) => {
          console.log(e, e.target, e.target.value)
        }}
      />

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
