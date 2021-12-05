import { useState, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { PersonalDataStep, AccountTypeStep, LocationStep } from './steps'
import { Button, Stepper, Step, StepLabel, CircularProgress } from 'ui'

import { userStore, localStore, authStore } from 'store'
import { transformDateLabelToIso } from 'utils'
import { stripeKey } from 'core/constants'
import * as stripeApi from 'api/stripe'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './IdentifyAccount.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const IdentifyAccountPage = observer(({ stripePromise }) => {
  const { t } = useTranslation('common')
  const stripe = useStripe()
  const stripeElements = useElements()

  const firstNameDefault =
    authStore.authData.firstName === 'undefined' ? '' : authStore.authData.firstName
  const emailDefault = authStore.authData.email === 'undefined' ? '' : authStore.authData.email

  const useFormProps = useForm({
    defaultValues: {
      firstName: firstNameDefault,
      email: emailDefault,
      birthDate: null
    }
  })

  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })
  const [step, setStep] = useState(0)
  const [stripeError, setStripeError] = useState()
  const [identityDocumentId, setIdentityDocumentId] = useState()
  const [addressDocumentId, setAddressDocumentId] = useState()

  const { phone } = authStore.authData
  console.log(phone)
  const { isIdentifyProcessing } = userStore
  const steps = ['Шаг 1', 'Шаг 2', 'Шаг 3']

  const stepList = steps.map((label, idx) => (
    <Step key={label}>
      <StepLabel active={idx <= step}>{label}</StepLabel>
    </Step>
  ))

  const sendIdentityDocument = async (file) => {
    const data = new FormData()

    data.append('file', file)
    data.append('purpose', 'identity_document')

    const fileResult = await fetch('https://uploads.stripe.com/v1/files', {
      method: 'POST',
      headers: { Authorization: `Bearer ${stripeKey}` },
      body: data
    })

    const { id } = await fileResult.json()
    setIdentityDocumentId(id)
  }

  const sentAddressDocument = async (file) => {
    const data = new FormData()

    data.append('file', file)
    data.append('purpose', 'identity_document')

    const fileResult = await fetch('https://uploads.stripe.com/v1/files', {
      method: 'POST',
      headers: { Authorization: `Bearer ${stripeKey}` },
      body: data
    })

    const { id } = await fileResult.json()
    setAddressDocumentId(id)
  }

  const crediteCardStepMemo = useMemo(
    () => (
      <LocationStep
        stripePromise={stripePromise}
        onIndetityDocumentUpload={sendIdentityDocument}
        onAddressDocumentUpload={sentAddressDocument}
      />
    ),
    [stripePromise, useFormProps, sendIdentityDocument, sentAddressDocument]
  )

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDataStep />
      case 1:
        return <AccountTypeStep />
      case 2:
        return crediteCardStepMemo
    }
  }

  const onPrevStep = () => {
    if (!step !== 0) setStep(step - 1)
  }

  const onStepSubmit = async ({
    firstName,
    lastName,
    email,
    country,
    city,
    birthDate,
    address,
    postal,
    payer,
    recipient,
    agent,
    business,
    agreement
  }) => {
    if (step === 1 && !payer && !recipient && !agent && !business) {
      useFormProps.setError('payer', { message: 'You shoold choose at least one type' })
      return
    }

    if (step === 2) {
      const ibanElement = stripeElements.getElement(IbanElement)

      const accountToken = await stripeApi.createAccountToken({
        stripe,
        firstName,
        lastName,
        countryCode: toJS(country).code,
        city,
        address,
        postal,
        birthDate,
        phone: `+${phone}`,
        email,
        identityDocumentId,
        addressDocumentId
      })
      const { bankAccountToken, bankAccountError } = await stripeApi.createBankAccountToken({
        stripe,
        ibanElement,
        firstName,
        lastName
      })

      if (bankAccountError) {
        setStripeError(error.message)
        return
      }

      if (accountToken && bankAccountToken) {
        userStore.identifyAccount({
          userId: userStore.id,
          email,
          firstName,
          lastName,
          birthDate: transformDateLabelToIso(birthDate),
          countryCode: localStore.selectedCountryCode,
          city,
          address,
          postalCode: postal,
          policyAgreement: agreement,
          payer,
          recipient,
          agent,
          business,
          bankAccountToken: bankAccountToken.id,
          accountToken: accountToken.id
        })
      }

      return
    }

    setStep(step + 1)
  }

  const birthdateError = useFormProps.formState.errors?.birthDate
  const isStripeNotLoaded = (!stripe || !stripeElements) && step === 3

  return (
    <>
      <Head>
        <title>{t('account-identification')}</title>
      </Head>

      <S.IdentifyAccountPage>
        <S.Left>
          {!isIdentifyProcessing ? (
            <S.Content>
              <S.Heading level={6}>{t('account-identification')}</S.Heading>

              <Stepper activeStep={step}>{stepList}</Stepper>

              <FormProvider {...useFormProps}>
                <S.Step>
                  {getStepContent(step)}

                  {step === 2 && stripeError && <S.ErrorText>{stripeError}</S.ErrorText>}

                  {birthdateError?.type === 'moreThanEighteen' && (
                    <S.ErrorText>{birthdateError?.message}</S.ErrorText>
                  )}
                </S.Step>
              </FormProvider>

              <S.StepNav>
                {step !== 0 && <Button onClick={onPrevStep}>{t('back')}</Button>}
                {step !== 3 && (
                  <Button
                    type="submit"
                    disabled={isStripeNotLoaded}
                    onClick={useFormProps.handleSubmit(onStepSubmit)}
                  >
                    {step !== 2 ? 'Далее' : 'Войти'}
                  </Button>
                )}
              </S.StepNav>
            </S.Content>
          ) : (
            <S.Progress>
              <CircularProgress size={80} />
            </S.Progress>
          )}
        </S.Left>

        {!isTablet && (
          <S.Right>
            <CommentRegulationIcon />
          </S.Right>
        )}
      </S.IdentifyAccountPage>
    </>
  )
})
