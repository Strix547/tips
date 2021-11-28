import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { LineChart, TipsTable, TableRowCard } from 'components'
import { RatingCell } from 'common'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const EmployeeStatisticsPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const employeeId = router.query.id
  const userId = userStore.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.symbol

  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!userId || (period === 'custom' && !periodFrom && !periodTo)) return

    statisticsStore.getEmployeeIncomeStatistics({
      userId,
      employeeId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      period,
      periodFrom,
      periodTo
    })
  }, [userId, period, periodFrom, periodTo])

  const columns = [
    {
      headerName: t('date-time'),
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: t('platform'),
      field: 'platformName',
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
      headerName: t('rating'),
      field: 'rating',
      flex: 1,
      renderCell: ({ row }) => <RatingCell rating={row.rating} />
    }
  ]

  const rows = incomeStatistics.table.map(
    ({ id, dateTime, platformName, tipAmount, commission, rating }) => ({
      id,
      dateTime: transformDateTimeToLabel(dateTime),
      platformName,
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      commission: getPriceLabel(commission, currencyLabel),
      rating
    })
  )

  const tableCards = incomeStatistics.table.map(
    ({ id, platformName, dateTime, tipAmount, commission, rating }) => {
      const rows = [
        { label: t('platform'), value: platformName },
        { label: t('commission'), value: getPriceLabel(commission, currencyLabel) },
        { label: t('rating'), value: <RatingCell rating={rating} /> }
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

  const downloadStatisticExcel = () => {
    statisticsStore.getEmployeeIncomeStatistics({
      userId,
      employeeId,
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
          {t('employee-statistics')} №{employeeId}
        </title>
      </Head>

      <AccountLayout title={`${t('employee-statistics')} №${employeeId}`}>
        {useMemo(
          () => (
            <LineChart
              title={t('incoming-payments-statistics')}
              data={incomeStatistics.diagram}
              isLoading={isIncomeStatisticsLoading}
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
            haveCommission
            onExcelDownload={() => downloadStatisticExcel()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
