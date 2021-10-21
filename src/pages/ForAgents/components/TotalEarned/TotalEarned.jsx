import { getPriceLabel } from 'utils'

import * as S from './TotalEarned.styled'

export const TotalEarned = ({ amount }) => {
  const currency = '₽'

  return (
    <S.TotalEarned>
      <S.Text>Всего заработано</S.Text>
      <S.Amount>{getPriceLabel(amount, currency)}</S.Amount>
    </S.TotalEarned>
  )
}
