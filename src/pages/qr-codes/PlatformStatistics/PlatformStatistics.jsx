import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'

import { statisticsStore } from 'store'
import {
  getTimeZoneOffset,
  transformDateTimeToLabel,
  getPriceLabel,
  getCurrencySymbol
} from 'utils'

export const QrPlatformStatisticsPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps
  const qrId = router?.query?.id

  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!qrId || (period === 'custom' && !periodFrom && !periodTo)) return

    statisticsStore.getPlatformPaymentIncomeStatistics({
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
      headerName: t('date-time'),
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: t('tip-size'),
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: t('impression'),
      field: 'impression',
      flex: 1
    }
  ]

  const rows = incomeStatistics.table.map(({ id, dateTime, tipAmount, impression, currency }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    tipAmount: getPriceLabel(tipAmount, getCurrencySymbol(currency)),
    impression
  }))

  const tableCards = incomeStatistics.table.map(
    ({ qrId, dateTime, tipAmount, impression, currency }) => {
      const rows = [{ label: t('impression'), value: impression }]

      return (
        <TableRowCard
          key={qrId}
          top={{
            left: transformDateTimeToLabel(dateTime),
            right: getPriceLabel(tipAmount, getCurrencySymbol(currency))
          }}
          rows={rows}
        />
      )
    }
  )

  const downloadExcelFile = () => {
    statisticsStore.getPlatformPaymentIncomeStatistics({
      qrId,
      format: 'XLSX',
      period: periodSelected,
      zoneOffset: getTimeZoneOffset()
    })
  }

  return (
    <>
      <Head>
        <title>{t('qr-statistics')}</title>
      </Head>

      <AccountLayout title={t('qr-statistics')}>
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
