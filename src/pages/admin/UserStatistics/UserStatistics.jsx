import { useEffect, useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'
import { Tabs, Tab } from 'ui'

import { statisticsStore } from 'store'
import {
  getTimeZoneOffset,
  transformDateTimeToLabel,
  getPriceLabel,
  getCurrencySymbol
} from 'utils'

import * as S from './UserStatistics.styled'

export const UserStatisticsPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const [tab, setTab] = useState('income')
  const userId = router.query.id
  console.log(userId)
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore

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
        headerName: t('date-time'),
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: t('country'),
        field: 'country',
        flex: 1
      },
      {
        headerName: t('tip-amount'),
        field: 'tipAmount',
        flex: 1
      },
      {
        headerName: t('commission'),
        field: 'commission',
        flex: 1
      },
      {
        headerName: t('card-number'),
        field: 'last4Digits',
        flex: 1
      }
    ]

    const rows = statistics?.map(
      ({ id, dateTime, tipAmount, commission, country, currency, last4Digits }) => ({
        id,
        dateTime: transformDateTimeToLabel(dateTime),
        country,
        tipAmount: getPriceLabel(tipAmount, getCurrencySymbol(currency)),
        commission: getPriceLabel(commission, getCurrencySymbol(currency)),
        last4Digits: last4Digits && `* ${last4Digits}`
      })
    )

    const tableCards = statistics?.map(
      ({ id, dateTime, tipAmount, commission, country, currency, last4Digits }) => {
        const rows = [
          { label: t('commission'), value: getPriceLabel(commission, getCurrencySymbol(currency)) },
          { label: t('country'), value: country },
          { label: t('card-number'), value: last4Digits && `* ${last4Digits}` }
        ]

        return (
          <TableRowCard
            key={id}
            top={{
              left: transformDateTimeToLabel(dateTime),
              right: getPriceLabel(tipAmount, getCurrencySymbol(currency))
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
        headerName: t('date-time'),
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: t('country'),
        field: 'country',
        flex: 1
      },
      {
        headerName: t('payout-amount'),
        field: 'payment',
        flex: 1
      },
      {
        headerName: t('initiator'),
        field: 'initUserName',
        flex: 1
      },
      {
        headerName: t('agent-amount'),
        field: 'agentIncome',
        flex: 1
      },
      {
        headerName: t('commission'),
        field: 'commission',
        flex: 1
      },
      {
        headerName: t('card-number'),
        field: 'last4Digits',
        flex: 1
      }
    ]

    const rows = statistics?.map(
      ({ id, dateTime, payment, agentIncome, commission, country, currency, last4Digits }) => ({
        id,
        dateTime: transformDateTimeToLabel(dateTime),
        country,
        payment: getPriceLabel(payment, getCurrencySymbol(currency)),
        agentIncome: getPriceLabel(agentIncome, getCurrencySymbol(currency)),
        commission: getPriceLabel(commission, getCurrencySymbol(currency)),
        last4Digits: last4Digits && `* ${last4Digits}`
      })
    )

    const tableCards = statistics?.map(
      ({ id, dateTime, payment, agentIncome, commission, country, currency, last4Digits }) => {
        const rows = [
          { label: t('country'), value: country },
          {
            label: t('agent-amount'),
            value: getPriceLabel(agentIncome, getCurrencySymbol(currency))
          },
          { label: t('commission'), value: getPriceLabel(commission, getCurrencySymbol(currency)) },
          { label: t('card-number'), value: last4Digits && `* ${last4Digits}` }
        ]

        return (
          <TableRowCard
            key={id}
            top={{
              left: transformDateTimeToLabel(dateTime),
              right: getPriceLabel(payment, getCurrencySymbol(currency))
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
        headerName: t('date-time'),
        field: 'dateTime',
        flex: 1
      },
      {
        headerName: t('tip-amount'),
        field: 'tipAmount',
        flex: 1
      },
      {
        headerName: t('phone'),
        field: 'phone',
        flex: 1
      }
    ]

    const rows = statistics?.map(({ paymentId, dateTime, currency, tipAmount, phone }) => ({
      id: paymentId,
      dateTime: transformDateTimeToLabel(dateTime),
      tipAmount: getPriceLabel(tipAmount, getCurrencySymbol(currency)),
      phone
    }))

    const tableCards = statistics?.map(({ id, dateTime, tipAmount, currency, phone }) => {
      const rows = [{ label: t('phone'), value: phone }]

      return (
        <TableRowCard
          key={id}
          top={{
            left: transformDateTimeToLabel(dateTime),
            right: getPriceLabel(tipAmount, getCurrencySymbol(currency))
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
    { label: t('income-per-user'), value: 'income' },
    { label: t('payments-according-agency-scheme'), value: 'agents' },
    { label: t('user-payment'), value: 'payments' }
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
        <title>
          {t('mployee-statistics')} №{userId}
        </title>
      </Head>

      <AccountLayout title={`${t('mployee-statistics')} №${userId}`}>
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
