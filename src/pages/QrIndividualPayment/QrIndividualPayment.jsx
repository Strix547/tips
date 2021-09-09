import { AccountLayout } from 'layout'
import { IndividualTipsPayment } from 'components'

import * as S from './QrIndividualPayment.styled'

export const QrIndividualPaymentPage = () => {
  return (
    <AccountLayout title="QR 274920475">
      <S.RecipientCardContainer>
        <IndividualTipsPayment />
      </S.RecipientCardContainer>
    </AccountLayout>
  )
}
