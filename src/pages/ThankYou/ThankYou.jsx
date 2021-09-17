import Head from 'next/head'

import { AccountLayout } from 'layout'

import * as S from './ThankYou.styled'

import HandMobileSuccess from '@public/img/hand-mobile-success.svg'

export const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Спасибо!</title>
      </Head>

      <AccountLayout>
        <S.Content>
          <HandMobileSuccess />
          <S.Text>Спасибо вам огромное за чаевые!</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
