import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow } from 'common'
import { Button } from 'ui'

import { paymentStore } from 'store'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const PaymentCardIndividual = observer(() => {
  const { firstName, lastName, amountPresets, impressions, buttonColor } =
    paymentStore.individualData

  console.log(toJS(paymentStore.individualData))

  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <AvatarIndividual avatar={avatar} firstName={firstName} lastName={lastName} />
      </S.RecipientCardTop>

      <S.RecipientCardMain>
        <TipAmount presets={amountPresets} />

        {impressions && <ImpressionRow />}

        <Button color={buttonColor}>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
})
