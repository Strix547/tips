import { Section, ServiceWorkSteps } from 'landing/components'
import { Button } from 'ui'

import * as S from './HowServiceWork.styled'

export const HowServiceWorkSection = () => {
  return (
    <Section title="Как работает сервис" styles={S.sectionStyles}>
      {/* <ServiceWorkSteps /> */}
      <Button>Получать чаевые</Button>
    </Section>
  )
}
