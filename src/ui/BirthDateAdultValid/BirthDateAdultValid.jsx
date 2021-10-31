import { FormField } from 'ui'

export const BirthDateAdultValid = ({ label = 'Дата рождения' }) => {
  const checkDateHaventPlaceholderSymbols = (date) => {
    const haventPlaceholderSymbol = date?.indexOf('_') === -1

    return haventPlaceholderSymbol
  }

  const checkDateMoreThanEighteen = (value) => {
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
    <FormField
      rules={{
        validate: {
          required: (date) => checkDateHaventPlaceholderSymbols(date) || 'required',
          moreThanEighteen: (date) =>
            checkDateMoreThanEighteen(date) || 'You must be at least 18 years old'
        }
      }}
      name="birthDate"
      label={label}
      placeholder="dd/mm/yyyy"
      MaskProps={{ mask: '99/99/9999' }}
    />
  )
}
