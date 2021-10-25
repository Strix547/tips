import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './Main.styled'

import StarIcon from '@public/icons/star.svg'

export const UserMainPage = observer(() => {
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

  const getStatisticsMethod = isBusinessAccount
    ? statisticsStore.getBusinessIncomeStatistics
    : statisticsStore.getIndividualIncomeStatistics

  useEffect(() => {
    if (!userId || !role) return

    const commonData = {
      userId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    }

    if (period !== 'custom') {
      getStatisticsMethod({
        ...commonData,
        period
      })
    }

    if (periodFrom && periodTo) {
      getStatisticsMethod({
        ...commonData,
        periodFrom,
        periodTo
      })
    }
  }, [role, userId, period, periodFrom, periodTo])

  const renderRatingCell = ({ row }) => {
    return (
      <S.RatingCell>
        <StarIcon /> {row.rating}/5
      </S.RatingCell>
    )
  }

  const columns = isBusinessAccount
    ? [
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
          headerName: 'Пользователь',
          field: `fullName`,
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
    : [
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

  const userDefaultTableRows = incomeStatistics.table.map(
    ({ id, dateTime, qrName, tipAmount, impression }) => ({
      id,
      dateTime: transformDateTimeToLabel(dateTime),
      qrName,
      tipAmount: getPriceLabel(tipAmount, currencyLabel),
      impression
    })
  )

  const userBusinessTableRows = incomeStatistics.table.map(
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

  const rows = isBusinessAccount ? userBusinessTableRows : userDefaultTableRows

  const userDefaultCardList = incomeStatistics.table.map(
    ({ qrId, qrName, dateTime, tipAmount, impression, type }) => {
      return (
        <S.TipCard key={qrId}>
          <S.TipCardTop>
            <S.Text>{transformDateTimeToLabel(dateTime)}</S.Text>
            <S.Text>{getPriceLabel(tipAmount, currencyLabel)}</S.Text>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Имя QR-кода</S.Text>
              <S.Text>{qrName}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Размер чаевых</S.Text>
              <S.Text>{getPriceLabel(tipAmount, currencyLabel)}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Впечатление</S.Text>
              <S.Text>{impression}</S.Text>
            </S.TipCardRow>
          </S.TipCardMain>
        </S.TipCard>
      )
    }
  )

  const userBusinessCardList = incomeStatistics.table.map(
    ({ id, platformName, dateTime, firstName, lastName, tipAmount, commission, rating }) => {
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
              <S.Text>Пользователь</S.Text>
              <S.Text>
                {lastName} {firstName}
              </S.Text>
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

  const cardList = isBusinessAccount ? userBusinessCardList : userDefaultCardList

  const toQrCodesPage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE)
  }

  const downloadStatisticExcel = (userId) => {
    getStatisticsMethod({
      userId,
      format: 'XLSX',
      period,
      zoneOffset: getTimeZoneOffset()
    })
  }

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: toQrCodesPage }}>
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
            cardList={cardList}
            isDataLoading={isIncomeStatisticsLoading}
            haveCommission={isBusinessAccount}
            onExcelDownload={() => downloadStatisticExcel(userId)}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
