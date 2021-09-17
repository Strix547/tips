import { API } from 'core/axios'

export const addBankAccount = ({ userId, stripeToken }) => {
  const { data } = API.post('/stripe-bank-account/add', {
    ownerUserId: userId,
    stripeBankAccountToken: stripeToken
  })
  return data?.bankAccountId
}
