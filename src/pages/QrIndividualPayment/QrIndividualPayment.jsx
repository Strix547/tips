import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PaymentCardIndividual } from 'components'

import { paymentStore } from 'store'

import * as S from './QrIndividualPayment.styled'

export const QrIndividualPaymentPage = observer(() => {
  const router = useRouter()
  const { name, firstName, lastName } = paymentStore.individualData

  const qrId = router.query.id

  useEffect(() => {
    if (qrId) {
      paymentStore.getIndividualPaymentData(qrId)
    }
  }, [qrId])

  return (
    <>
      <Head>
        <title>
          Оплата чаевых {firstName} {lastName}
        </title>
      </Head>

      <S.RecipientCardContainer>
        <S.Heading level={5}>{name}</S.Heading>

        <PaymentCardIndividual />
      </S.RecipientCardContainer>
    </>
  )
})
