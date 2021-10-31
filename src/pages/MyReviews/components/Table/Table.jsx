import { TableRowCard, RatingCell, NoResultFound } from 'components'
import { Table } from 'ui'

import { transformDateTimeToLabel } from 'utils'

import * as S from './Table.styled'

export const ReviewsTable = ({ reviews }) => {
  const columns = [
    {
      headerName: 'Дата и время',
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: 'Рейтинг',
      field: 'rating',
      flex: 1,
      renderCell: ({ row }) => <RatingCell rating={row.rating} />
    },
    {
      headerName: 'Комментарий',
      field: `comment`,
      flex: 1
    },
    {
      headerName: 'Впечатление',
      field: 'impression',
      flex: 1
    },
    {
      headerName: 'Площадка',
      field: 'platformName',
      flex: 1
    },
    {
      headerName: 'Сотрудник',
      field: `employee`,
      flex: 1
    }
  ]

  const rows = reviews.map(
    ({ dateTime, rating, comment, impression, platformName, firstName, lastName }) => ({
      id: dateTime.getTime(),
      dateTime: transformDateTimeToLabel(dateTime),
      rating,
      comment: comment || '-',
      impression: impression || '-',
      platformName,
      employee: `${lastName} ${firstName}`
    })
  )

  const cardList = reviews.map(
    ({ dateTime, rating, comment, impression, platformName, firstName, lastName }) => {
      const rows = [
        { label: 'Комментарий', value: comment || '' },
        { label: 'Впечатление', value: impression || '' },
        { label: 'Площадка', value: platformName },
        { label: 'Сотрудник', value: `${lastName} ${firstName}` }
      ]

      return (
        <TableRowCard
          top={{ left: transformDateTimeToLabel(dateTime), right: <RatingCell rating={rating} /> }}
          rows={rows}
        />
      )
    }
  )

  return (
    <S.ReviewsTable>
      <S.WhiteBox>
        <Table columns={columns} rows={rows} />
      </S.WhiteBox>

      <S.TipCardList>
        {reviews.length ? cardList : <NoResultFound>No reviews found</NoResultFound>}
      </S.TipCardList>
    </S.ReviewsTable>
  )
}
