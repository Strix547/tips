import { useState, useRef, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import * as S from './ColorPickerField.styled'

export const ColorPickerField = ({ name, rules, label, ...props }) => {
  const { control } = useFormContext()
  const rootRef = useRef(null)
  const [isColorPickerOpen, setColorPickerOpen] = useState(false)
  const [color, setColor] = useState('#000000')

  const onOutsideClick = (event) => {
    if (!rootRef?.current?.contains(event.target)) {
      setColorPickerOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', onOutsideClick, true)

    return () => {
      document.removeEventListener('click', onOutsideClick, true)
    }
  }, [])

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onChange } = field

        return (
          <S.ColorPickerField ref={rootRef}>
            <S.Label>{label}</S.Label>

            <S.Field onClick={() => setColorPickerOpen(!isColorPickerOpen)}>
              <S.Color style={{ backgroundColor: color }} />
              <S.Text>{color}</S.Text>
            </S.Field>

            {isColorPickerOpen && (
              <S.ColorPicker
                {...props}
                color={color}
                onChange={({ hex }) => {
                  setColor(hex)
                }}
                onChangeComplete={({ hex }) => {
                  onChange(hex)
                }}
              />
            )}
          </S.ColorPickerField>
        )
      }}
    />
  )
}
