import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner } from 'landing/components'
import { TariffsSection, ConnectFormSection } from 'landing/sections'
import { LinkButton } from 'ui'
import { UsersSection, HowServiceWorkSection, WhereCanUseSection } from './sections'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/main-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

export const MainPage = () => {
  const { t } = useTranslation('common')

  const bannerActions = (
    <>
      <LinkButton href={ROUTE_NAMES.RECIPIENTS}>{t('receive-tips')}</LinkButton>

      <LinkButton href={ROUTE_NAMES.PAYERS} variant="bordered">
        {t('pay-tips')}
      </LinkButton>
    </>
  )

  return (
    <>
      <Head>
        <title>{t('main-page')}</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title={t('get-tips-instantly')}
          subtitle={t('get-tax-free-donations-instantly')}
          actions={bannerActions}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <UsersSection />
        <HowServiceWorkSection />
        <WhereCanUseSection />
        <TariffsSection />
        {/* <TrustUsSection /> */}
        {/* <MediaAboutUsSection /> */}
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
