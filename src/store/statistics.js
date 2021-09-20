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
    statisticsStore.isIncomeStatisticsLoading = false

    if (incomeStatistics) {
      statisticsStore.incomeStatistics = incomeStatistics
    }
  }
})
