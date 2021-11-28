import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import { ListIconSection, TariffsSection, ConnectFormSection } from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/business-banner-dashboard.png'
import dashboardEn from '@public/img/landing/business-banner-dashboard-en.png'
import dashboardMobile from '@public/img/landing/business-banner-dashboard-mobile.png'
import dashboardMobileEn from '@public/img/landing/business-banner-dashboard-mobile-en.png'

import DeviceDesignIcon from '@public/icons/device-design.svg'
import DeviceWindowSettingsIcon from '@public/icons/devices-window-settings.svg'
import CashierMachineIcon from '@public/icons/cashier-machine.svg'

import * as S from './Business.styled'

export const BusinessPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const isLocaleRu = locale === 'ru'

  const integrationTypes = [
    {
      icon: <DeviceDesignIcon />,
      label: t('without-integration'),
      desc: t('without-integration-text')
    },
    {
      icon: <DeviceWindowSettingsIcon />,
      label: t('integration-with-api'),
      desc: t('integration-api-text')
    },
    {
      icon: <CashierMachineIcon />,
      label: t('integration-cash-register'),
      desc: t('integration-cash-register-text')
    }
  ]

  const bannerFeatures = [
    t('connect-company-free'),
    t('increase-employee-income'),
    t('give-customers-additional-service')
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>{t('start-getting-tips')}</LinkButton>

  return (
    <>
      <Head>
        <title>{t('business')}</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title={t('tips-by-card-easy-for-client')}
          features={bannerFeatures}
          actions={bannerAction}
          img={{
            desktop: isLocaleRu ? dashboard : dashboardEn,
            mobile: isLocaleRu ? dashboardMobile : dashboardMobileEn
          }}
        />

        <Section title={t('your-company-your-tips')} styles={S.sectionStyles}>
          <S.Text>{t('business-section-text')}</S.Text>
        </Section>

        <ListIconSection title={t('possibillities-integration')} list={integrationTypes} />
        <TariffsSection />
        {/* <TrustUsSection /> */}
        {/* <MediaAboutUsSection /> */}
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
