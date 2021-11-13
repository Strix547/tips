import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import {
  ListIconSection,
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/business-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/business-banner-dashboard-mobile.png'

import DeviceDesignIcon from '@public/icons/device-design.svg'
import DeviceWindowSettingsIcon from '@public/icons/devices-window-settings.svg'
import CashierMachineIcon from '@public/icons/cashier-machine.svg'

import * as S from './Business.styled'

export const BusinessPage = () => {
  const { t } = useTranslation('common')

  const integrationTypes = [
    {
      icon: <DeviceDesignIcon />,
      label: t('without-integration'),
      desc: 'Описание возможностей системы по генерации QR кода и информация о статистике'
    },
    {
      icon: <DeviceWindowSettingsIcon />,
      label: t('Интеграция по API'),
      desc: 'Описание возможностей системы по интеграции с внешними сервисами по API и с мобильными приложениями'
    },
    {
      icon: <CashierMachineIcon />,
      label: t('integration-cash-register'),
      desc: 'Описание возможностей интеграции с кассовым ПО'
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
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section title={t('your-company-your-tips')} styles={S.sectionStyles}>
          <S.Text>{t('business-section-text')}</S.Text>
        </Section>

        <ListIconSection title={t('possibillities-integration')} list={integrationTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
