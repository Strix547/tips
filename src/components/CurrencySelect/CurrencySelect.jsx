import { MenuItem, Select } from 'ui'

import * as S from './CurrencySelect.styled'

export const CurrencySelect = () => {
  const currencies = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBR', value: 'GBR' }
  ]

  const periodMenuItems = currencies.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  return (
    <S.CurrencySelect>
      <Select name="currency" defaultValue="USD">
        {periodMenuItems}
      </Select>
    </S.CurrencySelect>
  )
}
