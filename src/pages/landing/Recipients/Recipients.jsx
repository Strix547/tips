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
import { HowServiceWorkSection } from './sections'

import { ROUTES } from 'core/routes'

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
    'Моментальное зачисление на карту',
    'Расчеты обеспечивает Тинькофф'
  ]

  const bannerAction = <LinkButton href={ROUTES.AUTH}>Получать чаевые</LinkButton>

  return (
    <>
      <Header />

      <S.Main>
        <PageBanner
          title="Чаевые картой моментально"
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <TipsSection />
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
