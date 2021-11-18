import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { userStore } from 'store'

import * as adminApi from 'api/admin'
import { ROUTE_NAMES } from 'core/routes'

export const adminStore = makeAutoObservable({
  users: [],
  isUsersLoading: false,
  user: {},
  isUserLoading: false,
  isAdminMode: false,
  adminId: null,
  commission: {},
  isCommissionLoading: false,

  searchUsers: async ({ name, phone, role, active, date, zoneOffset, format }) => {
    if (format === 'XLSX') {
      await adminApi.getUsers({
        nameSearch: name,
        phone,
        role,
        active,
        format,
        date,
        zoneOffset
      })
      return
    }

    adminStore.isUsersLoading = true

    const users = await adminApi.getUsers({
      nameSearch: name,
      phone,
      role,
      active,
      format,
      date,
      zoneOffset
    })
    adminStore.users = users

    adminStore.isUsersLoading = false
  },

  getUser: async (id) => {
    adminStore.isUserLoading = true

    const user = await adminApi.getUser(id)

    adminStore.user = user

    adminStore.isUserLoading = false
  },

  changeUser: async ({
    userId,
    firstName,
    lastName,
    phone,
    email,
    group,
    activity,
    agentActive
  }) => {
    try {
      adminStore.isUsersLoading = true

      await adminApi.changeUser({
        userId,
        phone,
        firstName,
        lastName,
        email,
        role: group,
        active: activity,
        agentActive
      })
      toast.success('User successfully changed')
      router.push(ROUTE_NAMES.ADMIN_USERS)
    } catch ({ message }) {
      toast.error('Failed to change user')
    } finally {
      adminStore.isUserLoading = false
    }
  },

  activateAdminMode: async (userId, adminId) => {
    adminStore.isAdminMode = true
    adminStore.adminId = adminId
    userStore.id = userId
    await userStore.getUserRole(userId)
    await userStore.getPersonalData(userId)
    router.push(ROUTE_NAMES.ACCOUNT)
  },

  deactiveAdminMode: async () => {
    adminStore.isAdminMode = false
    const adminId = adminStore.adminId
    userStore.id = adminId
    await userStore.getUserRole(adminId)
    await userStore.getPersonalData(adminId)
    router.push(ROUTE_NAMES.ADMIN_USERS)
  },

  getCommission: async () => {
    adminStore.isCommissionLoading = true

    const commission = await adminApi.getCommission()
    adminStore.commission = commission

    adminStore.isCommissionLoading = false
  },

  changeCommission: async ({ personal, business, agent, loyalty }) => {
    try {
      adminStore.isCommissionLoading = true

      const commission = await adminApi.changeCommission({
        personalCommission: personal,
        businessCommission: business,
        agentCommission: agent,
        loyaltyProgramCommission: loyalty
      })
      adminStore.commission = commission

      toast.success('Commission successfully updated')
    } catch ({ message }) {
      toast.error(message)
    } finally {
      adminStore.isCommissionLoading = false
    }
  }
})
