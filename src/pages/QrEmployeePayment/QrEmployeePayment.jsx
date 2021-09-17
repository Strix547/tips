import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardBusiness } from 'components'

import * as S from './QrEmployeePayment.styled'

export const QrEmployeePaymentPage = () => {
  return (
    <>
      <Head>
        <title>Оплата чаевых физ. лицу</title>
      </Head>

      <AccountLayout title="QR 274920475">
        <S.RecipientCardContainer>
          <PaymentCardBusiness />
        </S.RecipientCardContainer>
      </AccountLayout>
    </>
  )
}
