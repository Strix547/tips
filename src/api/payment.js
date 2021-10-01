import { API } from 'core/axios'

const root = '/payment-page'

const transformPaymetData = ({
  type,
  avatarFileUrl,
  paymentPageId,
  name,
  presetPaymentSizes,
  firstName,
  lastName,
  smiles,
  backgroundHexColor,
  buttonHexColor
}) => {
  return {
    type,
    pageId: paymentPageId,
    avatar: avatarFileUrl && `${window.location.origin}${avatarFileUrl}`,
    name,
    firstName,
    lastName,
    amountPresets: presetPaymentSizes,
    impressions: smiles,
    bgColor: backgroundHexColor,
    buttonColor: buttonHexColor
  }
}

export const getIndividualPaymentData = async (qrId) => {
  const { data } = await API.get(`${root}/${qrId}`)
  return transformPaymetData(data)
}
