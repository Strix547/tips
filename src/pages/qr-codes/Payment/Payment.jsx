import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PaymentCardIndividual, PlatformPaymentCard } from 'components'

import { paymentStore, userStore } from 'store'

import * as S from './Payment.styled'

export const QrPaymentPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      impression: '😊'
    }
  })
  const { handleSubmit, reset } = useFormProps

  const { role } = userStore
  const { paymentData, isPaymentDataLoading } = paymentStore
  const { name, firstName, lastName } = paymentData
  const isPlatform = role === 'BUSINESS'
  const qrId = router.query.id

  useEffect(() => {
    if (qrId) {
      paymentStore.getIndividualPaymentData(qrId)
    }
  }, [qrId])

  useEffect(() => {
    if (isPaymentDataLoading) return

    const { amountPresets } = paymentData

    reset({
      preset1: amountPresets[0],
      preset2: amountPresets[1],
      preset3: amountPresets[2]
    })
  }, [paymentData, isPaymentDataLoading])

  const onTipsPay = ({ tipAmount, impression }) => {
    const payMethod = isPlatform ? paymentStore.payTipsPlatform : paymentStore.payTipsIndividual

    payMethod({
      qrId,
      tipAmount,
      impression
    })
  }

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
            {isPlatform ? <PlatformPaymentCard /> : <PaymentCardIndividual />}
          </FormProvider>
        </form>
      </S.RecipientCardContainer>
    </>
  )
})
