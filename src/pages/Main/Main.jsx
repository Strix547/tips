import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { statisticsStore } from 'store'

import { ROUTES } from 'core/routes'

export const UserMainPage = () => {
  const router = useRouter()

  useEffect(() => {
    statisticsStore.getIncomeStatistics({
      userId: 513963,
      format: 'JSON',
      zoneOffset: new Date(),
      currency: 'USD'
    })
  }, [])

  const onCreateQrClick = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: onCreateQrClick }}>
        <BarChart title="Статистика входящих оплат" />
        <TipsTable />
      </AccountLayout>
    </>
  )
}
