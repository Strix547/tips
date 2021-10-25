import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset, transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './Statistics.styled'

export const QrStatisticsPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })

  const qrId = router?.query?.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currencyLabel = userStore.personalData.currency.label

  const periodSelected = useFormProps.watch('period')
  const periodFromSelected = useFormProps.watch('periodFrom')
  const periodToSelected = useFormProps.watch('periodTo')

  useEffect(() => {
    if (!qrId) return

    const commonData = {
      format: 'JSON',
      zoneOffset: getTimeZoneOffset()
    }

    if (periodSelected !== 'custom') {
      statisticsStore.getQrIncomeStatistics({
        ...commonData,
        qrId,
        period: periodSelected
      })
    }

    if (periodFromSelected && periodToSelected) {
      statisticsStore.getQrIncomeStatistics({
        ...commonData,
        qrId,
        periodFrom: periodFromSelected,
        periodTo: periodToSelected
      })
    }
  }, [qrId, periodSelected, periodFromSelected, periodToSelected])

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

const rows = incomeStatistics.table.map(
  ({ id, dateTime, qrName, tipAmount, impression }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    qrName,
    tipAmount: getPriceLabel(tipAmount, currencyLabel),
    impression
  })
)

  const cardList = incomeStatistics.table.map(
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

  const downloadExcelFile = (qrId) => {
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
            cardList={cardList}
            isDataLoading={isIncomeStatisticsLoading}
            onExcelDownload={() => downloadExcelFile(qrId)}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
