import Head from 'next/head'

import { Header, Footer } from 'layout'
import { PageBanner } from 'landing/components'
import {
  TipsSection,
  ListIconSection,
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTES } from 'core/routes'

import dashboard from '@public/img/landing/business-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/business-banner-dashboard-mobile.png'

import DeviceDesignIcon from '@public/icons/device-design.svg'
import DeviceWindowSettingsIcon from '@public/icons/devices-window-settings.svg'
import CashierMachineIcon from '@public/icons/cashier-machine.svg'

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
    'Бесплатно для бизнеса',
    'Дополнительный заработок для персонала',
    'Инструмент повышения уровня сервиса и гостеприимства'
  ]

  const bannerAction = <LinkButton href={ROUTES.AUTH}>Подключить чаевые</LinkButton>

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

        <TipsSection />
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
