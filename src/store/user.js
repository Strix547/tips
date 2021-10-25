import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { CURRENCIES } from 'core/constants'
import { ROUTE_NAMES } from 'core/routes'
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
    currency: { label: '', value: '' }
  },

  getMyId: async () => {
    try {
      userStore.isIdLoading = true
      const id = await userApi.getMyId()

      if (id) {
        userStore.id = id
        authStore.isAuth = true
      } else {
        userStore.id = 0
      }

      return id
    } catch ({ message }) {
      toast.error(message)
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
        label: CURRENCIES.find(({ value }) => personalData.currency === value)?.symbol,
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
      userStore.isPersonalDataLoading = true
      const getAvatarFileId = async (avatar) => {
        const formData = new FormData()
        formData.append('file', avatar)
        const { fileId } = await userApi.uploadFile(formData)
        return fileId
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
        avatarFileId: avatar && (await getAvatarFileId(avatar))
      })
      userStore.getPersonalData(userId)
      router.push(ROUTE_NAMES.ACCOUNT)
      toast.success('Personal data successfully changed')
      return newInfo
    } catch ({ message }) {
      toast.error(message)
    } finally {
      userStore.isPersonalDataLoading = false
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
      router.push(ROUTE_NAMES.ACCOUNT)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      userStore.isIdentifyProcessing = false
    }
  },

  upgradeAccountToBusiness: async (userId) => {
    try {
      await userApi.upgradeAccountToBusiness(userId)
      await userStore.getUserRole(userId)
      router.push(ROUTE_NAMES.ACCOUNT)
      toast.success('Account upgrated to business')
    } catch ({ message }) {
      toast.error(message)
    }
  }
})
