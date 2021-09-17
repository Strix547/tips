import Head from 'next/head'

import { AccountLayout } from 'layout'
import { SupportForm } from 'components'

import * as S from './Support.styled'

export const SupportPage = () => {
  return (
    <>
      <Head>
        <title>Служба поддержки</title>
      </Head>

      <AccountLayout title="Служба поддержки">
        <S.Content>
          <SupportForm />
        </S.Content>
      </AccountLayout>
    </>
  )
}
