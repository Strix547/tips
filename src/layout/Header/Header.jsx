import Link from 'next/link'

import { Button } from 'ui'
import { Logo } from 'common/Logo'

import { ROUTES } from 'core/routes'

import * as S from './Header.styled'

export const Header = () => {
  const nav = [
    { label: 'Получателям', link: ROUTES.RECIPIENTS },
    { label: 'Бизнесу', link: ROUTES.BUSINESS },
    { label: 'Плательщикам', link: ROUTES.PAYERS },
    { label: 'Агентам', link: ROUTES.AGENTS },
    { label: 'Поддержка', link: ROUTES.SUPPORT }
  ]

  const navList = nav.map(({ label, link }) => (
    <li key={link}>
      <Link href={link}>{label}</Link>
    </li>
  ))

  return (
    <S.Header>
      <S.Wrapper>
        <Logo />

        <S.Nav>
          <ul>{navList}</ul>
        </S.Nav>

        <S.Right>
          <Button size="inline">Вход</Button>
        </S.Right>
      </S.Wrapper>
    </S.Header>
  )
}
