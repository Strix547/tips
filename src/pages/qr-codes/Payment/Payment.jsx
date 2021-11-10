import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { IndividualPaymentCard, PlatformPaymentCard } from 'components'
import { CircularProgress } from 'ui'

import { paymentStore } from 'store'
import { getTextColorBgBased, convertHexToRgb, changeColorLuminosity } from 'utils'

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
  const { name, firstName, lastName, type, bgColor } = paymentData

  const isPlatformQr = type === 'BUSINESS'
  const qrId = router.query.id
  const bgColorDarker = bgColor && changeColorLuminosity(bgColor, -0.15)
  const bgColorText = bgColorDarker && getTextColorBgBased(convertHexToRgb(bgColorDarker))

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

  if (isPaymentDataLoading)
    return (
      <>
        <Head>
          <title>
            Оплата чаевых {firstName} {lastName}
          </title>
        </Head>

        <S.LoadingScreen>
          <CircularProgress size={80} />
        </S.LoadingScreen>
      </>
    )

  return (
    <>
      <Head>
        <title>
          Оплата чаевых {firstName} {lastName}
        </title>
      </Head>

      <S.RecipientCardContainer bgColor={bgColorDarker}>
        <S.Heading level={5} $color={bgColorText}>
          {name}
        </S.Heading>

        <form onSubmit={handleSubmit(onTipsPay)}>
          <FormProvider {...useFormProps}>
            {isPlatformQr ? <PlatformPaymentCard /> : <IndividualPaymentCard />}
          </FormProvider>
        </form>
      </S.RecipientCardContainer>
    </>
  )
})
