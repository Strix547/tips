import { Stripe } from '@stripe/stripe-js'

const { token: accountToken } = await stripe.createToken('account', {
  business_type: 'individual',
  individual: {
    first_name: firstName,
    last_name: lastName,
    address: {
      country: toJS(country).code,
      city,
      line1: address,
      postal_code: postal
    },
    dob: {
      day: birthDate.split('/')[0],
      month: birthDate.split('/')[1],
      year: birthDate.split('/')[2]
    },
    email,
    verification: {
      document: {
        front: identityDocumentId
      },
      additional_document: {
        front: addressDocumentId
      }
    }
  },
  tos_shown_and_accepted: true
})

const { token: bankAccountToken, error: bankAccountError } = await stripe.createToken(ibanElement, {
  account_holder_name: `${firstName} ${lastName}`,
  account_holder_type: 'individual',
  currency: 'eur'
})
