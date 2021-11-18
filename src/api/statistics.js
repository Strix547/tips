import { API } from 'core/axios'

import { downloadExcel } from 'utils'

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

const getStatistics = async (
  url,
  { format, zoneOffset, period, periodFrom, periodTo },
  transformer,
  diagramTransformer = ({ localDate, sum }) => ({ date: new Date(localDate), tipAmount: sum })
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
    diagramIncome: diagramIncome.map(({ month, sum }) => ({ month, tipAmount: sum })),
    diagramReferralsQuantity: diagramReferralsQuantity.map(({ localDate, sum }) => ({
      date: new Date(localDate),
      tipAmount: sum
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
      tipAmount: income,
      agentIncome,
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
      tipAmount: sum,
      commission: feeSum,
      country: countryName,
      currency,
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: sum
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
      agentIncome: agentSum,
      payment: fullSum,
      commission: feeSum,
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: sum
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
      tipAmount: sum,
      phone
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: sum
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
      tipAmount: income,
      commission: feeIncome
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: sum
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
      tipAmount: income,
      phone,
      last4Digits
    }),
    ({ day, sum }) => ({
      date: new Date(day),
      tipAmount: sum
    })
  )
}
