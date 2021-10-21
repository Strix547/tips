import { makeAutoObservable } from 'mobx'

import * as statisticsApi from 'api/statistics'

export const statisticsStore = makeAutoObservable({
  incomeStatistics: {
    table: [],
    diagram: []
  },
  isIncomeStatisticsLoading: false,

  getIndividualIncomeStatistics: async ({
    userId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    if (format === 'XLSX') {
      statisticsApi.getIndividualIncomeStatistics({
        userId,
        currency,
        format,
        period,
        zoneOffset,
        periodFrom,
        periodTo
      })

      return
    }

    statisticsStore.isIncomeStatisticsLoading = true
    const incomeStatistics = await statisticsApi.getIndividualIncomeStatistics({
      userId,
      currency,
      format,
      period,
      zoneOffset,
      periodFrom,
      periodTo
    })
    statisticsStore.incomeStatistics = incomeStatistics
    statisticsStore.isIncomeStatisticsLoading = false
  },

  getQrIncomeStatistics: async ({
    qrId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    if (format === 'XLSX') {
      statisticsApi.getQrIncomeStatistics({
        qrId,
        currency,
        format,
        period,
        zoneOffset,
        periodFrom,
        periodTo
      })

      return
    }

    statisticsStore.isIncomeStatisticsLoading = true
    const incomeStatistics = await statisticsApi.getQrIncomeStatistics({
      qrId,
      currency,
      format,
      period,
      zoneOffset,
      periodFrom,
      periodTo
    })
    statisticsStore.incomeStatistics = incomeStatistics
    statisticsStore.isIncomeStatisticsLoading = false
  },

  getBusinessIncomeStatistics: async ({
    userId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    if (format === 'XLSX') {
      statisticsApi.getBusinessIncomeStatistics({
        userId,
        currency,
        format,
        period,
        zoneOffset,
        periodFrom,
        periodTo
      })

      return
    }

    statisticsStore.isIncomeStatisticsLoading = true
    const incomeStatistics = await statisticsApi.getBusinessIncomeStatistics({
      userId,
      currency,
      format,
      period,
      zoneOffset,
      periodFrom,
      periodTo
    })
    statisticsStore.incomeStatistics = incomeStatistics
    statisticsStore.isIncomeStatisticsLoading = false
  }
})
