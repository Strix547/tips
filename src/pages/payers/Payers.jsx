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

import dashboard from '@public/img/landing/payers-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/main-banner-dashboard-mobile.png'

import PackageIcon from '@public/icons/package.svg'
import CartIcon from '@public/icons/cart.svg'
import GearsIcon from '@public/icons/gears.svg'

export const PayersPage = () => {
  const payerTypes = [
    {
      icon: <PackageIcon />,
      label: 'У вас есть клиентская база из ресторанов, салонов красоты или доставок'
    },
    {
      icon: <CartIcon />,
      label: 'Вы создатель агрегатора ресторанов, салонов красоты, доставок'
    },
    {
      icon: <GearsIcon />,
      label: 'Автоматизируете рестораны'
    }
  ]

  const bannerActions = (
    <>
      <Button>Получать чаевые</Button>
      <Button variant="bordered">Оплатить чаевые</Button>
    </>
  )

  return (
    <>
      <Header />

      <main>
        <PageBanner
          title="Получайте чаевые мгновенно. Где угодно. От кого-либо"
          subtitle="Оплачивайте чаевые мгновенно. Где угодно. Любому получателю в мире"
          actions={bannerActions}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <TipsSection />
        <ListIconSection title="Кто может быть плательщиком" list={payerTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
