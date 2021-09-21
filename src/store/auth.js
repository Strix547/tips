import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import { userStore } from 'store'
import * as authApi from 'api/auth'
import * as userApi from 'api/user'

export const authStore = makeAutoObservable({
  isAuth: false,
  isCodeSending: false,

  sendCode: async (phone) => {
    try {
      authStore.isCodeSending = true
      await authApi.sendCode(phone)
      return true
    } catch ({ message }) {
      toast.error(message)
      return false
    } finally {
      authStore.isCodeSending = false
    }
  },

  auth: async ({ phone, code, remember }) => {
    try {
      await authApi.confirmCode({ phone, code, remember })
      const userId = await userStore.getMyId()
      authStore.isAuth = true
      router.push(ROUTES.ACCOUNT)
      userStore.getUserRole(userId)
      userStore.getPersonalData(userId)
      return true
    } catch ({ message }) {
      toast.error(message)
      return false
    }
  },

  signOut: async () => {
    await authApi.signOut()
    // reset cookie
    await userApi.getMyId()
    router.push('/')
    authStore.isAuth = false
    userStore.id = null
    userStore.role = null
    userStore.personalData = {}
  }
})
