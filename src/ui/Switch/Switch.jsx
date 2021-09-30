import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Switch.styled'

export const Switch = ({ name, label, labelPlacement, rules, size }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => {
        const switchCheckbox = <S.Switch checked={value} onChange={onChange} size={size} />

        return (
          <S.SwitchField>
            {label ? (
              <S.FormControlLabel
                label={label}
                labelPlacement={labelPlacement}
                control={switchCheckbox}
                size={size}
              />
            ) : (
              switchCheckbox
            )}
          </S.SwitchField>
        )
      }}
    />
  )
}
