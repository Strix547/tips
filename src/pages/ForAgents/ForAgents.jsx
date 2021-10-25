import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, LineChart } from 'components'
import { Info, TotalEarned, AgentsTable } from './components'

import * as S from './ForAgentsPage.styled'

export const ForAgentsPage = () => {
  return (
    <>
      <Head>
        <title>Агентам</title>
      </Head>

      <AccountLayout title="Агентам">
        <S.Content>
          <Info />

          <TotalEarned amount={0} />

          <BarChart data={[]} title="Количество зарегистрированных реферальных пользователей" />

          <LineChart data={[]} title="Чаевые заработанные реферальными пользователями" />

          <AgentsTable />
        </S.Content>
      </AccountLayout>
    </>
  )
}
