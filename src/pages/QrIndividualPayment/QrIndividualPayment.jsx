import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PaymentCardIndividual } from 'components'

import { paymentStore } from 'store'

import * as S from './QrIndividualPayment.styled'

export const QrIndividualPaymentPage = () => {
  const router = useRouter()

  const qrId = router.query.id

  // useEffect(() => {
  //   paymentStore.getIndividualPaymentData(qrId)
  // }, [])

  return (
    <>
      <Head>
        <title>Оплата чаевых физ. лицу</title>
      </Head>

      <S.RecipientCardContainer>
        <S.Heading level={5}>QR {qrId}</S.Heading>
        <PaymentCardIndividual />
      </S.RecipientCardContainer>
    </>
  )
}
