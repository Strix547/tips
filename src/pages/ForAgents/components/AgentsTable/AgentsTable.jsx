import { FormProvider, useForm } from 'react-hook-form'

import { TimePeriodFilter, StatisticRow } from 'components'
import { Table } from 'ui'

import { formatPrice } from 'utils'

import * as S from './AgentsTable.styled'

export const AgentsTable = () => {
  const useFormProps = useForm()
  const currency = '₽'

  const columns = [
    {
      headerName: 'Дата',
      field: 'date',
      flex: 1
    },
    {
      headerName: 'Размер чаевых',
      field: 'tipAmount',
      flex: 1
    },
    {
      headerName: 'Логин',
      field: 'email',
      flex: 1
    }
  ]

  const rows = [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 2,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 3,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 4,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 5,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 6,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 7,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    },
    {
      id: 8,
      date: new Date().toLocaleDateString(),
      tipAmount: formatPrice(4983, currency),
      email: 'afansyef.evgen20@gmail.com'
    }
  ]

  return (
    <S.AgentsTable>
      <S.Top>
        <FormProvider {...useFormProps}>
          <TimePeriodFilter {...useFormProps} />
        </FormProvider>
      </S.Top>

      <S.TableContainer>
        <Table columns={columns} rows={rows} />
        <StatisticRow stats={[{ label: 'Итого заработано', value: 34600 }]} />
      </S.TableContainer>
    </S.AgentsTable>
  )
}
