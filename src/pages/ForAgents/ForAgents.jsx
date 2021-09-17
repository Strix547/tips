import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, LineChart } from 'components'
import { Info, TotalEarned, AgentsTable } from './components'

import * as S from './ForAgentsPage.styled'

export const ForAgentsPage = () => {
  const onAddQrCode = () => {}

  return (
    <>
      <Head>
        <title>Агентам</title>
      </Head>

      <AccountLayout title="Агентам" button={{ label: 'Добавить QR-код', onClick: onAddQrCode }}>
        <S.Content>
          <Info />
          <TotalEarned amount={178480} />
          <BarChart title="Количество зарегистрированных реферальных пользователей" />
          <LineChart title="Чаевые заработанные реферальными пользователями" />
          <AgentsTable />
        </S.Content>
      </AccountLayout>
    </>
  )
}
