import { API } from 'core/axios'

import { handleResponse } from 'utils'

const individualRoot = '/person-payment-page-template'

const transformQrData = ({
  name,
  personUserId,
  paymentPageId,
  personPaymentPageTemplateId,
  presetPaymentSizes,
  smiles,
  qrImagePngRef
}) => {
  return {
    id: paymentPageId,
    templateId: personPaymentPageTemplateId,
    userId: personUserId,
    name,
    amountPresets: presetPaymentSizes,
    impression: smiles,
    img: qrImagePngRef
  }
}

export const getIndividualQrCodes = async (userId) => {
  const { data } = await API.get(`${individualRoot}`, { params: { 'person-user-id': userId } })
  return data.map((qr) => transformQrData(qr))
}

export const getPlatformQrCodes = async (userId) => {
  const { data } = await API.get('/person-business-payment-page', {
    params: { 'person-user-id': userId }
  })
  return data.map((qr) => transformQrData(qr))
}

export const createIndividualQrCode = async (userId) => {
  const res = await API.post(`${individualRoot}/create`, { personUserId: userId })

  const errorCodes = [
    { label: 'Max number of qr-codes', code: 'LIMIT_OF_PERSON_PAYMENT_PAGE_TEMPLATES' },
    {
      label: 'Need connect at least one bank account',
      code: 'AT_LEAST_ONE_BANK_ACCOUNT_MUST_EXISTS'
    }
  ]

  return handleResponse(res, errorCodes)?.personPaymentPageTemplateId
}

export const getIndividualQrCode = async (id) => {
  const { data } = await API.get(`${individualRoot}/${id}`)
  return transformQrData(data)
}

export const changeIndividualQrCode = async ({ id, name, amountPresets, impression }) => {
  return API.post(`${individualRoot}/${id}/change`, {
    name,
    presetPaymentSizes: amountPresets,
    smiles: impression
  })
}

export const removeQrCode = async (id) => {
  return API.post(`${individualRoot}/${id}/remove`)
}
