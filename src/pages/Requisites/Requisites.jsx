import Head from 'next/head'

import { AccountLayout } from 'layout'

export const RequisitesPage = () => {
  return (
    <>
      <Head>
        <title>Мои реквизиты</title>
      </Head>

      <AccountLayout title="Реквизиты" />
    </>
  )
}
