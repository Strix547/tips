import React, { Fragment } from 'react'

import { Header } from 'layout'
import { PageBanner } from 'landing/components'
import { Button } from 'ui'

import * as S from './Main.styled'

import dashboard from '@public/img/pages/main/dashboard.png'

export const MainPage = () => {
  const bannerActions = (
    <>
      <Button>Получать чаевые</Button>
      <Button variant="bordered">Оплатить чаевые</Button>
    </>
  )

  return (
    <S.Main>
      <Header />

      <PageBanner
        title="Получайте чаевые мгновенно. Где угодно. От кого-либо"
        subtitle="Оплачивайте чаевые мгновенно. Где угодно. Любому получателю в мире"
        actions={bannerActions}
        img={dashboard}
      />
    </S.Main>
  )
}
