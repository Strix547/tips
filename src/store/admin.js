import { makeAutoObservable } from 'mobx'

import * as adminApi from 'api/admin'

export const adminStore = makeAutoObservable({
  users: [],
  isUsersLoading: [],

  searchUsers: async ({ name, phone, role, active, date, zoneOffset, format }) => {
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
  }
})
