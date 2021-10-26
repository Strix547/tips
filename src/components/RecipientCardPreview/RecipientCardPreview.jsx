import { observer } from 'mobx-react-lite'

import { PlatformAvatar, AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import { userStore } from 'store'
import { convertHexToRgb, changeColorLuminosity, getTextColorBgBased } from 'utils'

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

    const bgColorText = bgColor && getTextColorBgBased(convertHexToRgb(bgColor))
    const btnColorText = btnColor && getTextColorBgBased(convertHexToRgb(btnColor))

    const bgColorDarker = bgColor && changeColorLuminosity(bgColor, -0.15)
    const btnColorDarker = btnColor && changeColorLuminosity(btnColor, -0.15)

    return (
      <S.RecipientCardPreview>
        <S.RecipientCard>
          <S.Top>
            <S.TopBackground $color={bgColorDarker} />
            <S.Text style={{ color: bgColorText }}>Так выглядит ваша страница</S.Text>
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
            <TipAmount presets={amountPresets} required={false} />

            {impression && <ImpressionRow />}
            {rating && <RatingRow />}
            {reviews && <FeedbackTextarea />}

            <S.Button bgColor={btnColorDarker} textColor={btnColorText}>
              Поблагодарить
            </S.Button>

            <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
          </S.RecipientCardMain>
        </S.RecipientCard>
      </S.RecipientCardPreview>
    )
  }
)
