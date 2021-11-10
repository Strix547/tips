import { useEffect, useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'
import { Tabs, Tab } from 'ui'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './UserStatistics.styled'

export const UserStatisticsPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const [tab, setTab] = useState('income')
  const userId = router.query.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.label

  const { period, periodFrom, periodTo } = watch()

  const getStatisticsMethod = (tab) => {
    switch (tab) {
      case 'income':
        return statisticsStore.getUserPaymentIncomeStatistics
      case 'agents':
        return statisticsStore.getUserAgentIncomeStatistics
      case 'payments':
        return statisticsStore.getUserPaymentsStatistics
    }
  }

  const getStatistics = getStatisticsMethod(tab)

  useEffect(() => {
    if (!userId || (period === 'custom' && !periodFrom && !periodTo)) return

    getStatistics({
      userId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      period,
      periodFrom,
      periodTo
    })
  }, [userId, period, periodFrom, periodTo, tab])

  const getTableIncomeData = (statistics) => {
    const columns = [
      {
        headerName: 'Дата и время',
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: 'Страна',
        field: 'country',
        flex: 1
      },
      {
        headerName: 'Размер чаевых',
        field: 'tipAmount',
        flex: 1
      },
      {
        headerName: 'Комиссия',
        field: 'commission',
        flex: 1
      },
      {
        headerName: 'Счёт',
        field: 'last4Digits',
        flex: 1
      }
    ]

    const rows = statistics?.map(
      ({ id, dateTime, tipAmount, commission, country, currency, last4Digits }) => ({
        id,
        dateTime: transformDateTimeToLabel(dateTime),
        country,
        tipAmount: getPriceLabel(tipAmount, currencyLabel),
        commission: getPriceLabel(commission, currencyLabel),
        last4Digits: last4Digits && `* ${last4Digits}`
      })
    )

    const tableCards = statistics?.map(
      ({ id, dateTime, tipAmount, commission, country, currency, last4Digits }) => {
        const rows = [
          { label: 'Комиссия', value: getPriceLabel(commission, currencyLabel) },
          { label: 'Страна', value: country },
          { label: 'Счёт', value: last4Digits && `* ${last4Digits}` }
        ]

        return (
          <TableRowCard
            key={id}
            top={{
              left: transformDateTimeToLabel(dateTime),
              right: getPriceLabel(tipAmount, currencyLabel)
            }}
            rows={rows}
          />
        )
      }
    )

    return { columns, rows, tableCards, haveCommission: true }
  }

  const getTableAgentsData = (statistics) => {
    const columns = [
      {
        headerName: 'Дата и время',
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: 'Страна',
        field: 'country',
        flex: 1
      },
      {
        headerName: 'Сумма выплаты',
        field: 'payment',
        flex: 1
      },
      {
        headerName: 'Инициатор',
        field: 'initUserName',
        flex: 1
      },
      {
        headerName: 'Сумма агента',
        field: 'agentIncome',
        flex: 1
      },
      {
        headerName: 'Комиссия',
        field: 'commission',
        flex: 1
      },
      {
        headerName: 'Счёт',
        field: 'last4Digits',
        flex: 1
      }
    ]

    const rows = statistics?.map(
      ({ id, dateTime, payment, agentIncome, commission, country, currency, last4Digits }) => ({
        id,
        dateTime: transformDateTimeToLabel(dateTime),
        country,
        payment: getPriceLabel(payment, currencyLabel),
        agentIncome: getPriceLabel(agentIncome, currencyLabel),
        commission: getPriceLabel(commission, currencyLabel),
        last4Digits: last4Digits && `* ${last4Digits}`
      })
    )

    const tableCards = statistics?.map(
      ({ id, dateTime, payment, agentIncome, commission, country, currency, last4Digits }) => {
        const rows = [
          { label: 'Страна', value: country },
          { label: 'Сумма агента', value: getPriceLabel(agentIncome, currencyLabel) },
          { label: 'Комиссия', value: getPriceLabel(commission, currencyLabel) },
          { label: 'Счёт', value: last4Digits && `* ${last4Digits}` }
        ]

        return (
          <TableRowCard
            key={id}
            top={{
              left: transformDateTimeToLabel(dateTime),
              right: getPriceLabel(payment, currencyLabel)
            }}
            rows={rows}
          />
        )
      }
    )

    return { columns, rows, tableCards, haveCommission: true }
  }

  const getTablePaymentsData = (statistics) => {
    const columns = [
      {
        headerName: 'Дата и время',
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: 'Размер чаевых',
        field: 'tipAmount',
        flex: 1
      },
      {
        headerName: 'Телефон',
        field: 'phone',
        flex: 1
      }
    ]

    const rows = statistics?.map(({ paymentId, dateTime, currency, tipAmount, phone }) => ({
      id: paymentId,
      dateTime: transformDateTimeToLabel(dateTime),
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      phone
    }))

    const tableCards = statistics?.map(({ id, dateTime, tipAmount, currency, phone }) => {
      const rows = [{ label: 'Телефон', value: phone }]

      return (
        <TableRowCard
          key={id}
          top={{
            left: transformDateTimeToLabel(dateTime),
            right: getPriceLabel(tipAmount, currencyLabel)
          }}
          rows={rows}
        />
      )
    })

    return { columns, rows, tableCards }
  }

  const getTableData = (tab, statistics) => {
    switch (tab) {
      case 'income':
        return getTableIncomeData(statistics)
      case 'agents':
        return getTableAgentsData(statistics)
      case 'payments':
        return getTablePaymentsData(statistics)
    }
  }

  const { columns, rows, tableCards, haveCommission } = getTableData(tab, incomeStatistics.table)

  const tabs = [
    { label: 'Поступления на пользователя', value: 'income' },
    { label: 'Выплаты пользователю по агентской схеме', value: 'agents' },
    { label: 'Оплата пользователем', value: 'payments' }
  ]

  const tabList = tabs.map(({ label, value }) => (
    <Tab
      key={label}
      label={label}
      value={value}
      active={value === tab}
      onClick={() => setTab(value)}
    />
  ))

  const downloadStatisticExcel = () => {
    getStatistics({
      userId,
      format: 'XLSX',
      zoneOffset: getTimeZoneOffset(),
      period,
      periodFrom,
      periodTo
    })
  }

  return (
    <>
      <Head>
        <title>Статистика по сотруднику №{userId}</title>
      </Head>

      <AccountLayout title={`Статистика по сотруднику №${userId}`}>
        <S.TabLine>
          <Tabs value={tab}>{tabList}</Tabs>
        </S.TabLine>

        {useMemo(
          () => (
            <BarChart
              title={tabs.find(({ value }) => value === tab).label}
              data={incomeStatistics.diagram}
              isLoading={isIncomeStatisticsLoading}
              gradient="blue"
            />
          ),
          [incomeStatistics.diagram, isIncomeStatisticsLoading]
        )}

        <FormProvider {...useFormProps}>
          <TipsTable
            data={incomeStatistics.table}
            columns={columns}
            rows={rows}
            cardList={tableCards}
            isDataLoading={isIncomeStatisticsLoading}
            periodFilter={period}
            haveCommission={haveCommission}
            onExcelDownload={() => downloadStatisticExcel()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
