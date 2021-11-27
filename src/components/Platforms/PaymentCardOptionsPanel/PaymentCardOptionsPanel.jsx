import { useFormContext, Controller } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import Image from 'next/image'

import { Switch, Button, ColorPickerField, Dropzone } from 'ui'

import { userStore } from 'store'

import * as S from './PaymentCardOptionsPanel.styled'

import UploadIcon from '@public/icons/upload.svg'

export const PlatformPaymentCardOptionsPanel = observer(
  ({ action, btnDefaultColor, bgDefaultColor, companyLogo, onLogoChange }) => {
    const { t } = useTranslation('common')
    const { control } = useFormContext()

    const currency = userStore.personalData.currency.symbol

    const tipAmountPresetFileds = ['preset1', 'preset2', 'preset3'].map((name) => (
      <Controller
        control={control}
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
      <S.PlatformPaymentCardOptionsPanel>
        <S.AmountPresetsRow>
          <S.Label>{t('preset-tip-amounts')}</S.Label>

          <S.AmountPresetsFields>{tipAmountPresetFileds}</S.AmountPresetsFields>
        </S.AmountPresetsRow>

        <S.Options>
          <S.Label>{t('rating')}</S.Label>
          <Switch name="ratingSwitch" size="big" />

          <S.Label>{t('reviews')}</S.Label>
          <Switch name="reviews" size="big" />

          <S.Label>{t('impressions')}</S.Label>
          <Switch name="impressions" size="big" />
        </S.Options>

        <ColorPickerField
          name="bgColor"
          label={t('substrate-color-code')}
          defaultColor={bgDefaultColor}
        />

        <Dropzone accept="image/*" multiple={false} onFileChange={onLogoChange}>
          {!companyLogo.src ? (
            <>
              <UploadIcon />
              <S.Text>{t('upload-logo')}</S.Text>
            </>
          ) : (
            <S.DropzoneImage>
              <Image
                src={companyLogo?.src}
                alt={companyLogo?.name}
                width="100%"
                height="100%"
                layout="fill"
              />
            </S.DropzoneImage>
          )}
        </Dropzone>

        <ColorPickerField
          name="btnColor"
          label={t('button-color-code')}
          defaultColor={btnDefaultColor}
        />

        <Button onClick={action.onClick}>{action.label}</Button>
      </S.PlatformPaymentCardOptionsPanel>
    )
  }
)
