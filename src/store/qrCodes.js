import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'
import { userStore } from 'store'

import * as qrCodesApi from 'api/qrCodes'
import * as platformsApi from 'api/platforms'
import * as userApi from 'api/user'

export const qrCodesStore = makeAutoObservable({
  qrCodesIndividuals: [],
  qrCodesPlatforms: [],
  isQrCodesLoading: false,
  qrCode: {
    name: '',
    company: { name: '', logo: '' },
    amountPresets: [],
    impression: false,
    rating: false,
    reviews: false,
    image: '',
    bgColor: '',
    btnColor: ''
  },
  isQrCodeLoading: false,
  isQrCodeCreating: false,

  setQrCode: ({ amountPresets, impression, bgColor, buttonColor }) => {
    qrCodesStore.qrCode = {
      amountPresets,
      impression,
      bgColor,
      buttonColor
    }
  },

  getQrCodeIndividual: async (qrId) => {
    qrCodesStore.isQrCodeLoading = true

    const qr = await qrCodesApi.getQrCodeIndividual(qrId)
    qrCodesStore.qrCode = qr

    qrCodesStore.isQrCodeLoading = false
    return qr
  },

  getPlatformQrCode: async (platformId) => {
    qrCodesStore.isQrCodeLoading = true

    const qr = await platformsApi.getPlatformQrCode(platformId)
    qrCodesStore.qrCode = qr

    qrCodesStore.isQrCodeLoading = false
    return qr
  },

  getQrCodesIndividual: async (userId) => {
    qrCodesStore.isQrCodesLoading = true
    const qrCodes = await qrCodesApi.getQrCodesIndividual(userId)
    qrCodesStore.qrCodesIndividuals = qrCodes
    qrCodesStore.isQrCodesLoading = false
  },

  getQrCodesPlatform: async (userId) => {
    qrCodesStore.isQrCodesLoading = true
    const qrCodes = await qrCodesApi.getQrCodesPlatform(userId)
    qrCodesStore.qrCodesPlatforms = qrCodes
    qrCodesStore.isQrCodesLoading = false
  },

  createIndividualQrCode: async ({ userId, name, amountPresets, impression }) => {
    try {
      const qrId = await qrCodesApi.createIndividualQrCode(userId)
      await qrCodesApi.changeQrCodeIndividual({
        id: qrId,
        name,
        amountPresets,
        impression
      })

      qrCodesStore.getQrCodesIndividual(userStore.id)
      router.push(ROUTE_NAMES.ACCOUNT_QR_CODES)
      toast.success('QR successfully created')
    } catch ({ message }) {
      toast.error(message)
    }
  },

  changeQrCodeIndividual: async ({ id, name, amountPresets, impression }) => {
    await qrCodesApi.changeQrCodeIndividual({
      id,
      name,
      amountPresets,
      impression
    })
    qrCodesStore.getQrCodesIndividual(userStore.id)
    router.push(ROUTE_NAMES.ACCOUNT_QR_CODES)
    toast.success('QR successfully changed')
  },

  changePlatformQrCode: async ({
    platformId,
    amountPresets,
    reviews,
    impression,
    rating,
    bgColor,
    btnColor,
    logo
  }) => {
    const getCompanyLogoFileId = async (logo) => {
      const formData = new FormData()
      formData.append('file', logo)
      const { fileId } = await userApi.uploadFile(formData)
      return fileId
    }

    try {
      await platformsApi.changePlatformQrCode({
        platformId,
        presetPaymentSizes: amountPresets,
        reviews,
        smiles: impression,
        rating,
        logoFileId: logo && (await getCompanyLogoFileId(logo)),
        backgroundHexColor: bgColor,
        buttonHexColor: btnColor
      })
      router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS)
      toast.success('QR code successfully changed')
    } catch ({ message }) {
      toast.error('Failed to change QR code')
    }
  },

  deleteQrCode: async (id) => {
    try {
      await qrCodesApi.removeQrCode(id)
      qrCodesStore.getQrCodesIndividual(userStore.id)
      toast.success('QR successfully deleted')
    } catch ({ message }) {
      toast.error(message)
    }
  },

  createPlatform: async ({
    platformId,
    amountPresets,
    reviews,
    impression,
    rating,
    bgColor,
    buttonColor,
    logoFileId
  }) => {
    try {
      await platformsApi.changePlatformQrCode({
        platformId,
        presetPaymentSizes: amountPresets,
        reviews,
        smiles: impression,
        rating,
        logoFileId,
        backgroundHexColor: bgColor,
        buttonHexColor: buttonColor
      })
      router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS)
      toast.success('QR code successfully created')
    } catch ({ message }) {
      toast.error('Failed to create QR code')
    }
  }
})
