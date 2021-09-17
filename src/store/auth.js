import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import * as authApi from 'api/auth'
import { userStore } from 'store'

export const authStore = makeAutoObservable({
  isAuth: false,
  isCodeSending: false,
  isCodeSended: false,

  setAuth: (value) => {
    authStore.isAuth = value
  },

  sendCode: async (phone) => {
    try {
      authStore.isCodeSended = false
      authStore.isCodeSending = true
      await authApi.sendCode(phone)
      authStore.isCodeSended = true
    } catch ({ message }) {
      toast.error(message)
    } finally {
      authStore.isCodeSending = false
    }
  },

  auth: async ({ phone, code, remember }) => {
    await authApi.confirmCode({ phone, code, remember })
    const userId = await userStore.getMyId()
    userStore.getUserRole(userId)
    userStore.getPersonalData(userId)

    authStore.isAuth = true
    router.push(ROUTES.ACCOUNT)
  },

  signOut: async () => {
    await authApi.signOut()
    authStore.isAuth = false
    userStore.id = null
    userStore.role = null
    userStore.personalData = {}
    router.push('/')
  }
})
