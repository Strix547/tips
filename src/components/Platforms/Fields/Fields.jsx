import { observer } from 'mobx-react-lite'

import { MainInfo, TipsDistribution, PaymentAndRequisites } from './components'

import { adminStore } from 'store'

import * as S from './Fields.styled'

export const PlatformFields = observer(({ incomePercentage, onIncomePercentageChange }) => {
  const { isAdminMode } = adminStore

  return (
    <S.PlatformFields>
      <MainInfo />

      <TipsDistribution
        incomePercentage={incomePercentage}
        onIncomePercentageChange={onIncomePercentageChange}
      />

      {!isAdminMode ? <PaymentAndRequisites /> : null}
    </S.PlatformFields>
  )
})
