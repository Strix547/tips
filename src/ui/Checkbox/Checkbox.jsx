import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Checkbox.styled'

export const Checkbox = ({ name, rules, label, defaultValue, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        const { value = '', onChange } = field

        return label ? (
          <S.CheckboxRow
            label={label}
            control={<S.Checkbox {...props} value={value} onChange={onChange} />}
          />
        ) : (
          <>
            <S.Checkbox {...props} value={value} onChange={onChange} />
          </>
        )
      }}
    />
  )
}
