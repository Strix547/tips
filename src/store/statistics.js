import { makeAutoObservable } from 'mobx'

import * as statisticsApi from 'api/statistics'

const getStaitsitcs = async (params, apiMethod, store) => {
  if (params.format === 'XLSX') {
    apiMethod(params)
    return
  }

  store.isIncomeStatisticsLoading = true
  const statistics = await apiMethod(params)
  store.incomeStatistics = statistics
  store.isIncomeStatisticsLoading = false
}

const getStatisticsPeriodProps = (period, periodFrom, periodTo) => {
  return period !== 'custom' ? { period } : { periodFrom, periodTo }
}

export const statisticsStore = makeAutoObservable({
  incomeStatistics: {
    table: [],
    diagram: [],
    diagramIncome: [],
    diagramReferralsQuantity: []
  },
  isIncomeStatisticsLoading: false,

  getAccountIncomeStatistics: async ({
    userId,
    userRole,
    format,
    zoneOffset,
    period,
    periodFrom,
    periodTo
  }) => {
    const incomeMethod =
      userRole === 'BUSINESS'
        ? statisticsApi.getBusinessAccountIncomeStatistics
        : statisticsApi.getIndividualAccountIncomeStatistics

    await getStaitsitcs(
      {
        userId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      incomeMethod,
      statisticsStore
    )
  },

  getPlatformIncomeStatistics: async ({
    platformId,
    format,
    period,
    zoneOffset,
    periodFrom,
    periodTo
  }) => {
    await getStaitsitcs(
      {
        platformId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getPlatformIncomeStatistics,
      statisticsStore
    )
  },

  getQrIncomeStatistics: async ({ qrId, format, zoneOffset, period, periodFrom, periodTo }) => {
    await getStaitsitcs(
      {
        qrId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getQrIncomeStatistics,
      statisticsStore
    )
  },

  getEmployeeIncomeStatistics: async ({
    userId,
    employeeId,
    format,
    period,
    zoneOffset,
    periodFrom,
    periodTo
  }) => {
    await getStaitsitcs(
      {
        ownerUserId: userId,
        employeeUserId: employeeId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getEmployeeIncomeStatistics,
      statisticsStore
    )
  },

  getAgentIncomeStatistics: async ({
    agentId,
    format,
    period,
    periodFrom,
    periodTo,
    zoneOffset
  }) => {
    await getStaitsitcs(
      {
        agentUserId: agentId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getAgentIncomeStatistics,
      statisticsStore
    )
  },

  getUserPaymentIncomeStatistics: async ({
    userId,
    format,
    period,
    periodFrom,
    periodTo,
    zoneOffset
  }) => {
    await getStaitsitcs(
      {
        userId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getUserPaymentIncomeStatistics,
      statisticsStore
    )
  },

  getUserAgentIncomeStatistics: async ({
    userId,
    format,
    period,
    periodFrom,
    periodTo,
    zoneOffset
  }) => {
    await getStaitsitcs(
      {
        userId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getUserAgentIncomeStatistics,
      statisticsStore
    )
  },

  getUserPaymentsStatistics: async ({
    userId,
    format,
    period,
    periodFrom,
    periodTo,
    zoneOffset
  }) => {
    await getStaitsitcs(
      {
        userId,
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getUserPaymentsStatistics,
      statisticsStore
    )
  },

  getPaymentsOutgoingStatistics: async ({ format, period, periodFrom, periodTo, zoneOffset }) => {
    await getStaitsitcs(
      {
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getPaymentsOutgoingStatistics,
      statisticsStore
    )
  },

  getPaymentsIncomingStatistics: async ({ format, period, periodFrom, periodTo, zoneOffset }) => {
    await getStaitsitcs(
      {
        format,
        zoneOffset,
        ...getStatisticsPeriodProps(period, periodFrom, periodTo)
      },
      statisticsApi.getPaymentsIncomingStatistics,
      statisticsStore
    )
  }
})
