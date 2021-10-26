import { observer } from 'mobx-react-lite'

import { PlatformAvatar, TipAmount } from 'components'
import { Button } from 'ui'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import { paymentStore } from 'store'
import { getTextColorBgBased, changeColorLuminosity, convertHexToRgb } from 'utils'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const PlatformPaymentCard = observer(() => {
  const { name, firstName, lastName, amountPresets, impression, comment, rating, logo, btnColor } =
    paymentStore.paymentData

  const avatarPreview = paymentStore.paymentData.avatar || avatar
  const btnColorText = btnColor && getTextColorBgBased(convertHexToRgb(btnColor))

  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <PlatformAvatar
          avatar={avatarPreview}
          company={{ name, logo }}
          firstName={firstName}
          lastName={lastName}
        />
      </S.RecipientCardTop>

      <S.RecipientCardMain>
        <TipAmount presets={amountPresets} />

        {impression && <ImpressionRow />}

        {rating && <RatingRow />}

        {comment && <FeedbackTextarea />}

        <S.Button
          type="submit"
          bgColor={changeColorLuminosity(btnColor, -0.15)}
          textColor={btnColorText}
        >
          Заплатить
        </S.Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
})
