import { API } from 'core/axios'

const root = '/person-payment-page-template'

const transformQrData = ({
  personUserId,
  paymentPageId,
  presetPaymentSizes,
  smiles,
  backgroundHexColor,
  buttonHexColor,
  qrImagePngRef
}) => {
  return {
    id: paymentPageId,
    userId: personUserId,
    amountPresets: presetPaymentSizes,
    impressions: smiles,
    bgColor: backgroundHexColor,
    buttonColor: buttonHexColor,
    image: qrImagePngRef
  }
}

export const getQrCodes = async (userId) => {
  const { data } = await API.get(`${root}s`, { params: { 'person-user-id': userId } })
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

export const changeQrCode = async ({ id, amountPresets, impressions, bgColor, buttonColor }) => {
  return API.post(`${root}/${id}/change`, {
    presetPaymentSizes: amountPresets,
    smiles: impressions,
    backgroundHexColor: bgColor,
    buttonHexColor: buttonColor
  })
}

export const removeQrCode = async (id) => {
  return API.post(`${root}/${id}/remove`)
}
