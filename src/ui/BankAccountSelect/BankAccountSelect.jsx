import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useFormContext } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'next-i18next'

import { MenuItem, Select } from 'ui'

import { bankAccountStore, userStore } from 'store'

import * as S from './BankAccountSelect.styled'

export const BankAccountSelect = observer(({ label, onChange = () => {} }) => {
  const { t } = useTranslation('common')
  const useFormProps = useFormContext()

  const userId = userStore.id
  const { selectedBankAccountId, bankAccounts, isBankAccountsLoading } = bankAccountStore

  useEffect(() => {
    if (userId) {
      bankAccountStore.getBankAccounts(userId)
    }
  }, [userId])

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
      <S.Label>{label || t('my-iban-numbers')}</S.Label>

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
