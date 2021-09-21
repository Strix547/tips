import { makeAutoObservable } from 'mobx'

import * as statisticsApi from 'api/statistics'

export const statisticsStore = makeAutoObservable({
  incomeStatistics: [],
  isIncomeStatisticsLoading: false,

  getIncomeStatistics: async ({
    userId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    if (format === 'XLSX') {
      statisticsApi.getIncomeStatistics({
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
    const incomeStatistics = await statisticsApi.getIncomeStatistics({
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
