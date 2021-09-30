import { API } from 'core/axios'

const transformIncomeStatistics = ({
  localDateTime,
  paymentId,
  paymentPageId,
  qrName,
  sum,
  smile,
  type
}) => {
  return {
    id: paymentId,
    qrName,
    paymentPageId,
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

  const { statusText, data } = await API.get(`/personal-income-statistics/${userId}`, {
    params: {
      currency,
      format,
      'zone-offset': zoneOffset,
      period,
      'period-from': periodFrom,
      'period-to': periodTo
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

  const { table, diagram } = JSON.parse(data).result

  return {
    table: table.map((item) => transformIncomeStatistics(item)),
    diagram: diagram.map(({ localDate, sum }) => ({ date: new Date(localDate), tipAmount: sum }))
  }
}
