import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { Button, BankAccountSelect } from 'ui'

import { userStore, bankAccountStore, adminStore } from 'store'

import * as S from './Requisites.styled'

export const RequisitesPage = observer(({ stripePromise }) => {
  const stripe = useStripe()
  const stripeElements = useElements()
  const useFormProps = useForm()

  const [stripeError, setStripeError] = useState('')
  const [isIbanVisible, setIbanVisible] = useState(false)

  const { isAdminMode } = adminStore

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

  return (
    <>
      <Head>
        <title>Мои реквизиты</title>
      </Head>

      <AccountLayout title="Реквизиты">
        {!isAdminMode ? (
          <S.Content>
            <S.ContentContainer>
              <FormProvider {...useFormProps}>
                <BankAccountSelect />
              </FormProvider>

              {stripePromise && isIbanVisible && (
                <S.IbanContainer>
                  <S.Label>IBAN</S.Label>
                  <S.Iban options={ibanOptions} />
                  {stripeError && <S.ErrorText>{stripeError}</S.ErrorText>}
                </S.IbanContainer>
              )}

              <Button
                variant="bordered"
                onClick={() => (!isIbanVisible ? setIbanVisible(true) : onAddIban)}
              >
                Добавить IBAN
              </Button>
            </S.ContentContainer>
          </S.Content>
        ) : null}
      </AccountLayout>
    </>
  )
})
