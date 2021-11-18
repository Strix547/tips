import React from 'react'
import MuiAutocomplete from '@material-ui/lab/Autocomplete'
import { Controller, useFormContext } from 'react-hook-form'

import ArrowIcon from '@public/icons/arrows/gray-rounded-down.svg'

import * as S from './Autocomplete.styled'

export const Autocomplete = ({ label, name, rules, onChange, required, ...props }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  const error = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <S.Autocomplete error={error}>
      <Controller
        control={control}
        name={name}
        rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
        render={({ field }) => {
          return (
            <>
              {label && <S.Label>{label}</S.Label>}

              <MuiAutocomplete
                {...props}
                value={field.value}
                onChange={(e, value, reason, details) => {
                  if (onChange) {
                    onChange(e, value, reason, details)
                  }

                  field.onChange(value)
                }}
                classes={{
                  root: 'autocomplete',
                  inputRoot: 'autocomplete-input-root',
                  input: 'autocomplete-input',
                  focused: 'autocomplete-focused',
                  noOptions: 'autocomplete-no-options',
                  endAdornment: 'autocomplete-end-adornment'
                }}
                disableClearable
                popupIcon={<ArrowIcon />}
                closeIcon={null}
                PaperComponent={S.Paper}
                PopperComponent={S.Popper}
              />
            </>
          )
        }}
      />
    </S.Autocomplete>
  )
}
