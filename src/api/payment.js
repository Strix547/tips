import { API } from 'core/axios'

const root = '/payment-page'

const transformIndividualPaymentData = ({
  type,
  avatarFileUrl,
  paymentPageId,
  name,
  presetPaymentSizes,
  firstName,
  lastName,
  smiles,
  logoFileUrl,
  reviews,
  rating,
  backgroundHexColor,
  buttonHexColor,
  currency
}) => {
  return {
    type,
    pageId: paymentPageId,
    avatar: avatarFileUrl && `${window.location.origin}${avatarFileUrl}`,
    logo: logoFileUrl && `${window.location.origin}${logoFileUrl}`,
    name,
    firstName,
    lastName,
    amountPresets: presetPaymentSizes,
    impression: smiles,
    comment: reviews,
    rating,
    bgColor: backgroundHexColor,
    btnColor: buttonHexColor,
    currency
  }
}

export const getIndividualPaymentData = async (qrId) => {
  const { data } = await API.get(`${root}/${qrId}`)
  return transformIndividualPaymentData(data)
}

export const payTipsIndividual = async ({ paymentPageId, sum, smile, userId }) => {
  const { data } = await API.post('/pay-personal', { paymentPageId, sum, smile, userId })

  return data.payUrl
}

export const payTipsPlatform = async ({ paymentPageId, sum, smile, userId, reviews, rating }) => {
  const { data } = await API.post('/pay-business', {
    paymentPageId,
    sum,
    smile,
    userId,
    reviews,
    rating
  })

  return data.payUrl
}
