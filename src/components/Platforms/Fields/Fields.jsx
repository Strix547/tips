import { MainInfo, TipsDistribution, PaymentAndRequisites } from './components'

import * as S from './Fields.styled'

export const PlatformFields = ({ incomePercentage, onIncomePercentageChange }) => {
  return (
    <S.PlatformFields>
      <MainInfo />

      <TipsDistribution
        incomePercentage={incomePercentage}
        onIncomePercentageChange={onIncomePercentageChange}
      />

      <PaymentAndRequisites />
    </S.PlatformFields>
  )
}
