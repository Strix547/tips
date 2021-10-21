import { useMediaQuery } from 'react-responsive'
import { Tooltip } from '@material-ui/core'

import { Table } from 'ui'

import * as S from './ReviewsTable.styled'

export const ReviewsTable = ({ reviews }) => {
  const screenLess720 = useMediaQuery({ maxWidth: 720 })

  // const renderTooltip = (text) => {
  //   return (
  //     <S.CellTooltip>
  //       <Tooltip
  //         title={text}
  //         placement="bottom-start"
  //         classes={{ popper: 'employee-tooltip-popper' }}
  //       >
  //         <S.Text>{text}</S.Text>
  //       </Tooltip>
  //     </S.CellTooltip>
  //   )
  // }

  const renderReviewCard = ({ id, platformId, fullName, phone, platform, statistics }) => {
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
      headerName: 'Дата',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Рейтинг',
      field: 'rating',
      flex: 1
    },
    {
      headerName: 'Комментарий',
      field: 'comment',
      flex: 1
    },
    {
      headerName: 'Впечатление',
      field: 'impression',
      flex: 1
    },
    {
      headerName: 'Площадка',
      field: 'platform',
      flex: 1
    },
    {
      headerName: 'Сотрудник',
      field: 'employee',
      flex: 1
    }
  ]

  const rows = reviews.map(
    ({ dateTime, impression, comment, firstName, lastName, platformName, platformId }) => ({
      dateTime: `${dateTime?.toLocaleDateString()} ${dateTime?.toLocaleTimeString().slice(0, 5)}`,
      rating: comment,
      impression,
      platform: platformName,
      employee: `${lastName} ${firstName}`
    })
  )

  const reviewCardList = reviews.map(({ id, firstName, lastName, phone, platformName, tips }) =>
    renderReviewCard({
      id,
      fullName: `${firstName} ${lastName}`,
      phone: `+${phone}`,
      platform: platformName,
      statistics: tips
    })
  )

  return (
    <S.ReviewsTable>
      {!screenLess720 ? <Table columns={columns} rows={rows} /> : reviewCardList}
    </S.ReviewsTable>
  )
}
