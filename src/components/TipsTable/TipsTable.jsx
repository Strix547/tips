import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { FormProvider } from 'react-hook-form'
import Link from 'next/link'

import { TimePeriodFilter, StatisticRow, CurrencySelect } from 'components'
import { ExcelDownload } from 'common'
import { Table } from 'ui'

import { localStore } from 'store'
import { ROUTES } from 'core/routes'
import { formatPrice } from 'utils'

import * as S from './TipsTable.styled'

export const TipsTable = observer(({ useFormProps, data = [], onExcelDownload }) => {
  const currencyLabel = localStore.currency.label

  const transformedData = toJS(data)

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

  const rows = transformedData.map(({ qrId, dateTime, qrName, tipAmount, impression }) => ({
    id: qrId,
    dateTime: `${dateTime?.toLocaleDateString()} ${dateTime?.toLocaleTimeString().slice(0, 5)}`,
    qrName,
    tipAmount,
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

  const tipCardList = transformedData.map(
    ({ qrId, qrName, dateTime, tipAmount, impression, type }) => {
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
    }
  )

  return (
    <S.TipsTable>
      <S.Top>
        <FormProvider {...useFormProps}>
          <S.TopLeft>
            <TimePeriodFilter useFormProps={useFormProps} />
            <CurrencySelect />
          </S.TopLeft>

          <ExcelDownload onClick={onExcelDownload} />
        </FormProvider>
      </S.Top>

      <S.TableContainer>
        <StatisticRow stats={statisticTotal} />

        <Table columns={columns} rows={rows} />
        <S.TipCardList>{tipCardList}</S.TipCardList>

        <StatisticRow stats={statisticTotal} />
      </S.TableContainer>
    </S.TipsTable>
  )
})
