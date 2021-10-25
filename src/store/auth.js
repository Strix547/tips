import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'
import { userStore } from 'store'
import * as authApi from 'api/auth'
import * as userApi from 'api/user'

export const authStore = makeAutoObservable({
  isAuth: false,
  isCodeSending: false,
  step: 'phone',
  authData: {
    firstName: '',
    email: '',
    phone: ''
  },

  setAuthData: ({ firstName, email, phone }) => {
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)

    authStore.authData = { firstName, email, phone }
  },

  setStep: (step) => {
    authStore.step = step
  },

  sendCode: async (phone) => {
    try {
      authStore.isCodeSending = true
      await authApi.sendCode(phone)
      authStore.step = 'code'
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
      const userRole = await userStore.getUserRole(userId)
      await userStore.getPersonalData(userId)
      authStore.isAuth = true

      if (userRole === 'UNVERIFIED') {
        router.push(ROUTE_NAMES.ACCOUNT_IDENTIFY)
      } else {
        router.push(ROUTE_NAMES.ACCOUNT)
      }

      return true
    } catch ({ message }) {
      toast.error(message)
      return false
    }
  },

  signOut: async () => {
    await authApi.signOut()
    await userApi.getMyId()

    authStore.isAuth = false
    authStore.step = 'phone'

    router.push(ROUTE_NAMES.RECIPIENTS)
  }
})
