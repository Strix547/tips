import { API } from 'core/axios'

const root = '/admin'

export const getUsers = async ({ format, zoneOffset, date, active, role, phone, nameSearch }) => {
  const { data: users } = await API.get(`${root}/user`, {
    format,
    zoneOffset,
    date,
    active,
    role,
    phone,
    nameSearch
  })

  return users.map(({ userId, countryName, signUpDateTime, ...props }) => ({
    id: userId,
    country: countryName,
    date: signUpDateTime,
    ...props
  }))
}
