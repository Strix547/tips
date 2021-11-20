import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { PageBanner, Section } from 'landing/components'
import { ListIconSection, TariffsSection, ConnectFormSection } from 'landing/sections'
import { LinkButton } from 'ui'
import { HowServiceWorkSection } from './sections'

import { ROUTE_NAMES } from 'core/routes'

import dashboard from '@public/img/landing/recipients-banner-dashboard.png'
import dashboardMobile from '@public/img/landing/recipients-banner-dashboard-mobile.png'

import SheetIcon from '@public/icons/sheet.svg'

import * as S from './Recipients.styled'

export const RecipientsPage = () => {
  const { t } = useTranslation('common')

  const agentTypes = [
    {
      icon: <SheetIcon />,
      label: t('have-customer-base')
    },
    {
      icon: <SheetIcon />,
      label: t('you-createtor-business')
    },
    {
      icon: <SheetIcon />,
      label: t('you-automate-restaurants')
    }
  ]

  const bannerFeatures = [
    t('free-from-any-taxes'),
    t('transfer-earned-money-bank'),
    t('start-accepting-tips-from-clients')
  ]

  const bannerAction = <LinkButton href={ROUTE_NAMES.AUTH}>{t('receive-tips')}</LinkButton>

  return (
    <>
      <Head>
        <title>{t('recipients')}</title>
      </Head>

      <Header />

      <S.Main>
        <PageBanner
          title={t('electronic-tips')}
          features={bannerFeatures}
          actions={bannerAction}
          img={{ desktop: dashboard, mobile: dashboardMobile }}
        />

        <Section styles={S.sectionStyles}>
          <S.Text>{t('recipients-text')}</S.Text>
        </Section>

        <HowServiceWorkSection />
        <ListIconSection title={t('who-can-be-agent')} list={agentTypes} />
        <TariffsSection />
        {/* <TrustUsSection /> */}
        {/* <MediaAboutUsSection /> */}
        <ConnectFormSection />
      </S.Main>

      <Footer />
    </>
  )
}
