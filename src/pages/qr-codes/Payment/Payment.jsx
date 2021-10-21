import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PaymentCardIndividual, PlatformPaymentCard } from 'components'

import { paymentStore } from 'store'

import * as S from './Payment.styled'

export const QrPaymentPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      impression: '😊',
      rating: 5
    }
  })
  const { handleSubmit } = useFormProps

  const { paymentData, isPaymentDataLoading } = paymentStore
  const { name, firstName, lastName, type } = paymentData

  const isPlatformQr = type === 'BUSINESS'
  const qrId = router.query.id

  useEffect(() => {
    if (qrId) {
      paymentStore.getIndividualPaymentData(qrId)
    }
  }, [qrId])

  const onTipsPay = ({ tipAmount, impression, rating, comment }) => {
    if (isPlatformQr) {
      paymentStore.payTipsPlatform({ qrId, tipAmount, impression, rating, comment })
    } else {
      paymentStore.payTipsIndividual({ qrId, tipAmount, impression })
    }
  }

  if (isPaymentDataLoading) return null

  return (
    <>
      <Head>
        <title>
          Оплата чаевых {firstName} {lastName}
        </title>
      </Head>

      <S.RecipientCardContainer>
        <S.Heading level={5}>{name}</S.Heading>

        <form onSubmit={handleSubmit(onTipsPay)}>
          <FormProvider {...useFormProps}>
            {isPlatformQr ? <PlatformPaymentCard /> : <PaymentCardIndividual />}
          </FormProvider>
        </form>
      </S.RecipientCardContainer>
    </>
  )
})
