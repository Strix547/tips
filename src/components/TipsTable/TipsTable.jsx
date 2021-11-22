import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useTranslation } from 'next-i18next'

import { TimePeriodFilter, StatisticRow } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'

import { userStore } from 'store'

import * as S from './TipsTable.styled'

export const TipsTable = observer(
  ({
    data,
    isDataLoading,
    columns,
    rows,
    cardList,
    cardHeight,
    haveCommission,
    periodFilter,
    onExcelDownload
  }) => {
    const { t } = useTranslation('common')
    const dataJS = toJS(data)
    const notEmpty = rows.length !== 0
    const currencyLabel = userStore.personalData.currency.symbol

    const tipsTotal = dataJS
      .map(({ tipAmount }) => tipAmount)
      .reduce((amount, total) => amount + total, 0)

    const tipsAverage = dataJS.length ? Number(Number(tipsTotal / dataJS.length).toFixed(0)) : 0

    const commissionTotal = dataJS
      .map(({ commission }) => commission)
      .reduce((amount, total) => amount + total, 0)

    const statisticTotals = !haveCommission
      ? [
          { label: t('total-tip'), value: tipsTotal },
          { label: t('average-tip'), value: tipsAverage }
        ]
      : [
          { label: t('total-tip'), value: tipsTotal },
          { label: t('average-tip'), value: tipsAverage },
          { label: 'Всего комиссия', value: commissionTotal }
        ]

    const statisticRow =
      notEmpty || isDataLoading ? (
        <StatisticRow stats={statisticTotals} isLoading={isDataLoading} currency={currencyLabel} />
      ) : null

    return (
      <S.TipsTable>
        <S.Top>
          <S.TopLeft>
            <TimePeriodFilter period={periodFilter} />
          </S.TopLeft>

          <ExcelDownload onClick={onExcelDownload} />
        </S.Top>

        <S.TableContainer>
          {statisticRow}

          <Table
            columns={columns}
            rows={rows}
            cards={cardList}
            cardHeight={cardHeight}
            isLoading={isDataLoading}
            noText="Чаевые за этот период отсутствуют"
          />

          {statisticRow}
        </S.TableContainer>
      </S.TipsTable>
    )
  }
)
