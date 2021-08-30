import { EmployeeAvatar, TipAmount, EmodjiSelect } from 'components'
import { Button, Rating } from 'ui'
import { FeedbackTextarea } from './components'

import * as S from './EmployeeTipsPayment.styled'

import avatar from '@public/img/placeholders/avatar.png'
import companyLogo from '@public/img/placeholders/company-logo.png'

export const EmployeeTipsPayment = () => {
  return (
    <S.EmployeeTipsPayment>
      <S.Top>
        <EmployeeAvatar
          avatar={avatar}
          company={{ name: 'Фитнес Территория', logo: companyLogo }}
          firstName="Алексей"
          lastName="Коновалов"
        />
      </S.Top>

      <S.Main>
        <TipAmount />

        <EmodjiSelect title="Ваши впечатления" />

        <S.RatingRow>
          <S.Text>Рейтинг</S.Text>

          <S.RatingContainer>
            <Rating />
          </S.RatingContainer>
        </S.RatingRow>

        <FeedbackTextarea />

        <Button>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.Main>
    </S.EmployeeTipsPayment>
  )
}
