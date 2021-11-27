import { useRouter } from 'next/router'

import { Table, FormField } from 'ui'
import { ExcelDownload, ActionCell } from 'common'
import { TableRowCard } from 'components'

import { USER_ROLES } from 'core/constants'
import { ROUTE_NAMES } from 'core/routes'
import { transformDateTimeToLabel } from 'utils'

import * as S from './Table.styled'

import LoupeIcon from '@public/icons/loupe.svg'

export const UsersTable = ({ users = [], isUsersLoading, onExcelDownload }) => {
  const router = useRouter()

  const toUserStatisticsPage = (userId) => {
    router.push({
      pathname: `/admin/users/${userId}/statistics`,
      query: { lang: router.locale }
    })
  }

  const toggleUserActive = () => {}

  const toUserEditPage = (userId) => {
    router.push({
      pathname: ROUTE_NAMES.ADMIN_USERS_EDIT,
      query: { id: userId }
    })
  }

  // 1210px show more icon and popup
  const renderActionCell = ({ id, active }) => {
    return (
      <ActionCell
        active={active}
        actions={[
          { label: 'active', onClick: () => toggleUserActive(), order: 1 },
          { label: 'edit', onClick: () => toUserEditPage(id), order: 2 },
          { label: 'chart', onClick: () => toUserStatisticsPage(id), order: 3 }
        ]}
      />
    )
  }

  const getRoleLabel = (role) => USER_ROLES.find(({ value }) => role === value).label

  const columns = [
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
      headerName: 'Дата регистрации',
      field: 'date',
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
    },
    {
      headerName: 'Действия',
      field: 'actions',
      flex: 1,
      sortable: false,
      renderCell: ({ row: { id, active } }) => renderActionCell({ id, active })
    }
  ]

  const rows = users.map(
    ({ id, phone, firstName, lastName, email, country, role, signUpDateTime, active }) => ({
      id,
      phone,
      fullName: `${lastName} ${firstName}`,
      email,
      country,
      group: getRoleLabel(role),
      date: transformDateTimeToLabel(signUpDateTime),
      active
    })
  )

  const tableCards = users.map(
    ({ id, firstName, lastName, phone, country, role, email, signUpDateTime, active }) => {
      const rows = [
        { label: 'Телефон', value: phone },
        { label: 'E-mail', value: email },
        { label: 'Дата', value: transformDateTimeToLabel(signUpDateTime) },
        { label: 'Группа', value: getRoleLabel(role) },
        { label: 'Страна', value: country }
      ]

      return (
        <TableRowCard
          key={id}
          top={{
            left: `${lastName} ${firstName}`,
            right: renderActionCell({ id, role, active })
          }}
          rows={rows}
        />
      )
    }
  )

  return (
    <S.UsersTable>
      <S.Top>
        <FormField
          name="name"
          placeholder="Поиск по сотруднику"
          InputProps={{ endAdornment: <LoupeIcon /> }}
        />

        <ExcelDownload onClick={onExcelDownload} />
      </S.Top>

      <Table
        columns={columns}
        rows={rows}
        cards={tableCards}
        cardHeight={254}
        isLoading={isUsersLoading}
        noText="Пользователи не найдены"
      />
    </S.UsersTable>
  )
}
