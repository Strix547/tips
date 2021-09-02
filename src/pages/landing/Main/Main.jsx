import { Header, Footer } from 'layout'
import { PageBanner } from 'landing/components'
import {
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { LinkButton } from 'ui'
import { UsersSection, HowServiceWorkSection, WhereCanUseSection } from './sections'

import { ROUTES } from 'core/routes'

import dashboard from '@public/img/landing/main-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

export const MainPage = () => {
  const bannerActions = (
    <>
      <LinkButton href={ROUTES.RECIPIENTS}>Получать чаевые</LinkButton>

      <LinkButton href={ROUTES.PAYERS} variant="bordered">
        Оплатить чаевые
      </LinkButton>
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
        <HowServiceWorkSection />
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
