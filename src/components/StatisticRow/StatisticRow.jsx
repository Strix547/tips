import Skeleton from 'react-loading-skeleton'

import * as S from './StatisticRow.styled'

export const StatisticRow = ({ stats, isLoading, currency }) => {
  return (
    <S.StatisticRow>
      {stats.map(({ label, value }) => (
        <li key={label}>
          <S.Label>{label}:</S.Label>

          <S.Value>
            {!isLoading ? (
              `${value.toLocaleString()} ${currency}`
            ) : (
              <Skeleton width={60} height={20} />
            )}
          </S.Value>
        </li>
      ))}
    </S.StatisticRow>
  )
}
