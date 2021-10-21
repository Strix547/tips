import { observer } from 'mobx-react-lite'

import { PlatformAvatar, AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import { userStore } from 'store'

import * as S from './RecipientCardPreview.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const RecipientCardPreview = observer(
  ({
    type,
    firstName,
    lastName,
    amountPresets,
    impression,
    reviews,
    rating,
    bgColor,
    btnColor,
    company
  }) => {
    const avatarPreview = userStore.personalData.avatar || avatar

    return (
      <S.RecipientCardPreview>
        <S.RecipientCard>
          <S.Top>
            <S.TopBackground $color={bgColor} />
            <S.Text>Так выглядит ваша страница</S.Text>
          </S.Top>

          <S.RecipientCardTop>
            {type === 'individual' ? (
              <AvatarIndividual avatar={avatarPreview} firstName={firstName} lastName={lastName} />
            ) : (
              <PlatformAvatar
                avatar={avatar}
                company={company}
                firstName={firstName}
                lastName={lastName}
              />
            )}
          </S.RecipientCardTop>

          <S.RecipientCardMain>
            <TipAmount presets={amountPresets} />

            {impression && <ImpressionRow />}
            {rating && <RatingRow />}
            {reviews && <FeedbackTextarea />}

            <S.Button $color={btnColor}>Поблагодарить</S.Button>

            <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
          </S.RecipientCardMain>
        </S.RecipientCard>
      </S.RecipientCardPreview>
    )
  }
)
