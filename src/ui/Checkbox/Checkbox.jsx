import { Controller, useFormContext } from 'react-hook-form'

import * as S from './Checkbox.styled'

export const Checkbox = ({ name, rules, label, ...props }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const haveError = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => {
        const propsCommon = {
          ...props,
          checked: value,
          value,
          onChange
        }

        return label ? (
          <S.CheckboxRow label={label} control={<S.Checkbox {...propsCommon} />} />
        ) : (
          <>
            <S.Checkbox {...propsCommon} haveError={haveError} />
          </>
        )
      }}
    />
  )
}
