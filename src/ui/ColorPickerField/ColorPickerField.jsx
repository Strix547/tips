import { useState, useRef, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import * as S from './ColorPickerField.styled'

export const ColorPickerField = ({ name, defaultColor, rules, label, ...props }) => {
  const { control, watch } = useFormContext()

  const rootRef = useRef(null)
  const [isColorPickerOpen, setColorPickerOpen] = useState(false)
  const [color, setColor] = useState(defaultColor)

  useEffect(() => {
    if (color !== defaultColor) {
      setColor(defaultColor)
    }
  }, [defaultColor])

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

  useEffect(() => {
    if (!color && watch(name)?.hex) {
      setColor(watch(name).hex)
    }
  }, [watch(name)])

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.ColorPickerField ref={rootRef}>
            <S.Label>{label}</S.Label>

            <S.Field onClick={() => setColorPickerOpen(!isColorPickerOpen)}>
              <S.Color color={color} />
              <S.Text>{color}</S.Text>
            </S.Field>

            {isColorPickerOpen && (
              <S.ColorPicker
                {...props}
                value={value}
                color={color}
                onChange={({ hex }) => {
                  setColor(hex)
                }}
                onChangeComplete={onChange}
              />
            )}
          </S.ColorPickerField>
        )
      }}
    />
  )
}
