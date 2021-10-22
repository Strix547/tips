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

  getIndividualQrCode: async (qrId) => {
    qrCodesStore.isQrCodeLoading = true

    const qr = await qrCodesApi.getIndividualQrCode(qrId)
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

  getIndividualQrCodes: async (userId) => {
    qrCodesStore.isQrCodesLoading = true
    const qrCodes = await qrCodesApi.getIndividualQrCodes(userId)
    qrCodesStore.qrCodesIndividuals = qrCodes
    qrCodesStore.isQrCodesLoading = false
  },

  getPlatformQrCodes: async (userId) => {
    qrCodesStore.isQrCodesLoading = true
    const qrCodes = await qrCodesApi.getPlatformQrCodes(userId)
    qrCodesStore.qrCodesPlatforms = qrCodes
    qrCodesStore.isQrCodesLoading = false
  },

  createIndividualQrCode: async ({ userId, name, amountPresets, impression }) => {
    try {
      const qrId = await qrCodesApi.createIndividualQrCode(userId)
      await qrCodesApi.changeIndividualQrCode({
        id: qrId,
        name,
        amountPresets,
        impression
      })

      qrCodesStore.getIndividualQrCodes(userStore.id)
      router.push(ROUTE_NAMES.ACCOUNT_QR_CODES)
      toast.success('QR successfully created')
    } catch ({ message }) {
      toast.error(message)
    }
  },

  changeIndividualQrCode: async ({ id, name, amountPresets, impression }) => {
    await qrCodesApi.changeIndividualQrCode({
      id,
      name,
      amountPresets,
      impression
    })
    qrCodesStore.getIndividualQrCodes(userStore.id)
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
      qrCodesStore.getIndividualQrCodes(userStore.id)
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
