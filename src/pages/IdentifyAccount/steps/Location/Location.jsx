import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Checkbox, FormField, LocationSearch, Dropzone } from 'ui'

import * as S from './Location.styled'

import UploadIcon from '@public/icons/upload.svg'

export const LocationStep = ({
  stripePromise,
  onIndetityDocumentUpload,
  onAddressDocumentUpload
}) => {
  const { t } = useTranslation('common')
  const [identityImg, setIdentityImg] = useState({ src: null, name: null })
  const [addressImg, setAddressImg] = useState({ src: null, name: null })

  const ibanOptions = {
    supportedCountries: ['SEPA'],
    style: {
      base: {
        padding: 20
      }
    }
  }

  const uploadIdentityDocument = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setIdentityImg({ src: reader.result, name: file.name })
    })

    onIndetityDocumentUpload(file)
  }

  const uploadAddressDocument = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setAddressImg({ src: reader.result, name: file.name })
    })

    onAddressDocumentUpload(file)
  }

  return (
    <S.LocationStep>
      <S.FieldsLabel>{t('fill-fields')}:</S.FieldsLabel>

      <LocationSearch />

      <FormField name="address" label={t('address')} placeholder={t('enter-address')} required />

      <FormField name="postal" label={t('zip-code')} placeholder={t('enter-zip-code')} required />

      {stripePromise && (
        <S.IbanContainer>
          <S.Label>{t('your-bank-account-iban')}</S.Label>
          <S.Iban options={ibanOptions} />
        </S.IbanContainer>
      )}

      <S.Label>{t('passport-or-local-id')}</S.Label>

      <Dropzone accept="image/*" multiple={false} onFileChange={uploadIdentityDocument}>
        {!identityImg.src ? (
          <UploadIcon />
        ) : (
          <S.DropzoneImage>
            <Image
              src={identityImg?.src}
              alt={identityImg?.name}
              width="100%"
              height="100%"
              layout="fill"
            />
          </S.DropzoneImage>
        )}
      </Dropzone>

      <S.Label>{t('document-showing-address')}</S.Label>

      <Dropzone accept="image/*" multiple={false} onFileChange={uploadAddressDocument}>
        {!addressImg.src ? (
          <UploadIcon />
        ) : (
          <S.DropzoneImage>
            <Image
              src={addressImg?.src}
              alt={addressImg?.name}
              width="100%"
              height="100%"
              layout="fill"
            />
          </S.DropzoneImage>
        )}
      </Dropzone>

      <S.Agreement>
        <Checkbox rules={{ required: true }} name="agreement" />

        <S.Text>{t('i-agree-with')}</S.Text>

        <Link href="https://stripe.com/connect-account/legal/recipient" prefetch={false}>
          <a>{t('stripe-policy')}</a>
        </Link>
      </S.Agreement>
    </S.LocationStep>
  )
}
