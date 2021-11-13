import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import {
  TipsSection,
  ListIconSection,
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/agents-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/agents-banner-dashboard-mobile.png'

import SheetIcon from '@public/icons/sheet.svg'
import DeviceDesignClickIcon from '@public/icons/device-design-click.svg'
import DeviceWindowSettingsIcon from '@public/icons/devices-window-settings.svg'

import * as S from './Agents.styled'

export const AgentsPage = () => {
  const { t } = useTranslation('common')

  const agentTypes = [
    {
      icon: <SheetIcon />,
      label: t('have-customer-base')
    },
    {
      icon: <DeviceDesignClickIcon />,
      label: t('you-createtor-business')
    },
    {
      icon: <DeviceWindowSettingsIcon />,
      label: t('you-automate-restaurants')
    }
  ]

  const bannerFeatures = [
    t('connect-people-to-system-start-earning'),
    t('increase-money-incomes-new-user')
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>{t('become-agent')}</LinkButton>

  return (
    <>
      <Head>
        <title>{t('agents')}</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title={t('make-money-with-us')}
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section styles={S.sectionStyles}>
          <S.Text>{t('our-service-additional-income')}</S.Text>
          <LinkButton href="/">{t('more')}</LinkButton>
        </Section>

        <ListIconSection title={t('who-can-be-agent')} list={agentTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
