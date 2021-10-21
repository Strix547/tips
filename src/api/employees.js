import { API } from 'core/axios'

import { handleResponse } from 'utils'

const transformEmployee = ({
  firstName,
  lastName,
  phone,
  title,
  platformId,
  employeeUserId,
  active,
  income
}) => {
  return {
    id: employeeUserId,
    platformId,
    firstName,
    lastName,
    phone,
    platformName: title,
    available: active,
    tips: income
  }
}

export const getEmployees = async (ownerUserId) => {
  const { data: employees } = await API.get(`/employee`, { params: { ownerUserId } })

  return employees.map((employee) => transformEmployee(employee))
}

export const removeEmployee = async ({ employeeUserId, platformId }) => {
  const res = await API.post(
    `/remove-employee?employeeUserId=${employeeUserId}&platformId=${platformId}`
  )

  handleResponse(res)
}

export const changeEmployeeAvailability = async ({ employeeUserId, platformId, active }) => {
  const res = await API.post(
    `/change-employee?employeeUserId=${employeeUserId}&platformId=${platformId}`,
    {
      active
    }
  )

  handleResponse(res)
}

export const connectEmployeeToPlatform = async ({ platformId, personUserId }) => {
  const res = await API.post(`/change-employee`, { platformId, personUserId })

  handleResponse(res)
}

export const createEmployee = async ({
  platformId,
  phone,
  email,
  firstName,
  lastName,
  dateOfBirth,
  countryCode,
  city,
  address,
  postalCode
}) => {
  const res = await API.post(`/create-employee`, {
    platformId,
    phone,
    email,
    firstName,
    lastName,
    dateOfBirth,
    countryCode,
    city,
    address,
    postalCode,
    tosAccepted: true
  })

  const errorCodes = [{ code: 'POSTAL_CODE_INVALID', label: 'Invalid postal code' }]

  handleResponse(res, errorCodes)
}

export const addUserToPlatform = async ({ platformId, personUserId }) => {
  const res = await API.post('/add-employee', {
    platformId,
    personUserId
  })

  const errorCodes = [
    {
      code: 'THIS_PERSON_IS_ALREADY_AN_EMPLOYEE_OF_THIS_PLATFORM',
      label: 'User already an employee of this platform'
    }
  ]

  handleResponse(res, errorCodes)
}
