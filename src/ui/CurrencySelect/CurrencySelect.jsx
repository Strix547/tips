import { MenuItem, Select } from 'ui'

import { CURRENCIES } from 'core/constants'

import * as S from './CurrencySelect.styled'

export const CurrencySelect = () => {
  const periodMenuItems = CURRENCIES.map(({ label, value }) => (
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
