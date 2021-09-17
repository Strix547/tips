import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { userStore, qrCodesStore } from 'store'

import * as S from './QrIndividualCreate.styled'

export const QrIndividualCreatePage = () => {
  const userId = userStore.id

  const onCreateQrCode = ({
    name,
    preset1,
    preset2,
    preset3,
    impressions,
    bgColor,
    buttonColor
  }) => {
    qrCodesStore.createQrCode({
      userId,
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
        <title>Создание QR-кода физ. лица</title>
      </Head>

      <AccountLayout title="Создать QR-код">
        <S.Content>
          <PaymentCardOptionsPanelIndividual
            action={{ label: 'Создать QR-код', onClick: onCreateQrCode }}
          />
          <RecipientCardPreview type="individual" />
        </S.Content>
      </AccountLayout>
    </>
  )
}
