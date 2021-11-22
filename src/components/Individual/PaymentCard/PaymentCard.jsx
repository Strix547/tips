import { observer } from 'mobx-react-lite'

import { AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow } from 'common'
import { Button } from 'ui'

import { paymentStore } from 'store'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const IndividualPaymentCard = observer(({ currency }) => {
  const { firstName, lastName, amountPresets, impression } = paymentStore.paymentData

  const avatarPreview = paymentStore.paymentData.avatar || avatar

  return (
    <S.RecipientCard>
      <S.RecipientCardTop>
        <AvatarIndividual avatar={avatarPreview} firstName={firstName} lastName={lastName} />
      </S.RecipientCardTop>

      <S.RecipientCardMain>
        <TipAmount currency={currency} presets={amountPresets} />

        {impression && <ImpressionRow />}

        <Button>Заплатить</Button>

        <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
})
