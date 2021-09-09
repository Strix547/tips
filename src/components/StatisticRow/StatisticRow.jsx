import * as S from './StatisticRow.styled'

export const StatisticRow = ({ stats }) => {
  const currency = '₽'

  return (
    <S.StatisticRow>
      {stats.map(({ label, value }) => (
        <li key={label}>
          <S.Label>{label}:</S.Label>

          <S.Value>
            {value.toLocaleString()} {currency}
          </S.Value>
        </li>
      ))}
    </S.StatisticRow>
  )
}
