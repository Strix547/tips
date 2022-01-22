import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'
import { authStore } from 'store'
import { getCurrencySymbol } from 'utils'
import * as userApi from 'api/user'
import * as bankAccountApi from 'api/bankAccount'

export const userStore = makeAutoObservable({
  id: null,
  isIdLoading: false,
  isPersonalDataLoading: false,
  isIdentifyProcessing: false,
  isRequisitesDataLoading: false,
  role: null,
  isRoleLoading: false,
  personalData: {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    countryCode: '',
    city: '',
    address: '',
    currency: { label: '', value: '' },
    phone: ''
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
    userStore.isRoleLoading = true
    const role = await userApi.getUserRole(userId)
    userStore.role = role
    userStore.isRoleLoading = false
    return role
  },

  getPersonalData: async (userId) => {
    userStore.isPersonalDataLoading = true
    const personalData = await userApi.getUserInfo(userId)
    userStore.personalData = {
      ...personalData,
      currency: {
        symbol: getCurrencySymbol(personalData.currency),
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
    avatar,
    accountToken
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
        avatarFileId: avatar && (await getAvatarFileId(avatar)),
        accountToken
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

  identifyAccount: async ({ userId, email, firstName, lastName, birthDate }) => {
    userStore.isIdentifyProcessing = true

    try {
      await userApi.changeUserInfo({
        userId,
        firstName,
        lastName,
        birthDate,
        email
      })
      await userStore.getUserRole(userId)
      await userStore.getPersonalData(userId)
      router.push(ROUTE_NAMES.ACCOUNT_REQUISITES)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      userStore.isIdentifyProcessing = false
    }
  },

  addRequisitesData: async ({
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
    bankAccountToken,
    accountToken
  }) => {
    userStore.isRequisitesDataLoading = true

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
        policyAgreement,
        accountToken
      })
      await bankAccountApi.addBankAccount({ userId, bankAccountToken })
      await userStore.getUserRole(userId)
      await userStore.getPersonalData(userId)
      router.push(ROUTE_NAMES.ACCOUNT)
    } catch ({ message }) {
      toast.error(message)
    } finally {
      userStore.isRequisitesDataLoading = false
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
  },

  changeIsIdentifyProcessing: (value) => {
    userStore.isIdentifyProcessing = value
  }
})
