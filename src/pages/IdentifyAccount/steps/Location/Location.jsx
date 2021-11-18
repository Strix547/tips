import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Checkbox, FormField, LocationSearch, Dropzone } from 'ui'

import * as S from './Location.styled'

import UploadIcon from '@public/icons/upload.svg'

export const LocationStep = ({
  stripePromise,
  onIndetityDocumentUpload,
  onAddressDocumentUpload
}) => {
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
      <S.FieldsLabel>Заполните поля:</S.FieldsLabel>

      <LocationSearch />

      <FormField name="address" label="Адрес" placeholder="Введите адрес" required />

      <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" required />

      {stripePromise && (
        <S.IbanContainer>
          <S.Label>IBAN</S.Label>
          <S.Iban options={ibanOptions} />
        </S.IbanContainer>
      )}

      <S.Label>Passport or Local ID card</S.Label>

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

      <S.Label>A Document showing address</S.Label>

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

        <S.Text>Соглашаюсь с </S.Text>

        <Link href="https://stripe.com/connect-account/legal/recipient" prefetch={false}>
          <a>политикой stripe</a>
        </Link>
      </S.Agreement>
    </S.LocationStep>
  )
}
