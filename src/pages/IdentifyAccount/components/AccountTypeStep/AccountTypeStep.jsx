import { Checkbox } from 'ui'

import * as S from './AccountTypeStep.styled'

export const AccountTypeStep = ({ useFormProps }) => {
  return (
    <S.AccountTypeStep>
      <S.FieldsLabel>Выберите ваш тип:</S.FieldsLabel>

      <Checkbox name="payer" label="Плательщик" />
      <Checkbox name="recipient" label="Получатель" />
      <Checkbox name="agent" label="Агент" />
      <Checkbox name="business" label="Бизнес" />

      <S.ErrorText>{useFormProps?.formState?.errors?.payer?.message}</S.ErrorText>
    </S.AccountTypeStep>
  )
}
