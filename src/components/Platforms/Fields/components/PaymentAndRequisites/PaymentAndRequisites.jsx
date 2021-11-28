import { useTranslation } from 'next-i18next'

import { BankAccountSelect } from 'ui'

import * as S from './PaymentAndRequisites.styled'

export const PaymentAndRequisites = () => {
  const { t } = useTranslation('common')

  return (
    <S.PaymentAndRequisites>
      <S.Heading level={6}>{t('payment-and-details')}</S.Heading>

      <BankAccountSelect />
    </S.PaymentAndRequisites>
  )
}
