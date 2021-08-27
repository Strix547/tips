import { TimePeriodFilter } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'
import { StatisticRow } from './components'

import { formatPrice } from 'utils'

import * as S from './TipsTable.styled'

export const TipsTable = () => {
  const currency = '₽'

  const getColumnWidthPerecentFromTableWidth = (columnWidth, tableWidth) => {
    return (columnWidth / tableWidth) * 100
  }

  const columns = [
    { headerName: 'Дата', field: 'date', flex: getColumnWidthPerecentFromTableWidth(75, 1040) },
    {
      headerName: 'Страна',
      field: 'country',
      flex: getColumnWidthPerecentFromTableWidth(110, 1040)
    },
    {
      headerName: 'Размер чаевых',
      field: 'tips',

      flex: getColumnWidthPerecentFromTableWidth(130, 1040)
    },
    {
      headerName: 'Комиссия, вкл. в размер чаевых',
      field: 'fee',

      flex: getColumnWidthPerecentFromTableWidth(255, 1040)
    },
    {
      headerName: 'Пользователь',
      field: 'email',
      flex: getColumnWidthPerecentFromTableWidth(205, 1040)
    },
    {
      headerName: 'Номер карты',
      field: 'cardNumber',
      flex: getColumnWidthPerecentFromTableWidth(135, 1040)
    }
  ]

  const rows = [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(700, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 2,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(5000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 3,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 4,
      date: new Date().toLocaleDateString(),
      country: 'Russia',
      tips: formatPrice(9000, currency),
      fee: formatPrice(500, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 5,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 6,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(600, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 7,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 8,
      date: new Date().toLocaleDateString(),
      country: 'Germany',
      tips: formatPrice(12000, currency),
      fee: formatPrice(400, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 9,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 10,
      date: new Date().toLocaleDateString(),
      country: 'Poland',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 11,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 12,
      date: new Date().toLocaleDateString(),
      country: 'Japan',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 13,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 14,
      date: new Date().toLocaleDateString(),
      country: 'Bulgaria',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 15,
      date: new Date().toLocaleDateString(),
      country: 'Netherlands',
      tips: formatPrice(12000, currency),
      fee: formatPrice(300, currency),
      email: 'afansyef.evgen20@gmail.com',
      cardNumber: '4543 **** 5944'
    }
  ]

  return (
    <S.TipsTable>
      <S.Top>
        <TimePeriodFilter />
        <ExcelDownload />
      </S.Top>

      <S.TableContainer>
        <StatisticRow tips={100600} fee={70000} receiptAverage={5000} />
        <Table columns={columns} rows={rows} />
        <StatisticRow tips={100600} fee={70000} receiptAverage={5000} />
      </S.TableContainer>
    </S.TipsTable>
  )
}
