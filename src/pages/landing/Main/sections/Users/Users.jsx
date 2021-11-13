import { Section } from 'landing/components'
import { RowSection } from './components'
import { useTranslation } from 'next-i18next'

import { ROUTE_NAMES } from 'core/routes'

import businessDashboard from '@public/img/landing/business-dashboard.png'
import recipientDashboard from '@public/img/landing/recipient-dashboard.png'
import artistDashboard from '@public/img/landing/artist-dashboard.png'
import agentDashboard from '@public/img/landing/agent-dashboard.png'
import payerDashboard from '@public/img/landing/payer-dashboard.png'

export const UsersSection = () => {
  const { t } = useTranslation('common')

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
      img: businessDashboard
    },
    {
      title: t('for-service-workers'),
      subtitle: t('receive-electronic-tips'),
      pageLink: ROUTE_NAMES.RECIPIENTS,
      features: [t('free-from-taxes')],
      action: { label: t('start-receive-tips') },
      img: recipientDashboard
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
      img: artistDashboard
    },
    {
      title: t('for-agents'),
      subtitle: t('invite-people-receive-profit'),
      pageLink: ROUTE_NAMES.AGENTS,
      features: [t('transfer-earned-money-bank')],
      action: { label: t('become-agent') },
      img: agentDashboard
    },
    {
      title: t('for-payers'),
      subtitle: t('pay-tips-by-scan-qr'),
      pageLink: ROUTE_NAMES.PAYERS,
      features: [t('pay-tips-2-click')],
      action: { label: t('pay-tips') },
      img: payerDashboard
    }
  ]

  const sectionList = sections.map((props, idx) => (
    <RowSection key={props.title} {...props} reversed={idx % 2 !== 0} />
  ))

  return <Section title={[t('For all who receive'), t('tips-donates')]}>{sectionList}</Section>
}
