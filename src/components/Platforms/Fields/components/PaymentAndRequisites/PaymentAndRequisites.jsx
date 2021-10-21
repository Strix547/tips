import { BankAccountSelect } from 'ui'

import * as S from './PaymentAndRequisites.styled'

export const PaymentAndRequisites = () => {
  return (
    <S.PaymentAndRequisites>
      <S.Heading level={6}>Оплата и реквизиты</S.Heading>

      <BankAccountSelect />
    </S.PaymentAndRequisites>
  )
}
