import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import { TimePeriodFilter, StatisticRow } from 'components'
import { Table } from 'ui'

import { userStore } from 'store'
import { transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './AgentsTable.styled'

export const AgentsTable = observer(({ statistics = [], isStatisticsLoading }) => {
  const { t } = useTranslation('common')
  const currencyLabel = userStore.personalData.currency.symbol

  const columns = [
    {
      headerName: t('date-time'),
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: t('tip-amount'),
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: t('agent'),
      field: 'agentIncome',
      flex: 1
    },
    {
      headerName: t('first-name'),
      field: 'fullName',
      flex: 1
    }
  ]

  const rows = statistics.map(({ id, dateTime, agentIncome, tipAmount, firstName, lastName }) => ({
    id,
    dateTime: transformDateTimeToLabel(dateTime),
    tipAmount: getPriceLabel(tipAmount, currencyLabel),
    agentIncome: getPriceLabel(agentIncome, currencyLabel),
    fullName: `${lastName} ${firstName}`
  }))

  return (
    <S.AgentsTable>
      <S.Top>
        <TimePeriodFilter />
      </S.Top>

      <S.TableContainer>
        <Table
          columns={columns}
          rows={rows}
          isLoading={isStatisticsLoading}
          noText={t('no-tip-this-period')}
        />

        {statistics.length !== 0 || isStatisticsLoading ? (
          <StatisticRow
            stats={[{ label: t('earned'), value: 0 }]}
            currency={userStore.personalData.currency.symbol}
          />
        ) : null}
      </S.TableContainer>
    </S.AgentsTable>
  )
})
