import { API } from 'core/axios'

export const getUserLanguage = (userId) => {
  return API.get('/user-language', { params: { userId } })
}

export const changeUserLanguage = ({ userId, languageCode }) => {
  return API.post(`/user-language/${userId}/replace`, { languageCode })
}

export const getMyId = async () => {
  try {
    const { status, data } = await API.get('/me')

    if (status === 401) {
      throw new Error('not auth')
    }

    return data.userId
  } catch ({ message }) {
    throw new Error(message)
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
    const { status, data } = await API.post(
      `/personal-info/${userId}/change`,
      {
        email,
        firstName,
        lastName,
        dateOfBirth: birthDate,
        countryCode,
        city,
        address,
        postalCode,
        tosAccepted: policyAgreement
      },
      { transformResponse: [(data) => data] }
    )
    console.log(54534, data)
    if (status === 500) {
      throw new Error(status)
    }

    if (data?.error.code === 'POSTAL_CODE_INVALID') {
      throw new Error('Invalid postal code')
    }
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

export const uploadFile = async (formData) => {
  const { data } = await API.post('/upload-file', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return data
}
