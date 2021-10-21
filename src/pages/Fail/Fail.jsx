import Head from 'next/head'

import { AccountLayout } from 'layout'

import * as S from './Fail.styled'

export const FailPage = () => {
  return (
    <>
      <Head>
        <title>Ошибка</title>
      </Head>

      <AccountLayout>
        <S.Content>
          <S.Text>Ошибка!</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
