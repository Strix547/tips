import { Section, ServiceWorkSteps } from 'landing/components'
import { LinkButton } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './HowServiceWork.styled'

export const HowServiceWorkSection = () => {
  return (
    <Section title="Как работает сервис" styles={S.sectionStyles}>
      <ServiceWorkSteps />
      <LinkButton href={ROUTES.AUTH}>Получать чаевые</LinkButton>
    </Section>
  )
}
