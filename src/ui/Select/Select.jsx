import { Controller, useFormContext } from 'react-hook-form'
import MenuItem from '@material-ui/core/MenuItem'

import * as S from './Select.styled'

export { MenuItem }

export const Select = ({ name, defaultValue, children }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value = '', onChange } }) => (
        <S.Select value={value} onChange={onChange}>
          {children}
        </S.Select>
      )}
    />
  )
}
