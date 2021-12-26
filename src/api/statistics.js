import { API } from 'core/axios'

import { downloadExcel, convertCents } from 'utils'

const transformStatistics = ({
  localDateTime,
  paymentId,
  paymentPageId,
  qrName,
  sum,
  smile,
  type,
  currency
}) => {
  return {
    id: paymentId,
    qrName,
    paymentPageId,
    dateTime: new Date(localDateTime),
    tipAmount: convertCents(sum),
    impression: smile,
    type,
    currency
  }
}

const getStatistics = async (
  url,
  { format, zoneOffset, period, periodFrom, periodTo },
  transformer,
  diagramTransformer = ({ localDate, sum }) => ({
    date: new Date(localDate),
    tipAmount: convertCents(sum)
  })
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
    downloadExcel(data, 'incoming-payment-statistics')
    return
  }

  const {
    table = [],
    diagram = [],
    diagramIncome = [],
    diagramReferralsQuantity = []
  } = JSON.parse(data).result

  return {
    table: table.map((item) => transformer(item)),
    diagram: diagram.map((item) => diagramTransformer(item)),
    diagramIncome: diagramIncome.map(({ month, sum }) => ({ month, tipAmount: convertCents(sum) })),
    diagramReferralsQuantity: diagramReferralsQuantity.map(({ localDate, sum }) => ({
      date: new Date(localDate),
      tipAmount: convertCents(sum)
    }))
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
      tipAmount: convertCents(income),
      commission: convertCents(commission),
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
      tipAmount: convertCents(income),
      commission: convertCents(commission),
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
      tipAmount: convertCents(income),
      commission: convertCents(commission),
      firstName,
      lastName,
      rating
    })
  )
}

export const getAgentIncomeStatistics = async ({
  agentUserId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/agent-income-statistics/${agentUserId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, paymentPageId, localDateTime, income, agentIncome, firstName, lastName }) => ({
      id: paymentId,
      paymentPageId,
      dateTime: new Date(localDateTime),
      tipAmount: convertCents(income),
      agentIncome: convertCents(agentIncome),
      firstName,
      lastName
    })
  )
}

export const getUserPaymentIncomeStatistics = async ({
  userId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/admin/income-statistics/${userId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, dateTime, countryName, currency, sum, feeSum, last4Digits }) => ({
      id: paymentId,
      dateTime: new Date(dateTime),
      tipAmount: convertCents(sum),
      commission: convertCents(feeSum),
      country: countryName,
      currency,
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: convertCents(sum)
    })
  )
}

export const getUserAgentIncomeStatistics = async ({
  userId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/admin/agent-income-statistics/${userId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({
      paymentId,
      dateTime,
      countryName,
      currecny,
      initUserName,
      agentSum,
      fullSum,
      feeSum,
      last4Digits
    }) => ({
      id: paymentId,
      dateTime: new Date(dateTime),
      country: countryName,
      currecny,
      initUserName,
      agentIncome: convertCents(agentSum),
      payment: convertCents(fullSum),
      commission: convertCents(feeSum),
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: convertCents(sum)
    })
  )
}

export const getUserPaymentsStatistics = async ({
  userId,
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/admin/payments-statistics/${userId}`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, dateTime, currency, sum, phone }) => ({
      id: paymentId,
      dateTime: new Date(dateTime),
      currency,
      tipAmount: convertCents(sum),
      phone
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: convertCents(sum)
    })
  )
}

export const getPaymentsOutgoingStatistics = async ({
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/admin/outgoing-payments-statistics`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, localDateTime, countryName, income, feeIncome }) => ({
      id: paymentId,
      dateTime: new Date(localDateTime),
      country: countryName,
      tipAmount: convertCents(income),
      commission: convertCents(feeIncome)
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: convertCents(sum)
    })
  )
}

export const getPaymentsIncomingStatistics = async ({
  format,
  zoneOffset,
  period,
  periodFrom,
  periodTo
}) => {
  return await getStatistics(
    `/admin/incoming-payments-statistics`,
    { format, zoneOffset, period, periodFrom, periodTo },
    ({ paymentId, localDateTime, income, phone, last4Digits }) => ({
      id: paymentId,
      dateTime: new Date(localDateTime),
      tipAmount: convertCents(income),
      phone,
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: convertCents(sum)
    })
  )
}
