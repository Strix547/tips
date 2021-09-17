import { makeAutoObservable } from 'mobx'

import * as statisticsApi from 'api/statistics'

export const statisticsStore = makeAutoObservable({
  incomeStatistics: [],

  getIncomeStatistics: async ({
    userId,
    currency,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    statisticsStore.incomeStatistics = await statisticsApi.getIncomeStatistics({
      userId,
      currency,
      format,
      period,
      'zone-offset': '+03:00',
      periodFrom,
      periodTo
    })
  }
})
