import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'

import * as bankAccountApi from 'api/bankAccount'

export const bankAccountStore = makeAutoObservable({
  selectedBankAccountId: '',
  bankAccounts: [],
  isBankAccountsLoading: false,

  getBankAccounts: async (userId) => {
    bankAccountStore.isBankAccountsLoading = true

    const { selectedBankAccountId, bankAccounts } = await bankAccountApi.getBankAccounts(userId)
    bankAccountStore.selectedBankAccountId = selectedBankAccountId
    bankAccountStore.bankAccounts = bankAccounts

    bankAccountStore.isBankAccountsLoading = false
  },

  addBankAccount: async ({ userId, stripeTokenId }) => {
    try {
      await bankAccountApi.addBankAccount({ userId, stripeToken: stripeTokenId })
      await bankAccountStore.getBankAccounts(userId)
      toast.success('Iban successfully added')
    } catch ({ message }) {
      toast.error(message)
    }
  },

  selectBankAccount: async ({ userId, bankAccountId }) => {
    try {
      await bankAccountApi.selectBankAccount({ userId, bankAccountId })
      toast.success('Bank account selected')
    } catch ({ message }) {
      toast.error('Bank account select failed')
    }
  }
})
