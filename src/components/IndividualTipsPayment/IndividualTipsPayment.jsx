import { IndividualAvatar, TipAmount, EmodjiSelect } from 'components'
import { Button } from 'ui'

import * as S from './IndividualTipsPayment.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const IndividualTipsPayment = () => {
  return (
    <S.IndividualTipsPayment>
      <S.Top>
        <IndividualAvatar avatar={avatar} firstName="Алексей" lastName="Коновалов" />
      </S.Top>

      <S.Main>
        <TipAmount />

        <EmodjiSelect title="Ваши впечатления" />

        <Button>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.Main>
    </S.IndividualTipsPayment>
  )
}
