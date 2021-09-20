import { Controller, useFormContext } from 'react-hook-form'
import MenuItem from '@material-ui/core/MenuItem'

import * as S from './Select.styled'

export { MenuItem }

export const Select = ({ name, defaultValue, onChange, children }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <S.Select
          value={field.value}
          onChange={(e) => {
            field.onChange(e)

            if (onChange) {
              onChange(e)
            }
          }}
        >
          {children}
        </S.Select>
      )}
    />
  )
}
