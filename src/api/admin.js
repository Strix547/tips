import { API } from 'core/axios'

import { handleResponse, downloadExcel } from 'utils'

const root = '/admin'

export const getUsers = async ({ format, zoneOffset, date, active, role, phone, nameSearch }) => {
  const isXlsxFormat = format === 'XLSX'

  const { data } = await API.get(`${root}/user`, {
    params: {
      format,
      zoneOffset,
      date,
      active,
      role,
      phone,
      nameSearch
    },
    responseType: isXlsxFormat ? 'blob' : 'json',
    transformResponse: [(data) => data]
  })

  if (isXlsxFormat) {
    downloadExcel(data, 'users')
    return
  }

  return JSON.parse(data).result.map(({ userId, countryName, signUpDateTime, ...props }) => ({
    ...props,
    id: userId,
    country: countryName,
    signUpDateTime: new Date(signUpDateTime)
  }))
}

export const getUser = async (userId) => {
  const { data: result } = await API.get(`${root}/user/${userId}`)
  const user = result.length ? result[0] : null
  const { countryName, signUpDateTime, lastSignInDateTime } = user

  return {
    ...user,
    id: userId,
    country: countryName,
    signUpDateTime: new Date(signUpDateTime),
    lastSignInDateTime: new Date(lastSignInDateTime)
  }
}

export const changeUser = async ({
  userId,
  phone,
  firstName,
  lastName,
  email,
  role,
  active,
  agentActive
}) => {
  const res = await API.post(`${root}/user/${userId}/change`, {
    phone,
    firstName,
    lastName,
    email,
    role,
    active,
    agentActive
  })

  return handleResponse(res)
}

export const getCommission = async () => {
  const { data: commission } = await API.get(`${root}/commissions`)

  const { personalCommission, businessCommission, agentCommission, loyaltyProgramCommission } =
    commission

  return {
    personal: personalCommission,
    business: businessCommission,
    agent: agentCommission,
    loyalty: loyaltyProgramCommission
  }
}

export const changeCommission = async ({
  personalCommission,
  businessCommission,
  agentCommission,
  loyaltyProgramCommission
}) => {
  const res = await API.post(`${root}/commissions`, {
    personalCommission,
    businessCommission,
    agentCommission,
    loyaltyProgramCommission
  })

  return handleResponse(res)
}
