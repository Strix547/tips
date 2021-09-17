import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import * as qrCodesApi from 'api/qrCodes'

export const qrCodesStore = makeAutoObservable({
  qrCodes: [],
  isQrCodesLoading: false,
  qrCode: {
    id: '',
    userId: '',
    amountPresets: [],
    impressions: false,
    image: '',
    bgColor: '',
    buttonColor: ''
  },
  isQrCodeLoading: false,
  isQrCodeCreating: false,
  qrTemplate: {
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

  setQrTemplate: ({ amountPresets, impressions, bgColor, buttonColor }) => {
    qrCodesStore.qrTemplate = {
      amountPresets,
      impressions,
      bgColor,
      buttonColor
    }
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
    router.push(ROUTES.ACCOUNT_QR_CODES)
    toast.success('Qr successfully changed')
  },

  deleteQrCode: async (id) => {
    try {
      await qrCodesApi.removeQrCode(id)
      toast.success('Qr successfully deleted')
    } catch (e) {
      console.log('delete qr error', e)
    }
  }
})
