import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelBusiness, RecipientCardPreview } from 'components'

import * as S from './QrBusinessCreate.styled'

export const QrBusinessCreatePage = () => {
  return (
    <>
      <Head>
        <title>Создание QR-кода физ. лица</title>
      </Head>

      <AccountLayout title="Создать QR-код">
        <S.Content>
          <PaymentCardOptionsPanelBusiness />
          <RecipientCardPreview type="business" />
        </S.Content>
      </AccountLayout>
    </>
  )
}
