import { useMediaQuery } from 'react-responsive'
import { Tooltip } from '@material-ui/core'
import { useRouter } from 'next/router'

import { ActionsForm } from './components'
import { Table } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './EmployeeTable.styled'

export const EmployeeTable = ({ employees }) => {
  const router = useRouter()
  const screenLess720 = useMediaQuery({ maxWidth: 720 })

  const renderActionCell = ({ row }) => {
    const { id, platformId, available } = row
    return <ActionsForm employeeId={id} platformId={platformId} available={available} />
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

  const toEmployeeEditPage = ({ id }) => {
    router.push({
      pathname: ROUTE_NAMES.ACCOUNT_EMPLOYEE_EDIT,
      query: { id }
    })
  }

  const renderEmployeeCard = ({ id, platformId, fullName, phone, platform, statistics }) => {
    return (
      <S.EmployeeCard onClick={() => toEmployeeEditPage({ id })}>
        <S.EmployeeCardTop>
          <S.Text>{id}</S.Text>

          <S.EmployeeCardActions>
            <ActionsForm employeeId={id} platformId={platformId} />
          </S.EmployeeCardActions>
        </S.EmployeeCardTop>

        <S.EmployeeCardBody>
          <S.Text>ФИО</S.Text>
          <S.Text>{fullName}</S.Text>

          <S.Text>Телефон</S.Text>
          <S.Text>{phone}</S.Text>

          <S.Text>Площадка</S.Text>
          <S.Text>{platform}</S.Text>

          <S.Text>Статистика</S.Text>
          <S.Text>{statistics}</S.Text>
        </S.EmployeeCardBody>
      </S.EmployeeCard>
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
      renderCell: renderActionCell
    }
  ]

  const rows = employees.map(
    ({ id, platformId, firstName, lastName, phone, platformName, tips, available }) => ({
      id,
      fullName: `${firstName} ${lastName}`,
      phone,
      platform: platformName,
      statistics: tips,
      platformId,
      available
    })
  )

  const employeeCardList = employees.map(({ id, firstName, lastName, phone, platformName, tips }) =>
    renderEmployeeCard({
      id,
      fullName: `${firstName} ${lastName}`,
      phone: `+${phone}`,
      platform: platformName,
      statistics: tips
    })
  )

  return (
    <S.EmployeeTable>
      {!screenLess720 ? (
        <Table columns={columns} rows={rows} onRowClick={toEmployeeEditPage} />
      ) : (
        employeeCardList
      )}
    </S.EmployeeTable>
  )
}
