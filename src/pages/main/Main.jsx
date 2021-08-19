import { Header } from 'layout'
import { PageBanner } from 'landing/components'
import { TariffsSection, TrustUsSection, MediaAboutUsSection } from 'landing/sections'
import { Button } from 'ui'

import { UsersSection, HowServiceWorkSection, WhereCanUseSection } from './sections'

import * as S from './Main.styled'

import dashboard from '@public/img/pages/main/banner-dashboard.png'

export const MainPage = () => {
  const bannerActions = (
    <>
      <Button>Получать чаевые</Button>
      <Button variant="bordered">Оплатить чаевые</Button>
    </>
  )

  return (
    <S.MainPage>
      <Header />

      <PageBanner
        title="Получайте чаевые мгновенно. Где угодно. От кого-либо"
        subtitle="Оплачивайте чаевые мгновенно. Где угодно. Любому получателю в мире"
        actions={bannerActions}
        img={dashboard}
      />

      <UsersSection />
      <HowServiceWorkSection />
      <WhereCanUseSection />
      <TariffsSection />
      <TrustUsSection />
      <MediaAboutUsSection />
    </S.MainPage>
  )
}
