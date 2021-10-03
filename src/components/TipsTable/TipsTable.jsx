import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import Link from 'next/link'

import { TimePeriodFilter, StatisticRow } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'

import { ROUTES } from 'core/routes'
import { userStore } from 'store'
import { formatPrice } from 'utils'

import * as S from './TipsTable.styled'

export const TipsTable = observer(({ data = [], isDataLoading, onExcelDownload }) => {
  const transformedData = toJS(data)
  const haveTips = transformedData.length !== 0

  const currencyLabel = userStore.personalData.currency.label

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

  const rows = transformedData.map(({ id, dateTime, qrName, tipAmount, impression }) => ({
    id,
    dateTime: `${dateTime?.toLocaleDateString()} ${dateTime?.toLocaleTimeString().slice(0, 5)}`,
    qrName,
    tipAmount: `${tipAmount} ${currencyLabel}`,
    impression
  }))

  const tipsTotal = transformedData
    .map(({ tipAmount }) => tipAmount)
    .reduce((amount, total) => amount + total, 0)
  const tipsAverage = transformedData.length ? Number(tipsTotal / data.length).toFixed(0) : 0

  const statisticTotal = [
    { label: 'Всего чаевых', value: tipsTotal },
    { label: 'Средний чек', value: tipsAverage }
  ]

  const tipCardList = haveTips ? (
    transformedData.map(({ qrId, qrName, dateTime, tipAmount, impression, type }) => {
      return (
        <S.TipCard key={qrId}>
          <S.TipCardTop>
            <S.Text>
              {dateTime?.toLocaleDateString()} {dateTime?.toLocaleTimeString().slice(0, 5)}
            </S.Text>
            <S.Text>{formatPrice(tipAmount, currencyLabel)}</S.Text>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Имя QR-кода</S.Text>

              {type === 'BUSINESS' ? (
                <Link href={`${ROUTES.QR_CODES}/${qrId}/edit`}>
                  <a>{qrName}</a>
                </Link>
              ) : (
                <S.Text>{qrName}</S.Text>
              )}
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Размер чаевых</S.Text>
              <S.Text>{formatPrice(tipAmount, currencyLabel)}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Впечатление</S.Text>
              <S.Text>{impression}</S.Text>
            </S.TipCardRow>
          </S.TipCardMain>
        </S.TipCard>
      )
    })
  ) : (
    <S.NoTipsText>No tips for this period</S.NoTipsText>
  )

  const statisticRow = haveTips ? (
    <StatisticRow stats={statisticTotal} isLoading={isDataLoading} currency={currencyLabel} />
  ) : null

  return (
    <S.TipsTable>
      <S.Top>
        <S.TopLeft>
          <TimePeriodFilter />
        </S.TopLeft>

        <ExcelDownload onClick={onExcelDownload} />
      </S.Top>

      <S.TableContainer>
        {statisticRow}

        {!isDataLoading ? (
          <Table columns={columns} rows={rows} />
        ) : (
          <S.TableSkeleton>
            <Skeleton count={5} height={60} />
          </S.TableSkeleton>
        )}

        {!isDataLoading ? (
          <S.TipCardList>{tipCardList}</S.TipCardList>
        ) : (
          <S.TipCardSkeleton>
            <Skeleton count={5} height={184} />
          </S.TipCardSkeleton>
        )}

        {statisticRow}
      </S.TableContainer>
    </S.TipsTable>
  )
})
