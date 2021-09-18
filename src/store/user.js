import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import { authStore } from 'store'
import * as userApi from 'api/user'
import * as bankAccountApi from 'api/bankAccount'

export const userStore = makeAutoObservable({
  id: null,
  isIdLoading: false,
  role: null,
  personalData: {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    countryCode: '',
    city: '',
    address: ''
  },

  getMyId: async () => {
    try {
      userStore.isIdLoading = true
      const id = await userApi.getMyId()
      userStore.id = id
      authStore.isAuth = true
      return id
    } catch (e) {
      console.log('not auth')
    } finally {
      userStore.isIdLoading = false
    }
  },

  getUserRole: async (userId) => {
    const role = await userApi.getUserRole(userId)
    userStore.role = role
    return role
  },

  getPersonalData: async (userId) => {
    const personalData = await userApi.getUserInfo(userId)
    userStore.personalData = personalData
    return personalData
  },

  changePersonalData: async ({
    userId,
    email,
    firstName,
    lastName,
    birthDate,
    countryCode,
    city,
    address,
    postalCode,
    policyAgreement
  }) => {
    try {
      const newInfo = await userApi.changeUserInfo({
        userId,
        email,
        firstName,
        lastName,
        birthDate,
        countryCode,
        city,
        address,
        postalCode,
        policyAgreement
      })
      userStore.personalData = newInfo
      router.push(ROUTES.ACCOUNT)
      toast.success('Personal data successfully changed ')
      return newInfo
    } catch {
      console.log('changePersonalData error')
    }
  },

  addUserRole: async ({ userId, payer, recipient, agent, business }) => {
    await userApi.addUserRole({ userId, payer, recipient, agent, business })
    return true
  },

  identifyAccount: async ({
    userId,
    email,
    firstName,
    lastName,
    birthDate,
    countryCode,
    city,
    address,
    postalCode,
    policyAgreement,
    payer,
    recipient,
    agent,
    business,
    stripeToken
  }) => {
    await userApi.changeUserInfo({
      userId,
      email,
      firstName,
      lastName,
      birthDate,
      countryCode,
      city,
      address,
      postalCode,
      policyAgreement
    })
    await userApi.addUserRole({ userId, payer, recipient, agent, business })
    await bankAccountApi.addBankAccount({ userId, stripeToken })
    await userApi.getUserRole(userId)
  }
})
