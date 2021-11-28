import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import { Checkbox } from 'ui'

import * as S from './AccountType.styled'

export const AccountTypeStep = () => {
  const { t } = useTranslation('common')
  const { formState } = useFormContext()

  return (
    <S.AccountTypeStep>
      <S.FieldsLabel>{t('choose-your-type')}:</S.FieldsLabel>

      <Checkbox name="payer" label={t('payer')} />
      <Checkbox name="recipient" label={t('recipient')} />
      <Checkbox name="agent" label={t('agent')} />
      <Checkbox name="business" label={t('business')} />

      <S.ErrorText>{formState?.errors?.payer?.message}</S.ErrorText>
    </S.AccountTypeStep>
  )
}
