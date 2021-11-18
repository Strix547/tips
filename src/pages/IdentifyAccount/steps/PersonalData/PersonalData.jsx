import { FormField, EmailField, BirthDateAdultValid } from 'ui'

import * as S from './PersonalData.styled'

export const PersonalDataStep = ({}) => {
  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>Персональные данные:</S.FieldsLabel>

      <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

      <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

      <BirthDateAdultValid />

      <EmailField />
    </S.PersonalDataStep>
  )
}
