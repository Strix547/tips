import { API } from 'core/axios'

const root = '/payment-page'

const transformPaymetData = ({
  type,
  paymentPageId,
  presetPaymentSizes,
  smiles,
  backgroundHexColor,
  buttonHexColor
}) => {
  return {
    type,
    pageId: paymentPageId,
    amountPresets: presetPaymentSizes,
    impressions: smiles,
    bgColor: backgroundHexColor,
    buttonColor: buttonHexColor
  }
}

export const getIndividualPaymentData = async (qrId) => {
  const { data } = await API.get(`${root}`, { params: { paymentPageId: qrId } })
  return transformPaymetData(data)
}
