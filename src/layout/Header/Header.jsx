import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

import { LinkButton, MenuItem, Drawer } from 'ui'
import { Sidebar } from 'layout'
import { Logo } from 'common'

import { ROUTES } from 'core/routes'

import * as S from './Header.styled'

import FlagRu from '@public/icons/flags/ru.svg'
import FlagUsa from '@public/icons/flags/usa.svg'
import MenuHamburger from '@public/icons/menu-hamburger.svg'
import UserIcon from '@public/icons/user.svg'

export const Header = ({ withSidebar }) => {
  const useFormProps = useForm()
  const screenLess540 = useMediaQuery({ maxWidth: 540 })
  const screenLess1100 = useMediaQuery({ maxWidth: 1100 })
  const screenLess1280 = useMediaQuery({ maxWidth: 1280 })
  const [isMenuOpen, setMenuOpen] = useState(false)
  const isAuth = true
  const userFirstName = 'Александр'
  const userLastName = 'Коновалов'
  const userEmail = 'konovalovd@yandex.ru'

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

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  const getLeftSide = () => {
    const menuButton = (
      <S.MenuButton type="button" onClick={toggleMenuOpen}>
        <MenuHamburger />
      </S.MenuButton>
    )

    const logo = <Logo />

    if (withSidebar) {
      return screenLess1280 ? (
        <S.Left>
          {menuButton}
          {logo}
        </S.Left>
      ) : null
    }

    return screenLess1100 ? (
      <S.Left>
        {menuButton}
        {logo}
      </S.Left>
    ) : (
      <S.Left>{logo}</S.Left>
    )
  }

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

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          {getLeftSide()}

          {!screenLess1100 && (!withSidebar || !screenLess1280) ? (
            <S.Nav>
              <ul>{navList}</ul>
            </S.Nav>
          ) : null}

          <S.Right>
            <FormProvider {...useFormProps}>
              <S.LanguageSelect name="lang" defaultValue="ru">
                {languageList}
              </S.LanguageSelect>
            </FormProvider>

            {isAuth ? (
              <S.User>
                <S.UserAvatar>
                  <UserIcon />
                </S.UserAvatar>

                {!screenLess540 ? (
                  <S.UserInfo>
                    <S.Text>
                      <span>{userLastName}</span> <span>{userFirstName}</span>
                    </S.Text>
                    <S.Text>{userEmail}</S.Text>
                  </S.UserInfo>
                ) : null}
              </S.User>
            ) : (
              <LinkButton href={ROUTES.AUTH} size="inline">
                Вход
              </LinkButton>
            )}
          </S.Right>
        </S.Wrapper>
      </S.Container>

      {withSidebar ? (
        <Drawer anchor="left" open={isMenuOpen} onClose={() => toggleMenuOpen()}>
          <Sidebar />
        </Drawer>
      ) : (
        <Drawer anchor="top" open={isMenuOpen} elevation={70} onClose={() => toggleMenuOpen()}>
          <S.DropdownMenu>
            <ul>{navList}</ul>
          </S.DropdownMenu>
        </Drawer>
      )}
    </S.Header>
  )
}
