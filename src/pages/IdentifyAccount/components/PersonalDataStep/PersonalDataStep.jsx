import { FormField } from 'ui'

import * as S from './PersonalDataStep.styled'

export const PersonalDataStep = () => {
  const dateHaventPlaceholderSymbols = (date) => {
    const haventPlaceholderSymbol = date?.indexOf('_') === -1

    return haventPlaceholderSymbol
  }

  const dateMoreThanEighteen = (value) => {
    const haventPlaceholderSymbol = value?.indexOf('_') === -1

    if (!haventPlaceholderSymbol) {
      return false
    }

    const [d, m, y] = value.split('/')
    const date = new Date(parseInt(y, 10), parseInt(m - 1, 10), parseInt(d, 10))
    const eighteenYearsAgo = new Date(
      new Date().setTime(new Date().valueOf() - 18 * 365 * 24 * 60 * 60 * 1000)
    )
    const valueMoreThanEighteen = date.getTime() < eighteenYearsAgo.getTime()

    return valueMoreThanEighteen
  }

  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>Персональные данные:</S.FieldsLabel>

      <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

      <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

      <FormField
        rules={{
          validate: {
            required: (date) => dateHaventPlaceholderSymbols(date) || 'required',
            moreThanEighteen: (date) =>
              dateMoreThanEighteen(date) || 'You must be at least 18 years old'
          }
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
