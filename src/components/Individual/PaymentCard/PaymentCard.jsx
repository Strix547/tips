import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import { AvatarIndividual, TipAmount } from 'components'
import { ImpressionRow } from 'common'
import { Button } from 'ui'

import { paymentStore } from 'store'

import * as S from './PaymentCard.styled'

import avatar from '@public/img/placeholders/avatar.png'

export const IndividualPaymentCard = observer(({ currency }) => {
  const { t } = useTranslation('common')

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

        <Button>{t('pay')}</Button>

        <S.Text>{t('flytips-service-for')}</S.Text>
      </S.RecipientCardMain>
    </S.RecipientCard>
  )
})
