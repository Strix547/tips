import { makeAutoObservable } from 'mobx'

import * as paymentApi from 'api/payment'

export const paymentStore = makeAutoObservable({
  paymentData: {
    name: '',
    avatar: '',
    firstName: '',
    lastName: '',
    amountPresets: [],
    impression: false
  },
  isPaymentDataLoading: false,

  getIndividualPaymentData: async (qrId) => {
    paymentStore.isPaymentDataLoading = true

    const paymentData = await paymentApi.getIndividualPaymentData(qrId)
    paymentStore.paymentData = paymentData

    paymentStore.isPaymentDataLoading = false
  },

  payTipsIndividual: async ({ qrId, userId, tipAmount, impression }) => {
    const payUrl = await paymentApi.payTipsIndividual({
      paymentPageId: qrId,
      userId,
      sum: tipAmount * 100,
      smile: impression
    })

    window.location.replace(payUrl)
  },

  payTipsPlatform: async ({ qrId, tipAmount, impression, comment, rating }) => {
    const payUrl = await paymentApi.payTipsPlatform({
      paymentPageId: qrId,
      sum: tipAmount * 100,
      smile: impression,
      reviews: comment,
      rating
    })

    window.location.replace(payUrl)
  }
})
