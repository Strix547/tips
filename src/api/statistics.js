import { API } from 'core/axios'

export const getIncomeStatistics = async ({
  userId,
  currency = 'eur',
  format,
  zoneOffset,
  period = 'MONTH',
  periodFrom,
  periodTo
}) => {
  const { data } = await API.get(`/personal-income-statistics/${userId}`, {
    params: {
      currency,
      format,
      'zone-offset': '+03:00',
      period,
      periodFrom,
      periodTo
    }
  })

  return data
}
