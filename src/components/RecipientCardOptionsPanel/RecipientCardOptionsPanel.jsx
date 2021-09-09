import { useEffect } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'

import Image from 'next/image'
import isEqual from 'lodash.isequal'

import { Switch, Button, ColorPickerField, Dropzone } from 'ui'

import * as S from './RecipientCardOptionsPanel.styled'

import UploadIcon from '@public/icons/upload.svg'

export const RecipientCardOptionsPanel = ({
  options,
  companyLogo,
  onOptionsChange,
  onCreateQr,
  onCompanyLogoChange
}) => {
  const useFormProps = useForm({
    defaultValues: options
  })

  const currency = '₽'

  const optionsWatch = useFormProps.watch()

  useEffect(() => {
    if (isEqual(options, optionsWatch)) return

    onOptionsChange(optionsWatch)
  }, [optionsWatch, options, onOptionsChange])

  const tipAmountPresetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
    <Controller
      control={useFormProps.control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field

        return (
          <S.FormField
            value={value}
            placeholder="Сумма"
            InputProps={{ endAdornment: currency }}
            onChange={({ target: { value } }) => {
              const numReg = /^\d+$/
              const isNumber = numReg.test(value)
              const isEmpty = value.length === 0
              const lessSixSymbols = value.length < 6

              if (isEmpty) return onChange(value)

              if (isNumber && lessSixSymbols) {
                return onChange(parseInt(value, 10))
              }
            }}
          />
        )
      }}
    />
  ))

  return (
    <S.RecipientCardOptionsPanel>
      <FormProvider {...useFormProps}>
        <S.AmountPresetsRow>
          <S.Label>Предустановленные суммы чаевых</S.Label>

          <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
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

        <Dropzone accept="image/*" multiple={false} onFileChange={onCompanyLogoChange}>
          {!companyLogo ? (
            <>
              <UploadIcon />
              <S.Text>Загрузите логотип</S.Text>
            </>
          ) : (
            <S.DropzoneImage>
              <Image
                src={companyLogo?.src}
                alt={companyLogo?.name}
                width="100%"
                height="100%"
                layout="fill"
                unoptimized
              />
            </S.DropzoneImage>
          )}
        </Dropzone>

        <ColorPickerField name="buttonColor" label="Код цвета для кнопки" />

        <Button onClick={onCreateQr}>Создать QR-код</Button>
      </FormProvider>
    </S.RecipientCardOptionsPanel>
  )
}
