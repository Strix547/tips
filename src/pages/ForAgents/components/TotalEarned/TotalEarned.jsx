import { formatPrice } from 'utils'

import * as S from './TotalEarned.styled'

export const TotalEarned = ({ amount }) => {
  const currency = '₽'

  return (
    <S.TotalEarned>
      <S.Text>Всего заработано</S.Text>
      <S.Amount>{formatPrice(amount, currency)}</S.Amount>
    </S.TotalEarned>
  )
}
