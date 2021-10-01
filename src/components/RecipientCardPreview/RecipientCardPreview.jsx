import { observer } from 'mobx-react-lite'

import { AvatarBusiness, AvatarIndividual, TipAmount } from 'components'
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
    impressions,
    reviews,
    rating,
    bgColor,
    buttonColor,
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
              <AvatarBusiness
                avatar={avatar}
                company={{ name: company.name, logo: company.logo }}
                firstName={firstName}
                lastName={lastName}
              />
            )}
          </S.RecipientCardTop>

          <S.RecipientCardMain>
            <TipAmount presets={amountPresets} />

            {impressions && <ImpressionRow />}
            {rating && <RatingRow />}
            {reviews && <FeedbackTextarea />}

            <S.Button $color={buttonColor}>Поблагодарить</S.Button>

            <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
          </S.RecipientCardMain>
        </S.RecipientCard>
      </S.RecipientCardPreview>
    )
  }
)
