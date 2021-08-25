import { Header, Footer } from 'layout'
import { PageBanner } from 'landing/components'
import {
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { Button } from 'ui'
import { UsersSection, HowServiceWorkSection, WhereCanUseSection } from './sections'

import dashboard from '@public/img/landing/main-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

export const MainPage = () => {
  const bannerActions = (
    <>
      <Button>Получать чаевые</Button>
      <Button variant="bordered">Оплатить чаевые</Button>
    </>
  )

  return (
    <>
      <Header />

      <main>
        <PageBanner
          title="Получайте чаевые мгновенно. Где угодно. От кого-либо"
          subtitle="Оплачивайте чаевые мгновенно. Где угодно. Любому получателю в мире"
          actions={bannerActions}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <UsersSection />
        {/* <HowServiceWorkSection /> */}
        <WhereCanUseSection />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
