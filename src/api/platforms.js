import { API } from 'core/axios'

import { PLATFORM_TYPES } from 'core/constants'
import { handleResponse } from 'utils'

const root = '/business-platform'

const transformPlatformQrCode = ({
  presetPaymentSizes,
  reviews,
  rating,
  smiles,
  logoFileUrl,
  backgroundHexColor,
  buttonHexColor
}) => {
  return {
    reviews,
    rating,
    bgColor: backgroundHexColor,
    btnColor: buttonHexColor,
    amountPresets: presetPaymentSizes,
    impression: smiles,
    logo: logoFileUrl && `${window.location.origin}${logoFileUrl}`
  }
}

const transformPlatform = ({
  platformId,
  name,
  platformType,
  address,
  active,
  employeeCount,
  monthIncome,
  yearIncome
}) => {
  return {
    id: platformId,
    name,
    address,
    type: platformType,
    active,
    employeeCount,
    tipsAmountMonth: monthIncome / 100,
    tipsAmountYear: yearIncome / 100
  }
}

const transformReview = ({
  dateTime,
  smile,
  rating,
  reviews,
  firstName,
  lastName,
  title,
  platformId
}) => {
  return {
    dateTime: new Date(dateTime),
    platformId,
    platformName: title,
    impression: smile,
    rating,
    comment: reviews,
    firstName,
    lastName
  }
}

export const createPlatform = async (userId) => {
  const {
    data: { platformId }
  } = await API.post(`${root}/create`, { ownerUserId: userId })

  return platformId
}

export const changePlatform = async ({
  platformId,
  title,
  address,
  platformType,
  platformRevenueShare,
  bankAccountId,
  active
}) => {
  const labelOfTypeConstant = PLATFORM_TYPES.find(({ value }) => value === platformType)?.label

  const res = await API.post(`${root}/${platformId}/change`, {
    title,
    address,
    platformType: labelOfTypeConstant || platformType,
    platformRevenueShare,
    bankAccountId,
    active
  })

  handleResponse(res)
}

export const removePlatform = async (id) => {
  const res = await API.post(`${root}/${id}/remove`)
  handleResponse(res)
}

export const getPlatformQrCode = async (id) => {
  const { data: qrCode } = await API.get(`/business-payment-page-template/${id}`)

  return transformPlatformQrCode(qrCode)
}

export const changePlatformQrCode = async ({
  platformId,
  presetPaymentSizes,
  reviews,
  smiles,
  rating,
  logoFileId,
  backgroundHexColor,
  buttonHexColor
}) => {
  const res = await API.post(`/business-payment-page-template/${platformId}/change`, {
    platformId,
    presetPaymentSizes,
    reviews,
    smiles,
    rating,
    logoFileId,
    backgroundHexColor,
    buttonHexColor
  })

  handleResponse(res)
}

export const getPlatform = async (id) => {
  const { data: platform } = await API.get(`${root}/${id}`)

  const { active, address, bankAccountId, ownerUserId, platformRevenueShare, platformType, title } =
    platform

  return {
    name: title,
    address,
    type: platformType,
    active,
    bankAccountId,
    ownerUserId,
    incomePercentage: platformRevenueShare
  }
}

export const getPlatforms = async (userId) => {
  const { data: platforms } = await API.get(`${root}`, { params: { 'owner-user-id': userId } })

  return platforms?.map((platform) => transformPlatform(platform))
}

export const getPlatformTitles = async ({ platformTitleSearch, platformOwnerUserId }) => {
  const { data: platforms } = await API.get('/platform-by-title', {
    params: { platformTitleSearch, platformOwnerUserId }
  })

  return platforms
}

export const getReviews = async ({
  ownerUserId,
  platformId,
  rating,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  const { data: reviews } = await API.get('/reviews', {
    params: { ownerUserId, platformId, rating, zoneOffset, period, periodFrom, periodTo }
  })

  return reviews?.map((review) => transformReview(review))
}
