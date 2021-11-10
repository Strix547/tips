import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const PaymentsIncomingStatisticsPage = observer(() => {
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
      headerName: 'Дата и время',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Телефон',
      field: 'phone',
      flex: 1
    },
    {
      headerName: 'Размер чаевых',
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: 'Счёт',
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
        { label: 'Телефон', value: phone },
        { label: 'Счёт', value: last4Digits }
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
        <title>Статистика входящих оплат</title>
      </Head>

      <AccountLayout>
        {useMemo(
          () => (
            <BarChart
              title="Статистика входящих оплат"
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
