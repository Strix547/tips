import { Controller, useFormContext } from 'react-hook-form'
import { FormControlLabel } from 'ui'
import * as S from './Switch.styled'

export const Switch = ({ name, label, rules, value, size }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <S.SwitchField>
            {label ? (
              <FormControlLabel label={label} control={<S.Switch {...field} value={value} />} />
            ) : (
              <S.Switch {...field} value={value} size={size} />
            )}
          </S.SwitchField>
        )
      }}
    />
  )
}
