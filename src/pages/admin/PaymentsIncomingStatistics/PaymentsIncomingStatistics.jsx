import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const PaymentsIncomingStatisticsPage = observer(() => {
  const { t } = useTranslation('common')

  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.symbol
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (period === 'custom' && !periodFrom && !periodTo) return

    statisticsStore.getPaymentsIncomingStatistics({
      period,
      periodFrom,
      periodTo,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    })
  }, [period, periodFrom, periodTo])

  const columns = [
    {
      headerName: t('date-time'),
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: t('phone'),
      field: 'phone',
      flex: 1
    },
    {
      headerName: t('tip-amount'),
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: t('card-number'),
      field: 'last4Digits',
      flex: 1
    }
  ]

  const rows = incomeStatistics.table.map(({ id, dateTime, tipAmount, phone, last4Digits }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    phone,
    tipAmount: getPriceLabel(tipAmount, currencyLabel),
    last4Digits
  }))

  const tableCards = incomeStatistics.table.map(
    ({ id, dateTime, tipAmount, phone, last4Digits }) => {
      const rows = [
        { label: t('phone'), value: phone },
        { label: t('card-number'), value: last4Digits }
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

  const downloadExcelFile = () => {
    statisticsStore.getPaymentsIncomingStatistics({
      format: 'XLSX',
      period,
      periodFrom,
      periodTo,
      zoneOffset: getTimeZoneOffset()
    })
  }

  return (
    <>
      <Head>
        <title>{t('incoming-payments-statistics')}</title>
      </Head>

      <AccountLayout>
        {useMemo(
          () => (
            <BarChart
              title={t('incoming-payments-statistics')}
              data={incomeStatistics.diagram}
              isLoading={isIncomeStatisticsLoading}
            />
          ),
          [incomeStatistics, isIncomeStatisticsLoading]
        )}

        <FormProvider {...useFormProps}>
          <TipsTable
            data={incomeStatistics.table}
            columns={columns}
            rows={rows}
            cardList={tableCards}
            isDataLoading={isIncomeStatisticsLoading}
            periodFilter={period}
            onExcelDownload={() => downloadExcelFile()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
