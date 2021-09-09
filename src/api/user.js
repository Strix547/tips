import { API } from 'core/axios'

export const getUserLanguage = (userId) => {
  return API.get('/user-language', { params: { userId } })
}

export const changeUserLanguage = ({ userId, languageCode }) => {
  return API.post(`/user-language/${userId}/replace`, { languageCode })
}

export const getMyId = () => {
  return API.get('/me')
}

export const getUserRole = (userId) => {
  return API.get('/user-roles/', { params: { userId } })
}

export const getUserInfo = (userId) => {
  return API.get('/personal-info', { params: { userId } })
}

export const changeUserInfo = ({
  userId,
  email,
  firstName,
  lastName,
  birthDate,
  countryCode,
  city,
  address
}) => {
  return API.post(`/personal-info/${userId}/change`, {
    email,
    firstName,
    lastName,
    dateOfBitrh: birthDate,
    countryCode,
    city,
    address
  })
}

export const addUserRole = ({ userId, payer, recipient, agent, business }) => {
  return API.post(`/user-preferred-account-types/${userId}`, { payer, recipient, agent, business })
}
