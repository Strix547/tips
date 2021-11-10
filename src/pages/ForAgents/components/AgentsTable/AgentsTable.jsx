import { observer } from 'mobx-react-lite'
import { TimePeriodFilter, StatisticRow } from 'components'
import { Table } from 'ui'

import { userStore } from 'store'
import { transformDateTimeToLabel, getPriceLabel } from 'utils'

import * as S from './AgentsTable.styled'

export const AgentsTable = observer(({ statistics = [], isStatisticsLoading }) => {
  const currencyLabel = userStore.personalData.currency.label

  const columns = [
    {
      headerName: 'Дата и время',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Размер чаевых',
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: 'Агенту',
      field: 'agentIncome',
      flex: 1
    },
    {
      headerName: 'Имя',
      field: 'fullName',
      flex: 1
    }
  ]

  const rows = statistics.map(({ id, dateTime, tipAmount, firstName, lastName }) => ({
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
          noText="Чаевые за этот период отсутствуют"
        />

        {statistics.length !== 0 || isStatisticsLoading ? (
          <StatisticRow
            stats={[{ label: 'Итого заработано', value: 0 }]}
            currency={userStore.personalData.currency.label}
          />
        ) : null}
      </S.TableContainer>
    </S.AgentsTable>
  )
})
