import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useStripe, useElements, IbanElement } from '@stripe/react-stripe-js'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { Button, MenuItem, Select } from 'ui'

import { userStore, bankAccountStore } from 'store'

import * as S from './Requisites.styled'

export const RequisitesPage = observer(({ stripePromise }) => {
  const stripe = useStripe()
  const stripeElements = useElements()

  const [stripeError, setStripeError] = useState('')
  const [isIbanVisible, setIbanVisible] = useState(false)
  const userId = userStore.id
  const { selectedBankAccountId, bankAccounts } = bankAccountStore
  const useFormProps = useForm()

  const ibanOptions = {
    supportedCountries: ['SEPA'],
    style: {
      base: {
        padding: 20
      }
    }
  }

  useEffect(() => {
    if (!userId) return

    bankAccountStore.getBankAccounts(userId)
  }, [userId])

  useEffect(() => {
    if (selectedBankAccountId) {
      useFormProps.setValue('iban', selectedBankAccountId)
    }
  }, [selectedBankAccountId])

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

  const onSelectIban = async (bankAccountId) => {
    await bankAccountStore.selectBankAccount({ userId, bankAccountId })
  }

  const bankAccountMenuItems = bankAccounts.map(({ bankAccountId, last4Digits }) => {
    return (
      <MenuItem
        key={bankAccountId}
        value={bankAccountId}
        onClick={() => onSelectIban(bankAccountId)}
      >
        * {last4Digits}
      </MenuItem>
    )
  })

  return (
    <>
      <Head>
        <title>Мои реквизиты</title>
      </Head>

      <AccountLayout title="Реквизиты">
        <S.Content>
          <S.ContentContainer>
            <S.Label>Мои IBAN номера:</S.Label>

            <FormProvider {...useFormProps}>
              <Select name="iban" defaultValue={selectedBankAccountId}>
                {bankAccountMenuItems}
              </Select>
            </FormProvider>

            {stripePromise && isIbanVisible && (
              <S.IbanContainer>
                <S.Label>IBAN</S.Label>
                <S.Iban options={ibanOptions} />
                {stripeError && <S.ErrorText>{stripeError}</S.ErrorText>}
              </S.IbanContainer>
            )}

            {!isIbanVisible ? (
              <Button variant="bordered" onClick={() => setIbanVisible(true)}>
                Добавить IBAN
              </Button>
            ) : (
              <Button variant="bordered" onClick={onAddIban}>
                Добавить IBAN
              </Button>
            )}
          </S.ContentContainer>
        </S.Content>
      </AccountLayout>
    </>
  )
})
