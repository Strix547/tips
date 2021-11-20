import { useTranslation } from 'next-i18next'

import { Section, ServiceWorkSteps } from 'landing/components'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './HowServiceWork.styled'

export const HowServiceWorkSection = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('how-service-works')} styles={S.sectionStyles}>
      <ServiceWorkSteps />
      <LinkButton href={ROUTE_NAMES.AUTH}>{t('receive-tips')}</LinkButton>
    </Section>
  )
}
