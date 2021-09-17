import { API } from 'core/axios'

export const getIncomeStatistics = async ({
  userId,
  currency = 'eur',
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  const { data } = await API.get(`/personal-income-statistics/${userId}`, {
    params: {
      currency,
      format,
      zoneOffset,
      period,
      periodFrom,
      periodTo
    }
  })

  return data
}
