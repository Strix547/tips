import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { LineChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './EmployeeStatistics.styled'

import StarIcon from '@public/icons/star.svg'

export const EmployeeStatisticsPage = observer(() => {
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
  const currencyLabel = userStore.personalData.currency.label
  
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!userId) return

    const commonData = {
      userId,
      employeeId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    }

    if (period !== 'custom') {
      statisticsStore.getEmployeeIncomeStatistics({
        ...commonData,
        period
      })
    }

    if (periodFrom && periodTo) {
      statisticsStore.getEmployeeIncomeStatistics({
        ...commonData,
        periodFrom,
        periodTo
      })
    }
  }, [userId, period, periodFrom, periodTo])

  const downloadStatisticExcel = () => {
    statisticsStore.getEmployeeIncomeStatistics({
      userId,
      employeeId,
      format: 'XLSX',
      period,
      zoneOffset: getTimeZoneOffset()
    })
  }

  const renderRatingCell = ({ row }) => {
    return (
      <S.RatingCell>
        <StarIcon /> {row.rating}/5
      </S.RatingCell>
    )
  }

  const columns = [
    {
      headerName: 'Дата и время',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Площадка',
      field: 'platformName',
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
      headerName: 'Рейтинг',
      field: 'rating',
      flex: 1,
      renderCell: renderRatingCell
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

  const cardList = incomeStatistics.table.map(
    ({ id, platformName, dateTime, tipAmount, commission, rating }) => {
      return (
        <S.TipCard key={id}>
          <S.TipCardTop>
            <S.Text>{transformDateTimeToLabel(dateTime)}</S.Text>
            <S.Text>{getPriceLabel(tipAmount, currencyLabel)}</S.Text>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Площадка</S.Text>
              <S.Text>{platformName}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Размер чаевых</S.Text>
              <S.Text>{getPriceLabel(tipAmount, currencyLabel)}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Комссия</S.Text>
              <S.Text>{getPriceLabel(commission, currencyLabel)}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Рейтинг</S.Text>
              <S.RatingCell>
                <StarIcon /> {rating}/5
              </S.RatingCell>
            </S.TipCardRow>
          </S.TipCardMain>
        </S.TipCard>
      )
    }
  )

  return (
    <>
      <Head>
        <title>Статистика по сотруднику №{employeeId}</title>
      </Head>

      <AccountLayout title={`Статистика по сотруднику №${employeeId}`}>
        {useMemo(
          () => (
            <LineChart
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
            cardList={cardList}
            isDataLoading={isIncomeStatisticsLoading}
            haveCommission
            onExcelDownload={() => downloadStatisticExcel()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
