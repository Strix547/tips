import * as S from './StatisticRow.styled'

export const StatisticRow = ({ tips, fee, receiptAverage }) => {
  const currency = '₽'

  const stastics = [
    { label: 'Всего чаевых', value: tips },
    { label: 'Всего комиссия', value: fee },
    { label: 'Средний чек', value: receiptAverage }
  ]

  return (
    <S.StatisticRow>
      {stastics.map(({ label, value }) => (
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
