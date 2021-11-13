import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'
import { BoxList } from './components'

export const WhereCanUseSection = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={[t('where-can-use'), t('and-where-can-useful')]}>
      <BoxList />
    </Section>
  )
}
