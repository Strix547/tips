import { useFormContext } from 'react-hook-form'

import { Checkbox } from 'ui'

import * as S from './AccountType.styled'

export const AccountTypeStep = () => {
  const { formState } = useFormContext()

  return (
    <S.AccountTypeStep>
      <S.FieldsLabel>Выберите ваш тип:</S.FieldsLabel>

      <Checkbox name="payer" label="Плательщик" />
      <Checkbox name="recipient" label="Получатель" />
      <Checkbox name="agent" label="Агент" />
      <Checkbox name="business" label="Бизнес" />

      <S.ErrorText>{formState?.errors?.payer?.message}</S.ErrorText>
    </S.AccountTypeStep>
  )
}
