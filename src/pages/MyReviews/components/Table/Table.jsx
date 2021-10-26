import Skeleton from 'react-loading-skeleton'

import { Table } from 'ui'

import { transformDateTimeToLabel } from 'utils'

import * as S from './Table.styled'

import StarIcon from '@public/icons/star.svg'

export const ReviewsTable = ({ reviews }) => {
  const renderRatingCell = ({ row }) => {
    return (
      <S.RatingCell>
        <StarIcon /> {row.rating}/5
      </S.RatingCell>
    )
  }

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
      renderCell: renderRatingCell
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
      return (
        <S.TipCard key={dateTime.getTime()}>
          <S.TipCardTop>
            <S.Text>{transformDateTimeToLabel(dateTime)}</S.Text>
            <S.RatingCell>
              <StarIcon /> {rating}/5
            </S.RatingCell>
          </S.TipCardTop>

          <S.TipCardMain>
            <S.TipCardRow>
              <S.Text>Комментарий</S.Text>
              <S.Text>{comment || '-'}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Впечатление</S.Text>
              <S.Text>{impression || '-'}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Площадка</S.Text>
              <S.Text>{platformName}</S.Text>
            </S.TipCardRow>

            <S.TipCardRow>
              <S.Text>Сотрудник</S.Text>
              <S.Text>
                {lastName} {firstName}
              </S.Text>
            </S.TipCardRow>
          </S.TipCardMain>
        </S.TipCard>
      )
    }
  )

  return (
    <S.ReviewsTable>
      <S.WhiteBox>
        <Table columns={columns} rows={rows} />
      </S.WhiteBox>

      <S.TipCardList>
        {reviews.length ? cardList : <S.NoReviewsText>No reviews found</S.NoReviewsText>}
      </S.TipCardList>
    </S.ReviewsTable>
  )
}
