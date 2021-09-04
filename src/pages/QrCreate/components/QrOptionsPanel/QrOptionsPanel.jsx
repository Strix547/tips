import { useState, useCallback, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import isEqual from 'lodash.isequal'

import { FormField, Switch, Button, ColorPickerField } from 'ui'

import * as S from './QrOptionsPanel.styled'

import UploadIcon from '@public/icons/upload.svg'

export const QrOptionsPanel = ({ options, onOptionsChange }) => {
  const useFormProps = useForm({
    defaultValues: options
  })

  const currency = '₽'
  const [logo, setLogo] = useState(null)

  const optionsWatch = useFormProps.watch()

  useEffect(() => {
    if (isEqual(options, optionsWatch)) return

    onOptionsChange({ ...optionsWatch, logo })
  }, [optionsWatch, options, logo, onOptionsChange])

  const uploadLogo = (logo) => {
    const reader = new FileReader()
    reader.readAsDataURL(logo)
    reader.addEventListener('load', () => {
      setLogo({ src: reader.result, name: logo.name })
    })
  }

  const onDrop = useCallback(([file]) => uploadLogo(file), [])

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop
  })

  const presetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
    <FormField
      key={name}
      type="number"
      name={name}
      placeholder="Сумма"
      onlyNumbers
      InputProps={{ endAdornment: currency }}
    />
  ))

  return (
    <S.QrOptionsPanel>
      <FormProvider {...useFormProps}>
        <S.AmountPresetsRow>
          <S.Label>Предустановленные суммы чаевых</S.Label>

          <S.AmountPresetsFields>{presetFileds}</S.AmountPresetsFields>
        </S.AmountPresetsRow>

        <S.Options>
          <S.Label>Рейтинг (звездочки)</S.Label>
          <Switch name="rating" size="big" />

          <S.Label>Отзывы</S.Label>
          <Switch name="reviews" size="big" />

          <S.Label>Впечатления</S.Label>
          <Switch name="impressions" size="big" />
        </S.Options>

        <ColorPickerField name="bgColor" label="Код цвета для подложки" />

        <S.Dropzone {...getRootProps()} borderGreen={isDragAccept}>
          <input {...getInputProps()} />

          {!logo ? (
            <>
              <UploadIcon />
              <S.Text>Загрузите логотип</S.Text>
            </>
          ) : (
            <Image src={logo?.src} alt={logo?.name} width="100%" height="100%" unoptimized />
          )}
        </S.Dropzone>

        <ColorPickerField name="buttonColor" label="Код цвета для кнопки" />

        <Button>Создать QR-код</Button>
      </FormProvider>
    </S.QrOptionsPanel>
  )
}
