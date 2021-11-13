import { useTranslation } from 'next-i18next'

import { Section, ServiceWorkSteps } from 'landing/components'

export const HowServiceWorkSection = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('how-service-works')} gray>
      <ServiceWorkSteps />
    </Section>
  )
}
