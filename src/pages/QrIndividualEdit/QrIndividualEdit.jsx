import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { qrCodesStore } from 'store'

import * as S from './QrIndividualEdit.styled'

export const QrIndividualEditPage = () => {
  const onQrCodeEdit = ({
    id,
    name,
    preset1,
    preset2,
    preset3,
    impressions,
    bgColor,
    buttonColor
  }) => {
    qrCodesStore.changeQrCode({
      id,
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
}
