import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { TimePeriodFilter, StatisticRow } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'

import { userStore } from 'store'

import * as S from './TipsTable.styled'

export const TipsTable = observer(
  ({ data, columns, rows, cardList, haveCommission, isDataLoading, onExcelDownload }) => {
    const dataJS = toJS(data)
    const notEmpty = dataJS.length !== 0
    const currencyLabel = userStore.personalData.currency.label

    const tipsTotal = dataJS
      .map(({ tipAmount }) => tipAmount)
      .reduce((amount, total) => amount + total, 0)
    const tipsAverage = dataJS.length ? Number(Number(tipsTotal / dataJS.length).toFixed(0)) : 0
    const commissionTotal = dataJS
      .map(({ commission }) => commission)
      .reduce((amount, total) => amount + total, 0)

    const statisticTotal = !haveCommission
      ? [
          { label: 'Всего чаевых', value: tipsTotal },
          { label: 'Средний чек', value: tipsAverage }
        ]
      : [
          { label: 'Всего чаевых', value: tipsTotal },
          { label: 'Средний чек', value: tipsAverage },
          { label: 'Всего комиссия', value: commissionTotal }
        ]

    const statisticRow = notEmpty ? (
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
            <S.TipCardList>
              {notEmpty ? cardList : <S.NoTipsText>No tips for this period</S.NoTipsText>}
            </S.TipCardList>
          ) : (
            <S.TipCardSkeleton>
              <Skeleton count={5} height={184} />
            </S.TipCardSkeleton>
          )}

          {statisticRow}
        </S.TableContainer>
      </S.TipsTable>
    )
  }
)
