import { makeAutoObservable } from 'mobx'

import { authStore } from 'store'
import * as userApi from 'api/user'
import * as bankAccountApi from 'api/bankAccount'

export const userStore = makeAutoObservable({
  id: null,
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
      const id = await userApi.getMyId()
      userStore.id = id
      authStore.isAuth = true
      return id
    } catch (e) {
      console.log('not auth')
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
    userStore.personalInfo = newInfo
    return newInfo
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
