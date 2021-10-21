import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'
import * as employeesApi from 'api/employees'
import * as userApi from 'api/user'

export const employeesStore = makeAutoObservable({
  employees: [],
  isEmployeesLoading: false,
  isEmployeeCreating: false,
  userNotFound: false,

  getEmployees: async (ownerId) => {
    employeesStore.isEmployeesLoading = true

    const employees = await employeesApi.getEmployees(ownerId)

    employeesStore.employees = employees
    employeesStore.isEmployeesLoading = false

    return employees
  },

  createEmployee: async ({
    platformId,
    firstName,
    lastName,
    email,
    phone,
    birthDate,
    countryCode,
    city,
    address,
    postal
  }) => {
    try {
      employeesStore.isEmployeeCreating = true

      await employeesApi.createEmployee({
        platformId,
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth: birthDate,
        countryCode,
        city,
        address,
        postalCode: postal
      })
      toast.success('Employee successfully created')
      router.push(ROUTE_NAMES.ACCOUNT_EMPLOYEES)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      employeesStore.isEmployeeCreating = false
    }
  },

  changeEmployeeAvailability: async ({ employeeId, platformId, available }) => {
    await employeesApi.changeEmployeeAvailability({
      employeeUserId: employeeId,
      platformId,
      active: available
    })
  },

  removeEmployeeFromPlatform: async ({ employeeId, platformId, userId }) => {
    try {
      await employeesApi.removeEmployee({
        employeeUserId: employeeId,
        platformId
      })
      await employeesStore.getEmployees(userId)
      toast.success('Employee successfully removed')
    } catch ({ message }) {
      toast.error('Failed to remove employee')
    }
  },

  connectEmployeeToPlatform: async ({ phone, platformId }) => {
    try {
      employeesStore.userNotFound = false
      employeesStore.isEmployeeCreating = true

      const userId = await userApi.getUserByPhone(phone)

      if (!userId) {
        employeesStore.userNotFound = true
        return
      }

      await employeesApi.addUserToPlatform({ platformId, personUserId: userId })
      toast.success('User successfully added to platform')
      router.push(ROUTE_NAMES.ACCOUNT_EMPLOYEES)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      employeesStore.isEmployeeCreating = false
    }
  },

  changeEmployeePlatform: async ({ platformId, employeeId }) => {
    try {
      await employeesApi.addUserToPlatform({ platformId, personUserId: employeeId })

      toast.success('User successfully added to platform')
      router.push(ROUTE_NAMES.ACCOUNT_EMPLOYEES)
    } catch ({ message }) {
      toast.error(message)
    }
  }
})
