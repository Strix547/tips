import Head from 'next/head'

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
  const agentTypes = [
    {
      icon: <SheetIcon />,
      label: 'У вас есть клиентская база из ресторанов, салонов красоты или доставок'
    },
    {
      icon: <DeviceDesignClickIcon />,
      label: 'Вы создатель агрегатора ресторанов, салонов красоты, доставок'
    },
    {
      icon: <DeviceWindowSettingsIcon />,
      label: 'Автоматизируете рестораны'
    }
  ]

  const bannerFeatures = [
    'Подключайте партнёров и получайте за это вознаграждение',
    'Увеличивайте свой заработок с каждым новым пользователем'
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>Стать агентом</LinkButton>

  return (
    <>
      <Head>
        <title>Агентам</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title="Зарабатывайте вместе с нами"
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section styles={S.sectionStyles}>
          <S.Text>
            Наш сервис как дополонительный заработок! Агентом в нашем сервисе может быть абсолютно
            кто угодно. Получайте свой % от чаевых подключенных вами пользователей.
          </S.Text>
          <LinkButton href="/">Подробнее</LinkButton>
        </Section>

        <ListIconSection title="Кто может быть агентом" list={agentTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
