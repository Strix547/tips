import Head from 'next/head'

import { AccountLayout } from 'layout'
import { MainInfo, PaymentAndRequisites, TipsDistribution } from './components'

import * as S from './PlatformEditCreate.styled'

export const PlatformEditCreatePage = () => {
  return (
    <>
      <Head>
        <title>Редактирование и создание площадки</title>
      </Head>

      <AccountLayout title="Редактировать/Создать площадку">
        <S.Content>
          <MainInfo />
          <TipsDistribution />
          <PaymentAndRequisites />
        </S.Content>
      </AccountLayout>
    </>
  )
}
