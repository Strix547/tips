import { IndividualAvatar, TipAmount } from 'components'
import { Button } from 'ui'
import { ImpressionRow } from 'common'

import * as S from './IndividualTipsPayment.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const IndividualTipsPayment = () => {
  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <IndividualAvatar avatar={avatar} firstName="Алексей" lastName="Коновалов" />
      </S.RecipientCardTop>

      <S.RecipientCardMain>
        <TipAmount />

        <ImpressionRow />

        <Button>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
}
