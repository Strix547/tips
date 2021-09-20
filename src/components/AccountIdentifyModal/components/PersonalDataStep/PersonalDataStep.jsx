import { FormField, DatePicker } from 'ui'

import * as S from './PersonalDataStep.styled'

export const PersonalDataStep = () => {
  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>Персональные данные:</S.FieldsLabel>

      <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

      <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

      <DatePicker name="birthDate" dateFormat="dd/MM/yyyy" label="Дата рождения" required />

      <FormField type="email" name="email" label="E-mail" placeholder="Введите e-mail" required />
    </S.PersonalDataStep>
  )
}
