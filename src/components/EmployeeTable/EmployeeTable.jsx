import { observer } from 'mobx-react-lite'
import { Tooltip } from '@material-ui/core'
import { useRouter } from 'next/router'

import { TableRowCard } from 'components'
import { ActionCell } from 'common'
import { Table } from 'ui'

import { userStore, employeesStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './EmployeeTable.styled'

export const EmployeeTable = observer(({ employees, isEmployeesLoading }) => {
  const router = useRouter()

  const userId = userStore.id

  const toEmployeeStatisticsPage = (employeeId) => {
    router.push({
      pathname: ROUTE_NAMES.ACCOUNT_EMPLOYEE_STATISTICS,
      query: { id: employeeId }
    })
  }

  const toggleEmployeeActive = ({ platformId, employeeId, available }) => {
    employeesStore.changeEmployeeAvailability({
      platformId,
      employeeId,
      available: !available
    })
  }

  const deleteEmployee = ({ employeeId, platformId, userId }) => {
    employeesStore.deleteEmployeeFromPlatform({ employeeId, platformId, userId })
  }

  const toEmployeeEditPage = (employeeId) => {
    router.push({
      pathname: ROUTE_NAMES.ACCOUNT_EMPLOYEE_EDIT,
      query: { id: employeeId }
    })
  }

  const renderActionCell = ({ employeeId, platformId, available }) => {
    return (
      <ActionCell
        active={available}
        actions={[
          { label: 'chart', onClick: () => toEmployeeStatisticsPage(employeeId), order: 1 },
          {
            label: 'active',
            onClick: ({ active }) =>
              toggleEmployeeActive({ platformId, employeeId, available: active }),
            order: 2
          },
          {
            label: 'delete',
            onClick: () => deleteEmployee({ employeeId, platformId, userId }),
            order: 3
          }
        ]}
      />
    )
  }

  const renderTooltip = (text) => {
    return (
      <S.CellTooltip>
        <Tooltip
          title={text}
          placement="bottom-start"
          classes={{ popper: 'employee-tooltip-popper' }}
        >
          <S.Text>{text}</S.Text>
        </Tooltip>
      </S.CellTooltip>
    )
  }

  const renderEmployeeCard = ({
    id,
    employeeId,
    platformId,
    fullName,
    phone,
    platform,
    statistics,
    available
  }) => {
    const rows = [
      { label: 'Имя', value: fullName },
      { label: 'Телефон', value: phone },
      { label: 'Площадка', value: platform },
      { label: 'Статистика', value: statistics }
    ]

    return (
      <TableRowCard
        key={id}
        top={{ left: employeeId, right: renderActionCell({ employeeId, platformId, available }) }}
        rows={rows}
      />
    )
  }

  const columns = [
    {
      headerName: 'ФИО',
      field: 'fullName',
      flex: 1,
      renderCell: ({ row }) => renderTooltip(row.fullName)
    },
    {
      headerName: 'Телефон',
      field: 'phone',
      flex: 1,
      renderCell: ({ row }) => renderTooltip(row.phone)
    },
    {
      headerName: 'Площадка',
      field: 'platform',
      flex: 1,
      renderCell: ({ row }) => renderTooltip(row.platform)
    },
    {
      headerName: 'Статистика',
      field: 'statistics',
      flex: 1
    },
    {
      headerName: 'Действия',
      field: 'actions',
      flex: 1,
      sortable: false,
      renderCell: ({ row: { employeeId, platformId, available } }) =>
        renderActionCell({ employeeId, platformId, available })
    }
  ]

  const rows = employees?.map(
    ({ id, platformId, firstName, lastName, phone, platformName, tips, available }) => ({
      id: platformId + id,
      employeeId: id,
      fullName: `${firstName} ${lastName}`,
      phone,
      platform: platformName,
      statistics: tips,
      platformId,
      available
    })
  )

  const employeeTableCards = employees?.map(
    ({ id, platformId, firstName, lastName, phone, platformName, available, tips }) =>
      renderEmployeeCard({
        id: platformId + id,
        employeeId: id,
        fullName: `${firstName} ${lastName}`,
        phone,
        platform: platformName,
        platformId,
        statistics: tips,
        available
      })
  )

  return (
    <S.EmployeeTable>
      <Table
        columns={columns}
        rows={rows}
        cards={employeeTableCards}
        cardHeight={219}
        isLoading={isEmployeesLoading}
        noText="Сотрудники не найдены"
        onRowClick={({ row }) => toEmployeeEditPage(row.employeeId)}
      />
    </S.EmployeeTable>
  )
})
