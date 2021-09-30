import { makeAutoObservable } from 'mobx'
import router from 'next/router'

import { ROUTES } from 'core/routes'
import * as statisticsApi from 'api/statistics'

export const statisticsStore = makeAutoObservable({
  incomeStatistics: {
    table: [],
    diagram: []
  },
  isIncomeStatisticsLoading: false,

  getUserIncomeStatistics: async ({
    userId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    if (format === 'XLSX') {
      statisticsApi.getUserIncomeStatistics({
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
    const incomeStatistics = await statisticsApi.getUserIncomeStatistics({
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
  }
})
