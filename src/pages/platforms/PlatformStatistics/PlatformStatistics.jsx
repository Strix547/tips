import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { LineChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './PlatformStatistics.styled'

import StarIcon from '@public/icons/star.svg'

export const PlatformStatisticsPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const platformId = router.query.id
  const userId = userStore.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.label
  
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!userId) return

    const commonData = {
      platformId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    }

    if (period !== 'custom') {
      statisticsStore.getPlatformIncomeStatistics({
        ...commonData,
        period
      })
    }

    if (periodFrom && periodTo) {
      statisticsStore.getPlatformIncomeStatistics({
        ...commonData,
        periodFrom,
        periodTo
      })
    }
  }, [userId, period, periodFrom, periodTo])

  const downloadStatisticExcel = () => {
    statisticsStore.getPlatformIncomeStatistics({
      platformId,
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
      headerName: 'Пользователь',
      field: 'fullName',
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
    ({ id, dateTime, firstName, lastName, tipAmount, commission, rating }) => ({
      id,
      dateTime: transformDateTimeToLabel(dateTime),
      fullName: `${lastName} ${firstName}`,
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      commission: getPriceLabel(commission, currencyLabel),
      rating
    })
  )

  const cardList = incomeStatistics.table.map(
    ({ id, dateTime, firstName, lastName, tipAmount, commission, rating }) => {
      return (
        <S.TipCard key={id}>
          <S.TipCardTop>
            <S.Text>{transformDateTimeToLabel(dateTime)}</S.Text>
            <S.Text>{getPriceLabel(tipAmount, currencyLabel)}</S.Text>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Пользователь</S.Text>
              <S.Text>{lastName} {firstName}</S.Text>
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
        <title>Статистика по сотруднику №{platformId}</title>
      </Head>

      <AccountLayout title={`Статистика по площадке №${platformId}`}>
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
            haveCommission={true}
            onExcelDownload={() => downloadStatisticExcel()}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
