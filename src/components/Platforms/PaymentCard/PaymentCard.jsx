import { observer } from 'mobx-react-lite'

import { PlatformAvatar, TipAmount } from 'components'
import { Button } from 'ui'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import { paymentStore } from 'store'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const PlatformPaymentCard = observer(() => {
  const { name, firstName, lastName, amountPresets, impression, comment, rating, logo } =
    paymentStore.paymentData

  const avatarPreview = paymentStore.paymentData.avatar || avatar

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

        <Button type="submit">Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
})
