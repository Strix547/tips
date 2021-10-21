import Head from 'next/head'

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

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/main-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

export const MainPage = () => {
  const bannerActions = (
    <>
      <LinkButton href={ROUTE_NAMES.RECIPIENTS}>Получать чаевые</LinkButton>

      <LinkButton href={ROUTE_NAMES.PAYERS} variant="bordered">
        Оплатить чаевые
      </LinkButton>
    </>
  )

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

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
