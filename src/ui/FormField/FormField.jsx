import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'

import * as S from './FormField.styled'

export const FormField = ({
  name,
  rules,
  required,
  defaultValue,
  InputProps,
  MaskProps,
  ...props
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const haveError = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        const { ref, value, onChange } = field

        const baseProps = {
          ...props,
          haveError,
          InputProps: {
            inputProps: { maxLength: 255 },
            inputRef: ref,
            ...InputProps
          }
        }

        return !MaskProps?.mask ? (
          <S.FormField {...baseProps} value={value} onChange={onChange} />
        ) : (
          <InputMask {...MaskProps} value={value} onChange={onChange}>
            {() => <S.FormField {...baseProps} />}
          </InputMask>
        )
      }}
    />
  )
}
