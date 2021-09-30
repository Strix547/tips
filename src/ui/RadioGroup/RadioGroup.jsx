import { Controller, useFormContext } from 'react-hook-form'

import * as S from './RadioGroup.styled'

export const RadioGroup = ({ name, defaultValue, onChange, children }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <S.RadioGroup
            onChange={(e) => {
              if (onChange) {
                onChange(e)
              }

              return field.onChange(e)
            }}
          >
            {children}
          </S.RadioGroup>
        )
      }}
    />
  )
}
