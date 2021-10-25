import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'
import * as employeesApi from 'api/employees'
import * as userApi from 'api/user'

export const employeesStore = makeAutoObservable({
  employees: [],
  isEmployeesLoading: false,
  employeeNotFound: false,
  employee: {
    isEmployeeConnecting: false,
    isEmployeeFinding: false,
    userId: null
  },

  resetEmployeeCreating: () => {
    employeesStore.employee = {
      isEmployeeConnecting: false,
      isEmployeeFinding: false,
      userId: null
    }
  },

  getEmployees: async (ownerId) => {
    employeesStore.isEmployeesLoading = true

    const employees = await employeesApi.fetchEmployees(ownerId)

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
      employeesStore.employee.isEmployeeConnecting = true

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
      employeesStore.employee.isEmployeeConnecting = false
    }
  },

  changeEmployeeAvailability: async ({ employeeId, platformId, available }) => {
    await employeesApi.changeEmployeeActive({
      employeeUserId: employeeId,
      platformId,
      active: available
    })
  },

  deleteEmployeeFromPlatform: async ({ employeeId, platformId, userId }) => {
    try {
      await employeesApi.removeEmployee({
        employeeUserId: employeeId,
        platformId
      })
      await employeesStore.getEmployees(userId)
      toast.success('Employee successfully deleted')
    } catch ({ message }) {
      toast.error('Failed to delete employee')
    }
  },

  findEmployeeByPhone: async (phone) => {
    employeesStore.employee.isEmployeeFinding = true
    employeesStore.employee.userId = null

    const userId = await userApi.getUserByPhone(phone)

    if (!userId) {
      toast.info('Employee not found')
    } else {
      toast.info('Employee found')
    }

    employeesStore.employee.userId = userId
    employeesStore.employee.isEmployeeFinding = false
  },

  connectEmployeeToPlatform: async ({ userId, platformId }) => {
    try {
      employeesStore.employee.isEmployeeConnecting = true

      await employeesApi.addEmployeeToPlatform({ platformId, personUserId: userId })
      toast.success('User successfully added to platform')
      router.push(ROUTE_NAMES.ACCOUNT_EMPLOYEES)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      employeesStore.employee.isEmployeeConnecting = false
    }
  }
})
