import { TimePeriodFilter, StatisticRow } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'

import { formatPrice } from 'utils'

import * as S from './TipsTable.styled'

export const TipsTable = () => {
  const currency = '₽'

  const getColumnWidthPerecentFromTableWidth = (columnWidth, tableWidth) => {
    return (columnWidth / tableWidth) * 100
  }

  const columns = [
    {
      headerName: 'Дата',
      field: 'date',
      minWidth: 95,
      flex: getColumnWidthPerecentFromTableWidth(75, 1040)
    },
    {
      headerName: 'Страна',
      field: 'country',
      minWidth: 90,
      flex: getColumnWidthPerecentFromTableWidth(110, 1040)
    },
    {
      headerName: 'Размер чаевых',
      field: 'tips',
      minWidth: 150,
      flex: getColumnWidthPerecentFromTableWidth(130, 1040)
    },
    {
      headerName: 'Комиссия',
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
      width: 135
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

  const incomingPaymentStatistic = [
    {
      id: 1,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 11,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 12,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 13,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 14,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 15,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    },
    {
      id: 16,
      date: new Date(),
      country: 'Netherlands',
      tipAmount: 12000,
      fee: 300,
      email: 'konovalova@gmail.com',
      cardNumber: '4543 **** 5944'
    }
  ]

  const statisticTotal = [
    { label: 'Всего чаевых', value: 100600 },
    { label: 'Всего комиссия', value: 70000 },
    { label: 'Средний чек', value: 5000 }
  ]

  const tipCardList = incomingPaymentStatistic.map(
    ({ id, date, country, tipAmount, fee, email, cardNumber }) => {
      return (
        <S.TipCard key={id}>
          <S.TipCardTop>
            <S.Text>{date.toLocaleDateString()}</S.Text>
            <S.Text>{formatPrice(tipAmount, currency)}</S.Text>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Комиссия</S.Text>
              <S.Text>{formatPrice(fee, currency)}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Страна</S.Text>
              <S.Text>{country}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Пользователь</S.Text>
              <S.Text>{email}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Номер карты</S.Text>
              <S.Text>{cardNumber}</S.Text>
            </S.TipCardRow>
          </S.TipCardMain>
        </S.TipCard>
      )
    }
  )

  return (
    <S.TipsTable>
      <S.Top>
        <TimePeriodFilter />
        <ExcelDownload />
      </S.Top>

      <S.TableContainer>
        <StatisticRow stats={statisticTotal} />

        <Table columns={columns} rows={rows} />
        <S.TipCardList>{tipCardList}</S.TipCardList>

        <StatisticRow stats={statisticTotal} />
      </S.TableContainer>
    </S.TipsTable>
  )
}
