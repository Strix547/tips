import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { IndividualPaymentCard, PlatformPaymentCard } from 'components'
import { CircularProgress } from 'ui'

import { paymentStore } from 'store'
import {
  getTextColorBgBased,
  convertHexToRgb,
  changeColorLuminosity,
  getCurrencySymbol
} from 'utils'

import * as S from './Payment.styled'

export const QrPaymentPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const useFormProps = useForm({
    defaultValues: {
      impression: '😊',
      rating: 5
    }
  })

  const qrId = router.query.id

  const { handleSubmit } = useFormProps
  const { paymentData, isPaymentDataLoading } = paymentStore
  const { name, firstName, lastName, type, bgColor, currency } = paymentData || {}

  const isPlatformQr = type === 'BUSINESS'
  const bgColorDarker = bgColor && changeColorLuminosity(bgColor, -0.15)
  const bgColorText = bgColorDarker && getTextColorBgBased(convertHexToRgb(bgColorDarker))
  const currencySymbol = getCurrencySymbol(currency)

  useEffect(() => {
    if (qrId) {
      paymentStore.getIndividualPaymentData(qrId)
    }
  }, [qrId])

  const onTipsPay = ({ tipAmount, impression, rating, comment }) => {
    if (isPlatformQr) {
      paymentStore.payTipsPlatform({
        qrId,
        tipAmount: parseFloat(tipAmount),
        impression,
        rating,
        comment
      })
    } else {
      paymentStore.payTipsIndividual({ qrId, tipAmount: parseFloat(tipAmount), impression })
    }
  }

  if (isPaymentDataLoading)
    return (
      <>
        <Head>
          <title>
            {t('payment-tips')} {firstName} {lastName}
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
          {t('payment-tips')} {firstName} {lastName}
        </title>
      </Head>

      <S.RecipientCardContainer bgColor={bgColorDarker}>
        <S.Heading level={5} $color={bgColorText}>
          {name}
        </S.Heading>

        <form onSubmit={handleSubmit(onTipsPay)}>
          <FormProvider {...useFormProps}>
            {isPlatformQr ? (
              <PlatformPaymentCard currency={currencySymbol} />
            ) : (
              <IndividualPaymentCard currency={currencySymbol} />
            )}
          </FormProvider>
        </form>
      </S.RecipientCardContainer>
    </>
  )
})
