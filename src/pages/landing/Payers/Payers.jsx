import Head from 'next/head'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import {
  TariffsSection,
  TrustUsSection,
  MediaAboutUsSection,
  ConnectFormSection
} from 'landing/sections'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './Payers.styled'

import dashboard from '@public/img/landing/payers-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/payers-banner-dashboard-mobile.png'

// import PackageIcon from '@public/icons/package.svg'
// import CartIcon from '@public/icons/cart.svg'
// import GearsIcon from '@public/icons/gears.svg'

export const PayersPage = () => {
  // const payerTypes = [
  //   {
  //     icon: <PackageIcon />,
  //     label: 'У вас есть клиентская база из ресторанов, салонов красоты или доставок'
  //   },
  //   {
  //     icon: <CartIcon />,
  //     label: 'Вы создатель агрегатора ресторанов, салонов красоты, доставок'
  //   },
  //   {
  //     icon: <GearsIcon />,
  //     label: 'Автоматизируете рестораны'
  //   }
  // ]

  const bannerActions = <LinkButton href={ROUTE_NAMES.AUTH}>Оплатить чаевые</LinkButton>

  return (
    <>
      <Head>
        <title>Плательщикам</title>
      </Head>

      <Header />

      <main>
        <PageBanner
          title="Оставляйте чаевые и донаты кому угодно. Где угодно"
          subtitle="Оплачивайте чаевые мгновенно. Где угодно. Любому получателю в мире"
          actions={bannerActions}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section title="Оставить чаевые или сделать донат в 2 клика!" styles={S.sectionStyles}>
          <S.Text>
            Всё, что вам требуется - это навести камеру вашего смартфона на КР код. Открыть окно с
            профилем получателя, указать сумму и нажать оплатить. Оставлять чаевые или делать донаты
            ещё никогда не было так просто и быстро! Мотивируйте и поощряйте работников сферы услуг,
            любимых артистов, блогеров, спортсменов быть лучше в своём деле!
          </S.Text>
        </Section>

        {/* <ListIconSection title="Кто может быть плательщиком" list={payerTypes} /> */}
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </main>

      <Footer />
    </>
  )
}
