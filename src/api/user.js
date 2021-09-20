import { API } from 'core/axios'

export const getUserLanguage = (userId) => {
  return API.get('/user-language', { params: { userId } })
}

export const changeUserLanguage = ({ userId, languageCode }) => {
  return API.post(`/user-language/${userId}/replace`, { languageCode })
}

export const getMyId = async () => {
  try {
    const {
      data: { userId }
    } = await API.get('/me')
    return userId
  } catch (e) {
    throw new Error('NOT_AUTH')
  }
}

export const getUserRole = async (userId) => {
  const { data } = await API.get(`/user-roles/${userId}`)
  return data[0]
}

export const getUserInfo = async (userId) => {
  const { data } = await API.get(`/personal-info/${userId}`)

  return {
    ...data,
    birthDate: new Date(data.dateOfBirth)
  }
}

export const changeUserInfo = async ({
  userId,
  email,
  firstName,
  lastName,
  birthDate,
  countryCode,
  city,
  address,
  postalCode,
  policyAgreement
}) => {
  try {
    const res = await API.post(`/personal-info/${userId}/change`, {
      email,
      firstName,
      lastName,
      dateOfBirth: birthDate,
      countryCode,
      city,
      address,
      postalCode,
      tosAccepted: policyAgreement
    })

    if (res?.status === 500) {
      throw new Error(res.status)
    }

    return res
  } catch ({ message }) {
    throw new Error(message)
  }
}

export const addUserRole = ({ userId, payer, recipient, agent, business }) => {
  return API.post(`/user-preferred-account-types/${userId}/create`, {
    payer,
    recipient,
    agent,
    business
  })
}
