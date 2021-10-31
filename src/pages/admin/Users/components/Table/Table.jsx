import { Table, FormField } from 'ui'
import { ExcelDownload } from 'common'

import { transformDateToLabel } from 'utils'

import * as S from './Table.styled'

export const UsersTable = ({ users, onExcelDownload }) => {
  const columns = [
    {
      headerName: 'Дата регистрации',
      field: 'date',
      flex: 1
    },
    {
      headerName: 'Имя',
      field: 'fullName',
      flex: 1
    },
    {
      headerName: 'Телефон',
      field: 'phone',
      flex: 1
    },
    {
      headerName: 'E-mail',
      field: 'email',
      flex: 1
    },
    {
      headerName: 'Страна',
      field: 'country',
      flex: 1
    },
    {
      headerName: 'Группа',
      field: 'group',
      flex: 1
    }
  ]

  const rows = users.map(
    ({ id, phone, firstName, lastName, email, country, role, active, date }) => ({
      id,
      phone,
      fullName: `${lastName} ${firstName}`,
      email,
      country,
      group: role,
      date: transformDateToLabel(date)
    })
  )

  // const tableCards = users.map(
  //   ({ id, platformName, dateTime, tipAmount, commission, rating }) => {
  //     const rows = [
  //       { label: 'Площадка', value: platformName },
  //       { label: 'Размер чаевых', value: getPriceLabel(tipAmount, currencyLabel) },
  //       { label: 'Комссия', value: getPriceLabel(commission, currencyLabel) },
  //       { label: 'Рейтинг', value: <RatingCell rating={rating} /> }
  //     ]
  //     return (
  //       <TableRowCard
  //         key={id}
  //         top={{
  //           left: transformDateTimeToLabel(dateTime),
  //           right: getPriceLabel(tipAmount, currencyLabel)
  //         }}
  //         rows={rows}
  //       />
  //     )
  //   }
  // )

  return (
    <S.Table>
      <S.Top>
        <FormField name="name" placeholder="Поиск по сотруднику" />
        <ExcelDownload onClick={onExcelDownload} />
      </S.Top>

      <Table columns={columns} rows={rows} />
    </S.Table>
  )
}
