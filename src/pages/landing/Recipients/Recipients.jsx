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
import { HowServiceWorkSection } from './sections'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/recipients-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/recipients-banner-dashboard-mobile.png'

import SheetIcon from '@public/icons/sheet.svg'

import * as S from './Recipients.styled'

export const RecipientsPage = () => {
  const agentTypes = [
    {
      icon: <SheetIcon />,
      label: 'У вас есть клиентская база из ресторанов, салонов красоты или доставок'
    },
    {
      icon: <SheetIcon />,
      label: 'Вы создатель агрегатора ресторанов, салонов красоты, доставок'
    },
    {
      icon: <SheetIcon />,
      label: 'Автоматизируете рестораны'
    }
  ]

  const bannerFeatures = [
    'Не облагаются налогом',
    'Вывод накопленных чаевых на любой счет',
    'Принимайте чаевые с карт'
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>Получать чаевые</LinkButton>

  return (
    <>
      <Head>
        <title>Получателям</title>
      </Head>

      <Header />

      <S.Main>
        <PageBanner
          title="Электронные чаевые моментально"
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section styles={S.sectionStyles}>
          <S.Text>
            Зарегистрируйтесь в нашем сервисе и получите персональный QR код. Предоставляйте этот QR
            код вашим клиентам, чтобы те оставляли вам чаевые или донаты! Всё, что нужно клиенту -
            это навести камеру своего смартфона на ваш код и сделать 2 клика в открывшемся окне,
            оставив вам картой желанную сумму. Оставлять чаевые ещё никогда не было так просто!
          </S.Text>
        </Section>

        <HowServiceWorkSection />
        <ListIconSection title="Кто может быть агентом" list={agentTypes} />
        <TariffsSection />
        <TrustUsSection />
        <MediaAboutUsSection />
        <ConnectFormSection />
      </S.Main>

      <Footer />
    </>
  )
}
