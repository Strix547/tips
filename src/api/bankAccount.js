import { API } from 'core/axios'
import { toast } from 'react-toastify'

import { handleResponse } from 'utils'

export const addBankAccount = ({ userId, stripeToken }) => {
  try {
    const res = API.post('/stripe-bank-account/add', {
      ownerUserId: userId,
      stripeBankAccountToken: stripeToken
    })

    if (res.status === 403) {
      throw new Error('403 Forbidden')
    }

    return res?.data?.bankAccountId
  } catch ({ message }) {
    toast.error(message)
  }
}

export const getBankAccounts = async (userId) => {
  try {
    const { data } = await API.get(`/personal-bank-accounts/${userId}`)
    return data
  } catch ({ message }) {
    throw new Error(message)
  }
}

export const selectBankAccount = async ({ userId, bankAccountId }) => {
  try {
    const response = await API.post(`/personal-bank-accounts/${userId}/select-for-payments`, {
      bankAccountId
    })

    handleResponse(response)
  } catch ({ message }) {
    throw new Error(message)
  }
}
