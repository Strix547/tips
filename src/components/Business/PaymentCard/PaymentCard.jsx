import { AvatarBusiness, TipAmount } from 'components'
import { Button } from 'ui'
import { ImpressionRow, RatingRow, FeedbackTextarea } from 'common'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'
import companyLogo from '@public/img/placeholders/company-logo.png'

export const PaymentCardBusiness = () => {
  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <AvatarBusiness
          avatar={avatar}
          company={{ name: 'Фитнес Территория', logo: companyLogo }}
          firstName="Алексей"
          lastName="Коновалов"
        />
      </S.RecipientCardTop>

      <S.RecipientCardMain>
        <TipAmount />

        <ImpressionRow />

        <RatingRow />

        <FeedbackTextarea />

        <Button>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
}
