import { makeAutoObservable } from 'mobx'

import * as paymentApi from 'api/payment'

export const paymentStore = makeAutoObservable({
  individualData: {
    name: '',
    avatar: '',
    firstName: '',
    lastName: '',
    amountPresets: [],
    impressions: false,
    bgColor: '',
    buttonColor: ''
  },

  getIndividualPaymentData: async (qrId) => {
    const paymentData = await paymentApi.getIndividualPaymentData(qrId)
    paymentStore.individualData = paymentData
  }
})
