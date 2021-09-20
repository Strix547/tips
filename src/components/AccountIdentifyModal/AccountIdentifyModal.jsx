import { useState } from 'react'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import { FormProvider, useForm } from 'react-hook-form'

import { PersonalDataStep, AccountTypeStep, CreditCardStep } from './components'
import { Button, Stepper, Step, StepLabel } from 'ui'

import { userStore, localStore } from 'store'

import * as S from './AccountIdentifyModal.styled'

export const AccountIdentifyModal = ({ open }) => {
  const stripe = useStripe()
  const stripeElements = useElements()
  const useFormProps = useForm({
    defaultValues: {
      birthDate: new Date()
    }
  })

  const [step, setStep] = useState(0)
  const [stripeError, setStripeError] = useState()

  const steps = ['Шаг 1', 'Шаг 2', 'Шаг 3']

  const stepList = steps.map((label, idx) => (
    <Step key={label}>
      <StepLabel active={idx <= step}>{label}</StepLabel>
    </Step>
  ))

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDataStep />
      case 1:
        return <AccountTypeStep useFormProps={useFormProps} />
      case 2:
        return <CreditCardStep />
    }
  }

  console.log('values', useFormProps.getValues())
  console.log('errors', useFormProps.formState.errors)

  const onPrevStep = () => {
    if (!step !== 0) setStep(step - 1)
  }

  const onStepSubmit = async ({
    firstName,
    lastName,
    email,
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

      const { token, error } = await stripe.createToken(ibanElement, {
        account_holder_name: `${firstName} ${lastName}`,
        account_holder_type: 'individual',
        currency: 'eur'
      })

      if (error) {
        setStripeError(error.message)
        return
      }

      if (token) {
        userStore.identifyAccount({
          userId: userStore.id,
          email,
          firstName,
          lastName,
          birthDate: birthDate.toISOString().split('T')[0],
          countryCode: localStore.selectedCountryCode,
          city,
          address,
          postalCode: postal,
          policyAgreement: agreement,
          payer,
          recipient,
          agent,
          business,
          stripeToken: token.id
        })
      }
    }

    setStep(step + 1)
  }

  const isStripeNotLoaded = (!stripe || !stripeElements) && step === 3

  return (
    <S.AccountIdentifyModal open={open}>
      <S.Content>
        <S.Heading level={6}>Идентификация аккаунта</S.Heading>

        <Stepper activeStep={step}>{stepList}</Stepper>

        <FormProvider {...useFormProps}>
          <S.Step>
            {getStepContent(step)}
            {step === 2 && stripeError && <S.ErrorText>{stripeError}</S.ErrorText>}
          </S.Step>
        </FormProvider>

        <S.StepNav>
          {step !== 0 && <Button onClick={onPrevStep}>Назад</Button>}
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
    </S.AccountIdentifyModal>
  )
}
