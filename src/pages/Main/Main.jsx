import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable, TableRowCard } from 'components'
import { RatingCell } from 'common'

import { userStore, statisticsStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

export const UserMainPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const currencyLabel = userStore.personalData.currency.label
  const { id: userId, role } = userStore
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const { period, periodFrom, periodTo } = watch()
  const isBusinessAccount = role === 'BUSINESS'

  useEffect(() => {
    if (!userId || !role || (period === 'custom' && !periodFrom && !periodTo)) return

    statisticsStore.getAccountIncomeStatistics({
      userId,
      userRole: role,
      format: 'JSON',
      period,
      periodFrom,
      periodTo,
      zoneOffset: getTimeZoneOffset()
    })
  }, [role, userId, period, periodFrom, periodTo])

  const columns = isBusinessAccount
    ? [
        {
          headerName: t('Date & time'),
          field: 'dateTime',
          flex: 1
        },
        {
          headerName: 'Площадка',
          field: 'platformName',
          flex: 1
        },
        {
          headerName: 'Пользователь',
          field: `fullName`,
          flex: 1
        },
        {
          headerName: t('tip-size'),
          field: 'tipAmount',
          flex: 1
        },
        {
          headerName: 'Комиссия',
          field: 'commission',
          flex: 1
        },
        {
          headerName: 'Рейтинг',
          field: 'rating',
          flex: 1,
          renderCell: ({ row }) => <RatingCell rating={row.rating} />
        }
      ]
    : [
        {
          headerName: t('Date & time'),
          field: 'dateTime',
          flex: 1
        },
        {
          headerName: t('name-qr-code'),
          field: 'qrName',
          flex: 1
        },
        {
          headerName: t('tip-size'),
          field: 'tipAmount',
          flex: 1
        },
        {
          headerName: 'Впечатление',
          field: 'impression',
          flex: 1
        }
      ]

  const individualRows = incomeStatistics.table.map(
    ({ id, dateTime, qrName, tipAmount, impression }) => ({
      id,
      dateTime: transformDateTimeToLabel(dateTime),
      qrName,
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      impression
    })
  )

  const platformRows = incomeStatistics.table.map(
    ({ id, dateTime, platformName, firstName, lastName, tipAmount, commission, rating }) => ({
      id,
      dateTime: transformDateTimeToLabel(dateTime),
      platformName,
      fullName: `${lastName} ${firstName}`,
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      commission: getPriceLabel(commission, currencyLabel),
      rating
    })
  )

  const individualTableCards = incomeStatistics.table.map(
    ({ qrId, qrName, dateTime, tipAmount, impression }) => {
      const rows = [
        { label: t('name-qr-code'), value: qrName },
        { label: t('tip-size'), value: getPriceLabel(tipAmount, currencyLabel) },
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

  const platformTableCards = incomeStatistics.table.map(
    ({ id, platformName, dateTime, firstName, lastName, tipAmount, commission, rating }) => {
      const rows = [
        { label: 'Площадка', value: platformName },
        { label: 'Пользователь', value: `${lastName} ${firstName}` },
        { label: t('tip-size'), value: getPriceLabel(tipAmount, currencyLabel) },
        { label: 'Комссия', value: getPriceLabel(commission, currencyLabel) },
        { label: 'Рейтинг', value: <RatingCell rating={rating} /> }
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

  const toQrCodesPage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE)
  }

  const downloadStatisticExcel = () => {
    statisticsStore.getAccountIncomeStatistics({
      userId,
      userRole: role,
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
        <title>{t('main-page')}</title>
      </Head>

      <AccountLayout
        title={t('main-page')}
        button={{ label: t('create-new-qr-code'), onClick: toQrCodesPage }}
      >
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
            rows={isBusinessAccount ? platformRows : individualRows}
            cardList={isBusinessAccount ? platformTableCards : individualTableCards}
            isDataLoading={isIncomeStatisticsLoading}
            periodFilter={period}
            haveCommission={isBusinessAccount}
            onExcelDownload={() => downloadStatisticExcel()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
