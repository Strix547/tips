import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import { userStore } from 'store'
import * as qrCodesApi from 'api/qrCodes'

export const qrCodesStore = makeAutoObservable({
  qrCodes: [],
  isQrCodesLoading: false,
  qrCode: {
    name: '',
    company: { name: '', logo: '' },
    amountPresets: [],
    impressions: false,
    rating: false,
    reviews: false,
    image: '',
    bgColor: '',
    buttonColor: ''
  },
  isQrCodeLoading: false,
  isQrCodeCreating: false,

  setQrCode: ({ amountPresets, impressions, bgColor, buttonColor }) => {
    qrCodesStore.qrCode = {
      amountPresets,
      impressions,
      bgColor,
      buttonColor
    }
  },

  getQrCode: async (qrId) => {
    const qr = await qrCodesApi.getQrCodeData(qrId)
    qrCodesStore.qrCode = qr
  },

  getQrCodes: async (userId) => {
    qrCodesStore.isQrCodesLoading = true
    const qrCodes = await qrCodesApi.getQrCodes(userId)
    qrCodesStore.qrCodes = qrCodes
    qrCodesStore.isQrCodesLoading = false
  },

  createQrCode: async ({ userId, name, amountPresets, impressions, bgColor, buttonColor }) => {
    try {
      const qrId = await qrCodesApi.createQrCodeId(userId)
      await qrCodesApi.changeQrCode({
        id: qrId,
        name,
        amountPresets,
        impressions,
        bgColor,
        buttonColor
      })
      router.push(ROUTES.ACCOUNT_QR_CODES)
      toast.success('Qr successfully created')
    } catch (e) {
      toast.error(e.message)
    }
  },

  changeQrCode: async ({ id, name, amountPresets, impressions, bgColor, buttonColor }) => {
    await qrCodesApi.changeQrCode({
      id,
      name,
      amountPresets,
      impressions,
      bgColor,
      buttonColor
    })
    const qrCodes = await qrCodesApi.getQrCodes(userStore.id)
    qrCodesStore.qrCodes = qrCodes

    router.push(ROUTES.ACCOUNT_QR_CODES)
    toast.success('Qr successfully changed')
  },

  deleteQrCode: async (id) => {
    try {
      await qrCodesApi.removeQrCode(id)
      const qrCodes = await qrCodesApi.getQrCodes(userStore.id)
      qrCodesStore.qrCodes = qrCodes
      toast.success('Qr successfully deleted')
    } catch (e) {
      console.log('delete qr error', e)
    }
  }
})
