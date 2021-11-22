import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import { localStore, userStore } from 'store'
import { getPriceLabel } from 'utils'

import * as S from './TotalEarned.styled'

export const TotalEarned = observer(({ amount }) => {
  const { t } = useTranslation('common')

  const currency = userStore.personalData.currency.symbol

  return (
    <S.TotalEarned>
      <S.Text>{t('earned')}</S.Text>
      <S.Amount>{getPriceLabel(amount, currency)}</S.Amount>
    </S.TotalEarned>
  )
})
