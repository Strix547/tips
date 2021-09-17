import { observer } from 'mobx-react-lite'

import { AvatarBusiness, AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import { qrCodesStore, userStore } from 'store'

import * as S from './RecipientCardPreview.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const RecipientCardPreview = observer(({ type }) => {
  const { company, amountPresets, impressions, reviews, rating, bgColor, buttonColor } =
    qrCodesStore.qrTemplate
  const { firstName, lastName } = userStore.personalData

  const getColorDarker = (color) => {
    if (!color) return null
    const { r, g, b } = color.rgb
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
          {type === 'individual' ? (
            <AvatarIndividual avatar={avatar} firstName={firstName} lastName={lastName} />
          ) : (
            <AvatarBusiness
              avatar={avatar}
              company={{ name: company.name, logo: company.logo }}
              firstName="Алексей"
              lastName="Коновалов"
            />
          )}
        </S.RecipientCardTop>

        <S.RecipientCardMain>
          <TipAmount presets={amountPresets} />

          {impressions && <ImpressionRow />}
          {rating && <RatingRow />}
          {reviews && <FeedbackTextarea />}

          <S.Button color={getColorDarker(buttonColor)}>Поблагодарить</S.Button>

          <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
        </S.RecipientCardMain>
      </S.RecipientCard>
    </S.RecipientCardPreview>
  )
})
