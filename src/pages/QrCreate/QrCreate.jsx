import { useState } from 'react'
import throttle from 'lodash.throttle'

import { AccountLayout } from 'layout'
import { QrOptionsPanel, QrPreview } from './components'

import * as S from './QrCreate.styled'

export const QrCreatePage = () => {
  const [qrOptions, setQrOptions] = useState({
    preset1: null,
    preset2: null,
    preset3: null,
    rating: false,
    reviews: false,
    impressions: false,
    bgColor: '#ffffff',
    logo: null,
    buttonColor: '#3BC76B'
  })

  console.log(qrOptions)

  return (
    <AccountLayout title="Создать QR-код">
      <S.Content>
        <QrOptionsPanel options={qrOptions} onOptionsChange={setQrOptions} />

        <QrPreview options={qrOptions} />
      </S.Content>
    </AccountLayout>
  )
}
