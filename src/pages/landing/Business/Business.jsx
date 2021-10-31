import Head from 'next/head'

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
  const integrationTypes = [
    {
      icon: <DeviceDesignIcon />,
      label: 'Без интеграции',
      desc: 'Описание возможностей системы по генерации QR кода и информация о статистике'
    },
    {
      icon: <DeviceWindowSettingsIcon />,
      label: 'Интеграция по API',
      desc: 'Описание возможностей системы по интеграции с внешними сервисами по API и с мобильными приложениями'
    },
    {
      icon: <CashierMachineIcon />,
      label: 'Интеграция с кассовым ПО',
      desc: 'Описание возможностей интеграции с кассовым ПО'
    }
  ]

  const bannerFeatures = [
    'Бесплатное подключение вашего бизнеса',
    'Увеличьте заработок вашего персонала',
    'Повысьте уровень сервиса и гостеприимства'
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>Подключить чаевые</LinkButton>

  return (
    <>
      <Head>
        <title>Бизнесу</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title="Чаевые картой – удобно гостю, выгодно персоналу"
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section title="Ваше заведение - ваши чаевые" styles={S.sectionStyles}>
          <S.Text>
            Кумулируйте чаевые на свой счёт в нашем сервисе благодаря присвоенному вашему заведению
            КР коду. Управляйте потоками чаевых через удобную панель и отслеживайте статистику
            чаевых по каждому из сотрудников!
          </S.Text>
        </Section>

        <ListIconSection title="Возможности интеграции" list={integrationTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
