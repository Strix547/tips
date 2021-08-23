import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

import { Button, MenuItem } from 'ui'
import { Logo } from 'common/Logo'

import { ROUTES } from 'core/routes'

import * as S from './Header.styled'

import FlagRu from '@public/icons/flags/ru.svg'
import FlagUsa from '@public/icons/flags/usa.svg'
import MenuHamburger from '@public/icons/menu-hamburger.svg'

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const screenMore1000 = useMediaQuery({ minWidth: 1001 })
  const useFormProps = useForm()

  const nav = [
    { label: 'Получателям', link: ROUTES.RECIPIENTS },
    { label: 'Бизнесу', link: ROUTES.BUSINESS },
    { label: 'Плательщикам', link: ROUTES.PAYERS },
    { label: 'Агентам', link: ROUTES.AGENTS },
    { label: 'Поддержка', link: ROUTES.SUPPORT }
  ]

  const languages = [
    { label: 'RU', value: 'ru', icon: <FlagRu /> },
    { label: 'EN', value: 'en', icon: <FlagUsa /> }
  ]

  const navList = nav.map(({ label, link }) => (
    <li key={link}>
      <Link href={link}>
        <a>{label}</a>
      </Link>
    </li>
  ))

  const languageList = languages.map(({ label, value, icon }) => (
    <MenuItem key={value} value={value}>
      {icon}
      <S.Text>{label}</S.Text>
    </MenuItem>
  ))

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Left>
            {!screenMore1000 && (
              <S.MenuButton type="button" onClick={toggleMenuOpen}>
                <MenuHamburger />
              </S.MenuButton>
            )}

            <Logo />
          </S.Left>

          {screenMore1000 && (
            <S.Nav>
              <ul>{navList}</ul>
            </S.Nav>
          )}

          <S.Right>
            <FormProvider {...useFormProps}>
              <S.LanguageSelect name="lang" defaultValue="ru">
                {languageList}
              </S.LanguageSelect>
            </FormProvider>

            <Button size="inline">Вход</Button>
          </S.Right>
        </S.Wrapper>
      </S.Container>

      {!screenMore1000 && (
        <>
          <S.MenuHamburger open={isMenuOpen}>
            <ul>{navList}</ul>
          </S.MenuHamburger>

          <S.Overlay open={isMenuOpen} onClick={toggleMenuOpen} />
        </>
      )}
    </S.Header>
  )
}
