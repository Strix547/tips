import { observer } from 'mobx-react-lite'

import { localStore } from 'store'
import { getPriceLabel } from 'utils'

import * as S from './TotalEarned.styled'

export const TotalEarned = observer(({ amount }) => {
  const currency = localStore.currency.label

  return (
    <S.TotalEarned>
      <S.Text>Всего заработано</S.Text>
      <S.Amount>{getPriceLabel(amount, currency)}</S.Amount>
    </S.TotalEarned>
  )
})
