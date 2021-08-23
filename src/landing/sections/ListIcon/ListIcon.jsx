import { Section } from 'landing/components'

import * as S from './ListIcon.styled'

export const ListIconSection = ({ title, list }) => {
  const listItems = list.map(({ icon, label, desc }) => (
    <li key={label}>
      <S.Icon>{icon}</S.Icon>
      <S.Label small={!desc}>{label}</S.Label>
      {desc && <S.Desc>{desc}</S.Desc>}
    </li>
  ))

  return (
    <Section title={title} styles={S.sectionStyles}>
      <S.List>{listItems}</S.List>
    </Section>
  )
}
