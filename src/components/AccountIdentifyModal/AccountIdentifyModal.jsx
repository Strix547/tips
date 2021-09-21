import { useState } from 'react'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'

import { PersonalDataStep, AccountTypeStep, CreditCardStep } from './components'
import { Button, Stepper, Step, StepLabel, CircularProgress } from 'ui'

import { userStore, localStore } from 'store'

import * as S from './AccountIdentifyModal.styled'

export const AccountIdentifyModal = observer(({ stripePromise, open }) => {
  const stripe = useStripe()
  const stripeElements = useElements()
  const useFormProps = useForm({
    defaultValues: {
      birthDate: new Date()
    }
  })

  console.log('values', useFormProps.watch())
  console.log('errors', useFormProps.formState.errors)

  const [step, setStep] = useState(0)
  const [stripeError, setStripeError] = useState()

  const { isIdentifyProcessing } = userStore
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
        return <CreditCardStep stripePromise={stripePromise} useFormProps={useFormProps} />
    }
  }

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

      return
    }

    setStep(step + 1)
  }

  const isStripeNotLoaded = (!stripe || !stripeElements) && step === 3

  return (
    <S.AccountIdentifyModal open={open}>
      {!isIdentifyProcessing ? (
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
      ) : (
        <CircularProgress size={80} />
      )}
    </S.AccountIdentifyModal>
  )
})
