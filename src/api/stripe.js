export const createAccountToken = async ({
  stripe,
  firstName,
  lastName,
  countryCode,
  city,
  address,
  postal,
  birthDate,
  phone,
  email,
  identityDocumentId,
  addressDocumentId
}) => {
  const { token } = await stripe.createToken('account', {
    business_type: 'individual',
    individual: {
      first_name: firstName,
      last_name: lastName,
      address: {
        country: countryCode,
        city,
        line1: address,
        postal_code: postal
      },
      dob: {
        day: birthDate.split('/')[0],
        month: birthDate.split('/')[1],
        year: birthDate.split('/')[2]
      },
      phone,
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

  return token
}

export const createBankAccountToken = async ({ stripe, ibanElement, firstName, lastName }) => {
  const { token: bankAccountToken, error: bankAccountError } = await stripe.createToken(
    ibanElement,
    {
      account_holder_name: `${firstName} ${lastName}`,
      account_holder_type: 'individual',
      currency: 'eur'
    }
  )

  return { bankAccountToken, bankAccountError }
}
