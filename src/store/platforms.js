import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'
import router from 'next/router'

import { ROUTE_NAMES } from 'core/routes'

import * as platformsApi from 'api/platforms'

export const platformsStore = makeAutoObservable({
  platforms: [],
  platform: {},
  platformName: '',
  platformSearchList: [],
  reviews: [],
  isPlatformsLoading: false,
  isPlatformLoading: false,
  isPlatformNameLoading: false,
  isPlatformSearchListLoading: false,
  isReviewsLoading: false,

  createPlatform: async ({
    userId,
    name,
    address,
    type,
    incomePercentage,
    selectedBankAccountId
  }) => {
    try {
      const platformId = await platformsApi.createPlatform(userId)
      await platformsApi.changePlatform({
        platformId,
        title: name,
        address,
        platformType: type,
        platformRevenueShare: incomePercentage,
        bankAccountId: selectedBankAccountId
      })
      router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS)
      toast.success('Platform created')
    } catch ({ message }) {
      toast.error('Failed to create platform')
    }
  },

  changePlatform: async ({
    platformId,
    name,
    address,
    type,
    incomePercentage,
    selectedBankAccountId
  }) => {
    try {
      await platformsApi.changePlatform({
        platformId,
        title: name,
        address,
        platformType: type,
        platformRevenueShare: incomePercentage,
        bankAccountId: selectedBankAccountId
      })
      router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS)
      toast.success('Platform successfully changed')
    } catch ({ message }) {
      toast.error('Failed to change platform')
    }
  },

  getPlatform: async (id) => {
    platformsStore.isPlatformLoading = true

    const platform = await platformsApi.getPlatform(id)
    platformsStore.platform = platform

    platformsStore.isPlatformLoading = false
    return platform
  },

  getPlatforms: async (userId) => {
    platformsStore.isPlatformsLoading = true

    const platforms = await platformsApi.getPlatforms(userId)
    platformsStore.platforms = platforms

    platformsStore.isPlatformsLoading = false
  },

  getPlatformName: async (platformId) => {
    platformsStore.isPlatformNameLoading = true

    const { name } = await platformsApi.getPlatform(platformId)

    platformsStore.platformName = name
    platformsStore.isPlatformNameLoading = false
    return name
  },

  changePlatformAvailability: async ({ id, available }) => {
    await platformsApi.changePlatform({
      platformId: id,
      active: available
    })
  },

  searchPlatforms: async ({ text, userId }) => {
    platformsStore.isPlatformSearchListLoading = true

    const platforms = await platformsApi.getPlatformTitles({
      platformTitleSearch: text,
      platformOwnerUserId: userId
    })
    platformsStore.platformSearchList = platforms

    platformsStore.isPlatformSearchListLoading = false
    return platforms
  },

  getReviews: async ({ userId, platformId, rating, zoneOffset, period, periodFrom, periodTo }) => {
    platformsStore.isReviewsLoading = true

    const reviews = await platformsApi.getReviews({
      ownerUserId: userId,
      platformId,
      rating,
      zoneOffset,
      period,
      periodFrom,
      periodTo
    })

    platformsStore.reviews = reviews
    platformsStore.isReviewsLoading = false

    return reviews
  },

  deletePlatform: async (id) => {
    try {
      await platformsApi.removePlatform(id)
      router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS)
      toast.success('Platform successfully deleted')
    } catch ({ message }) {
      toast.error('Failed to remove platform')
    }
  }
})
