import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, LineChart } from 'components'
import { Info, TotalEarned, AgentsTable } from './components'
import { ROUTES } from 'core/routes'

import * as S from './ForAgentsPage.styled'

export const ForAgentsPage = () => {
  const router = useRouter()

  const toQrCreatePage = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  return (
    <>
      <Head>
        <title>Агентам</title>
      </Head>

      <AccountLayout title="Агентам" button={{ label: 'Добавить QR-код', onClick: toQrCreatePage }}>
        <S.Content>
          <Info />
          <TotalEarned amount={178480} />
          <BarChart
            labels={[]}
            values={[]}
            title="Количество зарегистрированных реферальных пользователей"
          />
          <LineChart
            labels={[]}
            values={[]}
            title="Чаевые заработанные реферальными пользователями"
          />
          <AgentsTable />
        </S.Content>
      </AccountLayout>
    </>
  )
}
