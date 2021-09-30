import Head from 'next/head'

import { AccountLayout } from 'layout'

import * as S from './Loyalty.styled'

import LoyaltyImg from '@public/img/loyalty.svg'

export const LoyaltyPage = () => {
  return (
    <>
      <Head>
        <title>Программа лояльности</title>
      </Head>

      <AccountLayout title="Программа лояльности">
        <S.Content>
          <LoyaltyImg />

          <S.Text>
            На странице указано, что при оплате чаевых при этом будучи авторизованном в сервисе,
            начисляется бонус, который можно потратить в ресторанах, подключенных к сервису
            получения чаевых.
          </S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
