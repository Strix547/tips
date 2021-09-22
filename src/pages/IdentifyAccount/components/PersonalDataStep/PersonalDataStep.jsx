import { FormField, DatePicker } from 'ui'

import * as S from './PersonalDataStep.styled'

export const PersonalDataStep = () => {
  const eighteenYearsAgo = new Date(
    new Date().setTime(new Date().valueOf() - 18 * 365 * 24 * 60 * 60 * 1000)
  )

  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>Персональные данные:</S.FieldsLabel>

      <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

      <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

      <FormField
        rules={{
          validate: (value) => value.indexOf('_') === -1
        }}
        name="birthDate"
        label="Дата рождения"
        placeholder="dd/mm/yyyy"
        MaskProps={{ mask: '99/99/9999' }}
      />

      {/* <DatePicker
        name="birthDate"
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        maxDate={eighteenYearsAgo}
        label="Дата рождения"
        required
      /> */}

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
