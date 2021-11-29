import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import { TariffsSection, ConnectFormSection } from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'
import { localeImg } from 'utils'

import * as S from './Payers.styled'

import dashboard from '@public/img/landing/payers-banner-dashboard.png'
import dashboardEn from '@public/img/landing/payers-banner-dashboard-en.png'
import dashboardFr from '@public/img/landing/payers-banner-dashboard-fr.png'

import dashboardMobile from '@public/img/landing/payers-banner-dashboard-mobile.png'
import dashboardMobileEn from '@public/img/landing/payers-banner-dashboard-mobile-en.png'
import dashboardMobileFr from '@public/img/landing/payers-banner-dashboard-mobile-fr.png'

import PackageIcon from '@public/icons/package.svg'
import CartIcon from '@public/icons/cart.svg'
import GearsIcon from '@public/icons/gears.svg'

export const PayersPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const payerTypes = [
    {
      icon: <PackageIcon />,
      label: t('have-customer-base')
    },
    {
      icon: <CartIcon />,
      label: t('you-createtor-business')
    },
    {
      icon: <GearsIcon />,
      label: t('you-automate-restaurants')
    }
  ]

  const bannerActions = <LinkButton href={ROUTE_NAMES.AUTH}>{t('pay-tips')}</LinkButton>

  return (
    <>
      <Head>
        <title>{t('for-payers')}</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title={t('pay-tips-donates-anyone')}
          subtitle={t('pay-tips-immediately-wherever')}
          actions={bannerActions}
          img={{
            desktop: localeImg(locale, dashboard, dashboardEn, dashboardFr),
            mobile: localeImg(locale, dashboardMobile, dashboardMobileEn, dashboardMobileFr)
          }}
        />

        <Section title={t('leave-tip-2-clicks')} styles={S.sectionStyles}>
          <S.Text>{t('payers-section-text')}</S.Text>
        </Section>

        {/* <ListIconSection title="Кто может быть плательщиком" list={payerTypes} /> */}
        <TariffsSection />
        {/* <TrustUsSection /> */}
        {/* <MediaAboutUsSection /> */}
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
