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
import { Button } from 'ui'

import dashboard from '@public/img/landing/agents-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

import SheetIcon from '@public/icons/sheet.svg'
import DeviceDesignClickIcon from '@public/icons/device-design-click.svg'
import DeviceWindowSettingsIcon from '@public/icons/devices-window-settings.svg'

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
    'Подключайте партнеров и получайте за это вознаграждение',
    'Дополните свой портфель актуальным сервисом'
  ]

  const bannerAction = <Button>Стать агентом</Button>

  return (
    <>
      <Header />

      <main>
        <PageBanner
          title="Зарабатывайте вместе с нами"
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <TipsSection />
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
