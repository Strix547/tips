import { FormField, DatePicker } from 'ui'

import * as S from './PersonalDataStep.styled'

export const PersonalDataStep = () => {
  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>Персональные данные:</S.FieldsLabel>

      <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

      <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

      <DatePicker name="birthDate" dateFormat="dd/MM/yyyy" label="Дата рождения" required />

      <FormField
        rules={{
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Enter a valid e-mail address'
          }
        }}
        type="email"
        name="email"
        label="E-mail"
        placeholder="Введите e-mail"
        required
      />
    </S.PersonalDataStep>
  )
}
