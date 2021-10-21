import { API } from 'core/axios'
import { handleResponse } from 'utils'

export const getUserLanguage = (userId) => {
  return API.get('/user-language', { params: { userId } })
}

export const changeUserLanguage = ({ userId, languageCode }) => {
  return API.post(`/user-language/${userId}/replace`, { languageCode })
}

export const getMyId = async () => {
  const { data } = await API.get('/me')

  return data?.userId
}

export const getUserRole = async (userId) => {
  const { data } = await API.get(`/user-roles/${userId}`)
  return data[0]
}

export const getUserInfo = async (userId) => {
  const { data } = await API.get(`/personal-info/${userId}`)

  return {
    ...data,
    birthDate: new Date(data.dateOfBirth),
    avatar: data.avatarFileUrl && `${window.location.origin}${data.avatarFileUrl}`
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
  policyAgreement,
  avatarFileId
}) => {
  try {
    const response = await API.post(`/personal-info/${userId}/change`, {
      email,
      firstName,
      lastName,
      dateOfBirth: birthDate,
      countryCode,
      city,
      address,
      postalCode,
      avatarFileId,
      tosAccepted: policyAgreement
    })

    const codeLabels = [
      { code: 'POSTAL_CODE_INVALID', label: 'Invalid postal code' },
      { code: 'COUNTRY_NOT_SUPPORTED', label: 'Country not supported' }
    ]

    return handleResponse(response, codeLabels)
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

export const upgradeAccountToBusiness = async (userId) => {
  const res = await API.post(`/upgrade-account-to-business/${userId}`)

  const errorCodes = [{ label: 'Your account is already business ', code: 'ALREADY_UPGRADED' }]

  handleResponse(res, errorCodes)
}

export const getUserByPhone = async (phone) => {
  const { data } = await API.get(`/person-by-phone`, {
    params: { phone: `+${phone}` }
  })

  return data.personUserId
}
