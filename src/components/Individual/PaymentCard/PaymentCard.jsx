import { AvatarIndividual, TipAmount } from 'components'
import { Button } from 'ui'
import { ImpressionRow } from 'common'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const PaymentCardIndividual = () => {
  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <AvatarIndividual avatar={avatar} firstName="Алексей" lastName="Коновалов" />
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
