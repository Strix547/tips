import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useFormContext } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'

import { MenuItem, Select } from 'ui'

import { bankAccountStore, userStore } from 'store'

import * as S from './BankAccountSelect.styled'

export const BankAccountSelect = observer(({ label = 'Мои IBAN номера:', onChange = () => {} }) => {
  const useFormProps = useFormContext()

  const userId = userStore.id
  const { selectedBankAccountId, bankAccounts, isBankAccountsLoading } = bankAccountStore

  useEffect(() => {
    bankAccountStore.getBankAccounts(userId)
  }, [])

  useEffect(() => {
    if (selectedBankAccountId) {
      useFormProps.setValue('bankAccount', selectedBankAccountId)
    }
  }, [selectedBankAccountId])

  const onSelectIban = async (bankAccountId) => {
    await bankAccountStore.selectBankAccount({ userId, bankAccountId })
    onChange(bankAccountId)
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
    <S.BankAccountSelect>
      <S.Label>{label}</S.Label>

      {!isBankAccountsLoading ? (
        <Select name="bankAccount" defaultValue={selectedBankAccountId}>
          {bankAccountMenuItems}
        </Select>
      ) : (
        <Skeleton height={56} />
      )}
    </S.BankAccountSelect>
  )
})
