import { useState, useCallback } from 'react'
import throttle from 'lodash.throttle'

import { AccountLayout } from 'layout'
import { RecipientCardOptionsPanel, RecipientCardPreview } from 'components'

import * as S from './QrCreate.styled'

export const QrCreatePage = () => {
  const [qrOptions, setQrOptions] = useState({
    preset1: 100,
    preset2: 149,
    preset3: 299,
    rating: false,
    reviews: false,
    impressions: false,
    bgColor: null,
    buttonColor: null
  })
  const [companyLogo, setCompanyLogo] = useState(null)

  const { preset1, preset2, preset3, rating, reviews, impressions, bgColor, buttonColor } =
    qrOptions

  const createQr = () => {}

  console.log(qrOptions, companyLogo)

  return (
    <AccountLayout title="Создать QR-код">
      <S.Content>
        <RecipientCardOptionsPanel
          companyLogo={companyLogo}
          options={qrOptions}
          onOptionsChange={setQrOptions}
          onCompanyLogoChange={(logo) => setCompanyLogo(logo)}
          onCreateQr={createQr}
        />

        <RecipientCardPreview
          tipAmountPresets={[preset1, preset2, preset3]}
          haveRating={rating}
          haveReviews={reviews}
          haveImpression={impressions}
          companyLogo={companyLogo}
          bgColor={bgColor?.rgb}
          buttonColor={buttonColor?.rgb}
        />
      </S.Content>
    </AccountLayout>
  )
}
