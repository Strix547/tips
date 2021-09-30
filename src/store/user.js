import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { CURRENCIES } from 'core/constants'
import { ROUTES } from 'core/routes'
import { authStore } from 'store'
import * as userApi from 'api/user'
import * as bankAccountApi from 'api/bankAccount'

export const userStore = makeAutoObservable({
  id: null,
  isIdLoading: false,
  isPersonalDataLoading: false,
  isIdentifyProcessing: false,
  role: null,
  personalData: {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    countryCode: '',
    city: '',
    address: '',
    currency: ''
  },

  getMyId: async () => {
    try {
      userStore.isIdLoading = true
      const id = await userApi.getMyId()
      userStore.id = id
      authStore.isAuth = true
      return id
    } catch ({ message }) {
      console.log(message)
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
    userStore.isPersonalDataLoading = true
    const personalData = await userApi.getUserInfo(userId)

    userStore.personalData = {
      ...personalData,
      currency: {
        label: CURRENCIES.find(({ value }) => personalData.currency === value).symbol,
        value: personalData.currency
      }
    }

    userStore.isPersonalDataLoading = false
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
    policyAgreement,
    avatar
  }) => {
    try {
      const getAvatarFileId = async (avatar) => {
        const formData = new FormData()
        formData.append('file', avatar)
        const data = await userApi.uploadFile(formData)
        console.log(data)
        return data
      }

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
        policyAgreement,
        avatar: avatar && (await getAvatarFileId(avatar))
      })
      userStore.getPersonalData(userId)
      router.push(ROUTES.ACCOUNT)
      toast.success('Personal data successfully changed')
      return newInfo
    } catch ({ message }) {
      toast.error(message)
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
    userStore.isIdentifyProcessing = true

    try {
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
      await userStore.getUserRole(userId)
      await userStore.getPersonalData(userId)
      router.push(ROUTES.ACCOUNT)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      userStore.isIdentifyProcessing = false
    }
  }
})
