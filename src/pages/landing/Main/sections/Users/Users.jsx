import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'
import { RowSection } from './components'

import { ROUTE_NAMES } from 'core/routes'

import businessDashboard from '@public/img/landing/business-dashboard.png'
import businessDashboardEn from '@public/img/landing/business-dashboard-en.png'
import recipientDashboard from '@public/img/landing/recipient-dashboard.png'
import recipientDashboardEn from '@public/img/landing/recipient-dashboard-en.png'
import artistDashboard from '@public/img/landing/artist-dashboard.png'
import artistDashboardEn from '@public/img/landing/artist-dashboard-en.png'
import agentDashboard from '@public/img/landing/agent-dashboard.png'
import agentDashboardEn from '@public/img/landing/agent-dashboard-en.png'
import payerDashboard from '@public/img/landing/payer-dashboard.png'
import payerDashboardEn from '@public/img/landing/payer-dashboard-en.png'

export const UsersSection = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const isLocaleRu = locale === 'ru'

  const sections = [
    {
      title: t('for-business'),
      subtitle: t('motivate-employees'),
      pageLink: ROUTE_NAMES.BUSINESS,
      features: [
        t('free-for-business'),
        t('additional-money'),
        t('improvement-tool'),
        t('quick-api-skd-integration')
      ],
      action: { label: t('business-connect') },
      img: isLocaleRu ? businessDashboard : businessDashboardEn
    },
    {
      title: t('for-service-workers'),
      subtitle: t('receive-electronic-tips'),
      pageLink: ROUTE_NAMES.RECIPIENTS,
      features: [t('free-from-taxes')],
      action: { label: t('start-receive-tips') },
      img: isLocaleRu ? recipientDashboard : recipientDashboardEn
    },
    {
      title: t('for-artists'),
      subtitle: t('receive-tips-your-website'),
      pageLink: ROUTE_NAMES.RECIPIENTS,
      features: [
        t('indicate-qr-code'),
        t('transfer-earned-money-bank-card'),
        t('easy-intuitive-interface')
      ],
      action: { label: t('start-receive-donates') },
      img: isLocaleRu ? artistDashboard : artistDashboardEn
    },
    {
      title: t('for-agents'),
      subtitle: t('invite-people-receive-profit'),
      pageLink: ROUTE_NAMES.AGENTS,
      features: [t('transfer-earned-money-bank')],
      action: { label: t('become-agent') },
      img: isLocaleRu ? agentDashboard : agentDashboardEn
    },
    {
      title: t('for-payers'),
      subtitle: t('pay-tips-by-scan-qr'),
      pageLink: ROUTE_NAMES.PAYERS,
      features: [t('pay-tips-2-click')],
      action: { label: t('pay-tips') },
      img: isLocaleRu ? payerDashboard : payerDashboardEn
    }
  ]

  const sectionList = sections.map((props, idx) => (
    <RowSection key={props.title} {...props} reversed={idx % 2 !== 0} />
  ))

  return <Section title={[t('for-who-receive'), t('tips-donates')]}>{sectionList}</Section>
}
