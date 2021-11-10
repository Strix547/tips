import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import * as S from './DatePicker.styled'

import CalendarIcon from '@public/icons/calendar.svg'

export const DatePicker = ({
  label,
  name,
  rules,
  required,
  onChange,
  defaultValue,
  placeholderText,
  maxDate,
  withIcon,
  ...props
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const [isOpen, setOpen] = useState(false)

  const error = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <Controller
      control={control}
      name={name}
      rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <S.DatePicker error={error}>
          {label && <S.Label>{label}</S.Label>}

          <S.PickerContainer>
            <Picker
              {...props}
              open={isOpen}
              placeholderText={placeholderText}
              maxDate={maxDate}
              defaultValue={defaultValue}
              selected={field.value}
              onFocus={() => {
                setOpen(true)
              }}
              onChange={(value) => {
                if (onChange) {
                  onChange(value)
                }

                field.onChange(value)
              }}
              onClickOutside={() => {
                setOpen(false)
              }}
              onSelect={field.onChange}
            />

            {withIcon && (
              <S.Icon
                onClick={() => {
                  setOpen(true)
                }}
              >
                <CalendarIcon />
              </S.Icon>
            )}
          </S.PickerContainer>
        </S.DatePicker>
      )}
    />
  )
}
