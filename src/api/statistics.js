import { API } from 'core/axios'

const transformStatistics = ({
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

const downloadStatistics = (data) => {
  const url = window.URL.createObjectURL(new Blob([data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'incoming-payment-statistics.xlsx')
  document.body.appendChild(link)
  link.click()
  document.querySelector('body').removeChild(link)
}

const getStatistics = async (
  url,
  { format, zoneOffset, period, periodFrom, periodTo },
  transformer
) => {
  const isXlsxFormat = format === 'XLSX'

  const { data } = await API.get(url, {
    params: {
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
    downloadStatistics(data)
    return
  }

  const { table, diagram } = JSON.parse(data).result

  return {
    table: table.map((item) => transformer(item)),
    diagram: diagram.map(({ localDate, sum }) => ({ date: new Date(localDate), tipAmount: sum }))
  }
}

export const getIndividualAccountIncomeStatistics = async ({
  userId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/personal-income-statistics/${userId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    transformStatistics
  )
}

export const getQrIncomeStatistics = async ({
  qrId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/person-payment-page-income-statistics/${qrId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    transformStatistics
  )
}

export const getBusinessAccountIncomeStatistics = async ({
  userId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/business-income-statistics/${userId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({
      paymentId,
      platformId,
      firstName,
      lastName,
      commission,
      income,
      localDateTime,
      rating,
      title
    }) => ({
      id: paymentId,
      platformId,
      dateTime: new Date(localDateTime),
      tipAmount: income,
      commission,
      firstName,
      lastName,
      rating,
      platformName: title
    })
  )
}

export const getEmployeeIncomeStatistics = async ({
  ownerUserId,
  employeeUserId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/employee-income-statistics/${ownerUserId}/${employeeUserId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, platformId, localDateTime, income, commission, title, rating }) => ({
      id: paymentId,
      platformId,
      dateTime: new Date(localDateTime),
      tipAmount: income,
      commission,
      platformName: title,
      rating
    })
  )
}

export const getPlatformIncomeStatistics = async ({
  platformId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/platform-income-statistics/${platformId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, localDateTime, income, firstName, lastName, commission, rating }) => ({
      id: paymentId,
      dateTime: new Date(localDateTime),
      tipAmount: income,
      commission,
      firstName,
      lastName,
      rating
    })
  )
}
