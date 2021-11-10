import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const PaymentsOutgoingStatisticsPage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.label
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (period === 'custom' && !periodFrom && !periodTo) return

    statisticsStore.getPaymentsOutgoingStatistics({
      period,
      periodFrom,
      periodTo,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    })
  }, [period, periodFrom, periodTo])

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
    }
  ]

  const rows = incomeStatistics.table.map(({ id, dateTime, country, tipAmount, commission }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    country,
    tipAmount: getPriceLabel(tipAmount, currencyLabel),
    commission
  }))

  const tableCards = incomeStatistics.table.map(
    ({ id, dateTime, country, tipAmount, commission }) => {
      const rows = [
        { label: 'Страна', value: country },
        { label: 'Комиссия', value: commission }
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
    statisticsStore.getPaymentsOutgoingStatistics({
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
        <title>Статистика исходящих оплат</title>
      </Head>

      <AccountLayout>
        {useMemo(
          () => (
            <BarChart
              title="Статистика исходящих оплат"
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
            haveCommission
            onExcelDownload={() => downloadExcelFile()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
