import { API } from 'core/axios'

const transformIncomeStatistics = ({ localDateTime, paymentPageId, qrName, sum, smile, type }) => {
  return {
    qrId: paymentPageId,
    qrName,
    dateTime: new Date(localDateTime),
    tipAmount: sum,
    impression: smile,
    type
  }
}

export const getIncomeStatistics = async ({
  userId,
  currency = 'eur',
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  const isXlsxFormat = format === 'XLSX'

  const { data } = await API.get(`/personal-income-statistics/${userId}`, {
    params: {
      currency,
      format,
      'zone-offset': zoneOffset,
      period,
      periodFrom,
      periodTo
    },
    responseType: isXlsxFormat ? 'blob' : 'json',
    transformResponse: [(data) => data]
  })

  if (isXlsxFormat) {
    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'incoming-payment-statistics.xlsx')
    document.body.appendChild(link)
    link.click()
    document.querySelector('body').removeChild(link)
    return
  }

  return JSON.parse(data).result.map((item) => transformIncomeStatistics(item))
}
