import { EmployeeAvatar, TipAmount } from 'components'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import * as S from './RecipientCardPreview.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const RecipientCardPreview = ({
  tipAmountPresets,
  haveRating,
  haveReviews,
  haveImpression,
  companyLogo,
  bgColor,
  buttonColor
}) => {
  const getColorDarker = (color) => {
    if (!color) return null
    const { r, g, b } = color
    return `rgba(${r}, ${g}, ${b}, 0.5)`
  }

  return (
    <S.RecipientCardPreview>
      <S.RecipientCard>
        <S.Top>
          <S.TopBackground color={getColorDarker(bgColor)} />
          <S.Text>Так выглядит ваша страница</S.Text>
        </S.Top>

        <S.RecipientCardTop>
          <EmployeeAvatar
            avatar={avatar}
            company={{ name: 'Фитнес Территория', logo: companyLogo?.src }}
            firstName="Алексей"
            lastName="Коновалов"
          />
        </S.RecipientCardTop>

        <S.RecipientCardMain>
          <TipAmount presets={tipAmountPresets} />

          {haveImpression && <ImpressionRow />}
          {haveRating && <RatingRow />}
          {haveReviews && <FeedbackTextarea />}

          <S.Button color={getColorDarker(buttonColor)}>Поблагодарить</S.Button>

          <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
        </S.RecipientCardMain>
      </S.RecipientCard>
    </S.RecipientCardPreview>
  )
}
