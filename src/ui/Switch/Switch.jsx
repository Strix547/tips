import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Switch.styled'

export const Switch = ({ name, label, labelPlacement, rules, size, onClick }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => {
        const switchCheckbox = <S.Switch checked={value} onChange={onChange} size={size} />

        return (
          <S.SwitchField onClick={onClick}>
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
