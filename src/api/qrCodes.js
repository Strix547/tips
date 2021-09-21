import { API } from 'core/axios'

const root = '/person-payment-page-template'

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
    impressions: smiles,
    img: qrImagePngRef
  }
}

export const getQrCodes = async (userId) => {
  const { data } = await API.get(`${root}`, { params: { 'person-user-id': userId } })
  return data.map((qr) => transformQrData(qr))
}

export const createQrCodeId = async (userId) => {
  try {
    const { data } = await API.post(`${root}/create`, { personUserId: userId })
    return data.personPaymentPageTemplateId
  } catch ({ response }) {
    if (response.code === 'LIMIT_OF_PERSON_PAYMENT_PAGE_TEMPLATES') {
      throw new Error('Max number of qr-codes')
    }
  }
}

export const getQrCodeData = async (id) => {
  const { data } = await API.get(`${root}/${id}`)
  return transformQrData(data)
}

export const changeQrCode = async ({ id, name, amountPresets, impressions }) => {
  return API.post(`${root}/${id}/change`, {
    name,
    presetPaymentSizes: amountPresets,
    smiles: impressions
  })
}

export const removeQrCode = async (id) => {
  return API.post(`${root}/${id}/remove`)
}
