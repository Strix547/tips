import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { qrCodesStore } from 'store'

import * as S from './QrIndividualEdit.styled'

export const QrIndividualEditPage = observer(() => {
  const router = useRouter()
  const qrId = router.query.id

  useEffect(() => {
    if (qrId) {
      qrCodesStore.getQrCode(qrId)
    }
  }, [qrId])

  const onQrCodeEdit = ({ name, preset1, preset2, preset3, impressions, bgColor, buttonColor }) => {
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
          <PaymentCardOptionsPanelIndividual
            action={{ label: 'Редактировать QR-код', onClick: onQrCodeEdit }}
          />

          <RecipientCardPreview type="individual" />
        </S.Content>
      </AccountLayout>
    </>
  )
})
