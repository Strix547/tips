import { useTranslation } from 'next-i18next'

import { TableRowCard } from 'components'
import { RatingCell } from 'common'
import { Table } from 'ui'

import { transformDateTimeToLabel } from 'utils'

import * as S from './Table.styled'

export const ReviewsTable = ({ reviews = [], isReviewsLoading }) => {
  const { t } = useTranslation('common')

  const columns = [
    {
      headerName: t('date-time'),
      field: 'dateTime',
      flex: 1
    },
    {
      headerName: t('rating'),
      field: 'rating',
      flex: 1,
      renderCell: ({ row }) => <RatingCell rating={row.rating} />
    },
    {
      headerName: t('comment'),
      field: `comment`,
      flex: 1
    },
    {
      headerName: t('impression'),
      field: 'impression',
      flex: 1
    },
    {
      headerName: t('platform'),
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

  const tableCards = reviews.map(
    ({ dateTime, rating, comment, impression, platformName, firstName, lastName }) => {
      const rows = [
        { label: t('comment'), value: comment || '' },
        { label: t('impression'), value: impression || '' },
        { label: t('platform'), value: platformName },
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
      <Table
        columns={columns}
        rows={rows}
        isLoading={isReviewsLoading}
        cards={tableCards}
        cardHeight={219}
        noText={t('no-reviews')}
      />
    </S.ReviewsTable>
  )
}
