import React from 'react'
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab'
import { Controller, useFormContext } from 'react-hook-form'

import ArrowIcon from '@public/icons/arrows/gray-rounded-down.svg'

import * as S from './Autocomplete.styled'

export const Autocomplete = ({
  label,
  name,
  rules,
  onChange,
  required,
  defaultValue,
  ...props
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  const haveError = Object.keys(errors).some((inputName) => inputName === name)

  return (
    <S.Autocomplete haveError={haveError}>
      <Controller
        control={control}
        name={name}
        rules={required ? { ...rules, required: { value: true, message: 'required' } } : rules}
        defaultValue={defaultValue}
        render={({ fieldState: { value } }) => {
          // const { error } = renderProps.fieldState

          return (
            <>
              {label && <S.Label>{label}</S.Label>}

              <MuiAutocomplete
                {...props}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
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

              {/* <S.ErrorText>{error?.message}</S.ErrorText> */}
            </>
          )
        }}
      />
    </S.Autocomplete>
  )
}
