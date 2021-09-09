import { AccountLayout } from 'layout'
import { MainInfo, PaymentAndRequisites, TipsDistribution } from './components'

import * as S from './PlatformEditCreate.styled'

export const PlatformEditCreatePage = () => {
  return (
    <AccountLayout title="Редактировать/Создать площадку">
      <S.Content>
        <MainInfo />
        <TipsDistribution />
        <PaymentAndRequisites />
      </S.Content>
    </AccountLayout>
  )
}
