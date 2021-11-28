import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { qrCodesStore, userStore } from 'store'

import * as S from './IndividualEdit.styled'

export const QrIndividualEditPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const useFormProps = useForm()

  const { watch, reset, getValues } = useFormProps

  const qrId = router.query.id
  const { qrCode, isQrCodeLoading } = qrCodesStore

  useEffect(() => {
    if (qrId) {
      qrCodesStore.getQrCodeIndividual(qrId)
    }
  }, [qrId])

  useEffect(() => {
    if (isQrCodeLoading) return

    const { name, amountPresets, impression } = qrCode

    reset({
      name,
      preset1: amountPresets[0],
      preset2: amountPresets[1],
      preset3: amountPresets[2],
      impression
    })
  }, [qrCode, isQrCodeLoading])

  const editQr = () => {
    const { name, preset1, preset2, preset3, impression } = getValues()

    qrCodesStore.changeQrCodeIndividual({
      id: qrId,
      name,
      amountPresets: [preset1, preset2, preset3],
      impression
    })
  }

  return (
    <>
      <Head>
        <title>{t('editing-qr-code-physical')}</title>
      </Head>

      <AccountLayout title={t('edit-qr-code')}>
        <S.Content>
          {!isQrCodeLoading ? (
            <FormProvider {...useFormProps}>
              <PaymentCardOptionsPanelIndividual
                action={{ label: t('edit-qr-code'), onClick: editQr }}
              />

              <RecipientCardPreview
                type="individual"
                firstName={userStore.personalData.firstName}
                lastName={userStore.personalData.lastName}
                amountPresets={[watch('preset1'), watch('preset2'), watch('preset3')]}
                impression={watch('impression')}
              />
            </FormProvider>
          ) : (
            <>
              <Skeleton height={698} />
              <Skeleton height={698} />
            </>
          )}
        </S.Content>
      </AccountLayout>
    </>
  )
})
