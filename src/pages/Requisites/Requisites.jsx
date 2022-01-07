import { useState, useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import { useTranslation } from 'next-i18next'
import { loadStripe } from '@stripe/stripe-js'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AccountLayout } from 'layout'
import {
  Button,
  BankAccountSelect,
  LocationSearch,
  FormField,
  Dropzone,
  Checkbox,
  CircularProgress
} from 'ui'

import { userStore, bankAccountStore, adminStore, localStore } from 'store'
import * as stripeApi from 'api/stripe'
import { stripeKey } from 'core/constants'

import * as S from './Requisites.styled'

import UploadIcon from '@public/icons/upload.svg'

const stripePromise = loadStripe(String(stripeKey))

export const RequisitesPage = observer(() => {
  const { t } = useTranslation('common')
  const stripe = useStripe()
  const stripeElements = useElements()
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const [ibanElement, setIbanElement] = useState()
  const [isIbanVisible, setIbanVisible] = useState(false)
  const [stripeError, setStripeError] = useState()
  const [identityImg, setIdentityImg] = useState({ src: null, name: null })
  const [addressImg, setAddressImg] = useState({ src: null, name: null })
  const [identityDocument, setIdentityDocument] = useState()
  const [addressDocument, setAddressDocument] = useState()

  const { isAdminMode } = adminStore
  const { selectedCountryCode } = localStore
  const {
    id: userId,
    personalData: { email, firstName, lastName, dateOfBirth },
    role,
    isRequisitesDataLoading
  } = userStore

  useEffect(() => {
    if (!stripeElements) return

    const ibanElement = stripeElements.getElement(IbanElement)

    if (ibanElement) {
      setIbanElement(ibanElement)
    }
  }, [stripeElements, setIbanElement])

  const ibanOptions = {
    supportedCountries: ['SEPA'],
    style: {
      base: {
        padding: 20
      }
    }
  }

  const onAddIban = async () => {
    const ibanElement = stripeElements.getElement(IbanElement)
    const { firstName, lastName } = userStore.personalData

    const { token, error } = await stripe.createToken(ibanElement, {
      account_holder_name: `${firstName} ${lastName}`,
      account_holder_type: 'individual',
      currency: 'eur'
    })

    if (error) {
      setStripeError(error.message)
      return
    }

    bankAccountStore.addBankAccount({ userId: userStore.id, stripeTokenId: token.id })
  }

  const uploadIdentityDocument = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setIdentityImg({ src: reader.result, name: file.name })
    })

    setIdentityDocument(file)
  }

  const uploadAddressDocument = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setAddressImg({ src: reader.result, name: file.name })
    })

    setAddressDocument(file)
  }

  const uploadStripeIdentityDocument = async (file) => {
    const data = new FormData()

    data.append('file', file)
    data.append('purpose', 'identity_document')

    const fileResult = await fetch('https://uploads.stripe.com/v1/files', {
      method: 'POST',
      headers: { Authorization: `Bearer ${stripeKey}` },
      body: data
    })

    const { id } = await fileResult.json()
    return id
  }

  const onRequisitesDataSubmit = async ({ country, city, address, postal, agreement }) => {
    userStore.startIdentifyProcessing(true)

    const identityDocumentId = await uploadStripeIdentityDocument(identityDocument)
    const addressDocumentId = await uploadStripeIdentityDocument(addressDocument)

    console.log({
      stripe,
      firstName,
      lastName,
      countryCode: toJS(country).code,
      city,
      address,
      postal,
      birthDate: dateOfBirth,
      phone: `+${localStorage.getItem('phone')}`,
      email: 'strix547@mail.ru',
      identityDocumentId,
      addressDocumentId
    })

    const { accountToken, accountTokenError } = await stripeApi.createAccountToken({
      stripe,
      firstName,
      lastName,
      countryCode: toJS(country).code,
      city,
      address,
      postal,
      birthDate: dateOfBirth,
      phone: `+${localStorage.getItem('phone')}`,
      email: 'strix547@mail.ru',
      identityDocumentId,
      addressDocumentId
    })

    const { bankAccountToken, bankAccountError } = await stripeApi.createBankAccountToken({
      stripe,
      ibanElement,
      firstName,
      lastName
    })
    console.log(accountTokenError, bankAccountError)
    if (bankAccountError || accountTokenError) {
      if (bankAccountError) {
        setStripeError(bankAccountError)
      } else {
        setStripeError(accountTokenError)
      }
      userStore.startIdentifyProcessing(false)
      return
    }

    if (accountToken && bankAccountToken) {
      userStore.addRequisitesData({
        userId,
        email,
        firstName,
        lastName,
        birthDate: dateOfBirth,
        countryCode: selectedCountryCode,
        city,
        address,
        postalCode: postal,
        policyAgreement: agreement,
        bankAccountToken: bankAccountToken.id,
        accountToken: accountToken.id
      })
    }
  }

  const requisites = !isRequisitesDataLoading ? (
    <S.RequisitesDataForm onSubmit={handleSubmit(onRequisitesDataSubmit)}>
      <FormProvider {...useFormProps}>
        <S.Text>{t('fill-fields')}:</S.Text>

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

          <Link href="https://stripe.com/privacy" prefetch={false}>
            <a>{t('stripe-policy')}</a>
          </Link>
        </S.Agreement>

        {stripeError && <S.ErrorText>{stripeError.message}</S.ErrorText>}

        <Button type="submit" disabled={!identityImg.src || !addressImg.src}>
          {t('save')}
        </Button>
      </FormProvider>
    </S.RequisitesDataForm>
  ) : (
    <CircularProgress size={80} style={{ margin: 'auto' }} />
  )

  return (
    <>
      <Head>
        <title>{'my-bank-info'}</title>
      </Head>

      <AccountLayout title={t('your-bank-information')}>
        {role === 'UNVERIFIED' ? (
          requisites
        ) : !isAdminMode ? (
          <S.Content>
            <S.ContentContainer>
              <FormProvider {...useFormProps}>
                <BankAccountSelect />
              </FormProvider>

              {stripePromise && isIbanVisible && (
                <S.IbanContainer>
                  <S.Label>{t('your-bank-account-iban')}</S.Label>
                  <S.Iban options={ibanOptions} />
                  {stripeError && <S.ErrorText>{stripeError}</S.ErrorText>}
                </S.IbanContainer>
              )}

              <Button
                variant="bordered"
                onClick={() => (!isIbanVisible ? setIbanVisible(true) : onAddIban())}
              >
                {t('add-iban')}
              </Button>
            </S.ContentContainer>
          </S.Content>
        ) : null}
      </AccountLayout>
    </>
  )
})
