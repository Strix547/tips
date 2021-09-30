import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { qrCodesStore, userStore } from 'store'

import * as S from './QrIndividualEdit.styled'

export const QrIndividualEditPage = observer(() => {
  const router = useRouter()

  const useFormProps = useForm({
    defaultValues: {
      impressions: qrCodesStore.qrCode.impressions
    }
  })

  const { watch, setValue, getValues } = useFormProps

  const qrId = router.query.id
  const { isQrCodesLoading } = qrCodesStore

  useEffect(async () => {
    if (qrId) {
      const { name, amountPresets, impressions } = await qrCodesStore.getQrCode(qrId)

      const fieldsTemplate = [
        { label: 'name', value: name },
        { label: 'preset1', value: amountPresets[0] },
        { label: 'preset2', value: amountPresets[1] },
        { label: 'preset3', value: amountPresets[2] },
        { label: 'impressions', value: impressions }
      ]

      fieldsTemplate.forEach(({ label, value }) => {
        setValue(label, value)
      })
    }
  }, [qrId])

  const editQr = () => {
    const { name, preset1, preset2, preset3, impressions, bgColor, buttonColor } = getValues()

    qrCodesStore.changeQrCode({
      id: qrId,
      name,
      amountPresets: [preset1, preset2, preset3],
      impressions,
      bgColor: bgColor.hex,
      buttonColor: buttonColor.hex
    })
  }

  return (
    <>
      <Head>
        <title>Редактирование QR-кода физ. лица</title>
      </Head>

      <AccountLayout title="Редактировать QR-код">
        <S.Content>
          {!isQrCodesLoading ? (
            <>
              <FormProvider {...useFormProps}>
                <PaymentCardOptionsPanelIndividual
                  action={{ label: 'Редактировать QR-код', onClick: editQr }}
                />
              </FormProvider>

              <RecipientCardPreview
                type="individual"
                firstName={userStore.personalData.firstName}
                lastName={userStore.personalData.lastName}
                amountPresets={[watch('preset1'), watch('preset2'), watch('preset3')]}
                impressions={watch('impressions')}
                bgColor={watch('bgColor')?.hex}
                buttonColor={watch('buttonColor')?.hex}
              />
            </>
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
