import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const QrStatisticsPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const qrId = router?.query?.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.label
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!qrId || (period === 'custom' && !periodFrom && !periodTo)) return

    statisticsStore.getQrIncomeStatistics({
      qrId,
      period,
      periodFrom,
      periodTo,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    })
  }, [qrId, period, periodFrom, periodTo])

  const columns = [
    {
      headerName: 'Дата и время',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Имя QR-кода',
      field: 'qrName',
      flex: 1
    },
    {
      headerName: 'Размер чаевых',
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: 'Впечатление',
      field: 'impression',
      flex: 1
    }
  ]

  const rows = incomeStatistics.table.map(({ id, dateTime, qrName, tipAmount, impression }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    qrName,
    tipAmount: getPriceLabel(tipAmount, currencyLabel),
    impression
  }))

  const tableCards = incomeStatistics.table.map(
    ({ qrId, qrName, dateTime, tipAmount, impression }) => {
      const rows = [
        { label: 'Имя QR-кода', value: qrName },
        { label: 'Размер чаевых', value: getPriceLabel(tipAmount, currencyLabel) },
        { label: 'Впечатление', value: impression }
      ]

      return (
        <TableRowCard
          key={qrId}
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
    statisticsStore.getQrIncomeStatistics({
      qrId,
      format: 'XLSX',
      period: periodSelected,
      zoneOffset: getTimeZoneOffset(),
      currency: useFormProps.getValues('currency')
    })
  }

  return (
    <>
      <Head>
        <title>Статистика qr кода</title>
      </Head>

      <AccountLayout title="Статистика qr кода">
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
