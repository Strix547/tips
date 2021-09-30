import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { LinkButton, MenuItem, Drawer } from 'ui'
import { Sidebar } from 'layout'
import { Logo } from 'common'

import { ROUTES } from 'core/routes'
import { authStore, userStore } from 'store'

import * as S from './Header.styled'

import FlagRu from '@public/icons/flags/ru.svg'
import FlagUsa from '@public/icons/flags/usa.svg'
import MenuHamburger from '@public/icons/menu-hamburger.svg'
import UserIcon from '@public/icons/user.svg'

export const Header = observer(({ withSidebar }) => {
  const router = useRouter()
  const useFormProps = useForm()

  const [isMenuOpen, setMenuOpen] = useState(false)
  const { personalData, isPersonalDataLoading } = userStore
  const { firstName, lastName } = personalData
  const currentPathname = router.pathname

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

  const toAccountPage = () => {
    router.push(ROUTES.ACCOUNT)
  }

  const navList = nav.map(({ label, link }) => (
    <S.NavItem key={link} active={currentPathname === link}>
      <Link href={link}>
        <a>{label}</a>
      </Link>
    </S.NavItem>
  ))

  const languageList = languages.map(({ label, value, icon }) => (
    <MenuItem key={value} value={value}>
      {icon}
      <S.Text>{label}</S.Text>
    </MenuItem>
  ))

  const user =
    !isPersonalDataLoading && authStore.isAuth ? (
      <S.User onClick={toAccountPage}>
        <S.UserAvatar>
          <UserIcon />
        </S.UserAvatar>

        <S.UserInfo>
          <S.Text>
            <span>{firstName}</span> <span>{lastName}</span>
          </S.Text>
          <S.Text>Личный кабинет</S.Text>
        </S.UserInfo>
      </S.User>
    ) : (
      <S.UserSkeleton>
        <Skeleton style={{ marginBottom: 5 }} width={170} height={20} />
        <Skeleton width={170} height={20} />
      </S.UserSkeleton>
    )

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Left withSidebar={withSidebar}>
            <S.MenuButton type="button" onClick={toggleMenuOpen}>
              <MenuHamburger />
            </S.MenuButton>
            <Logo />
          </S.Left>

          <S.Nav withSidebar={withSidebar}>
            <ul>{navList}</ul>
          </S.Nav>

          <S.Right>
            <FormProvider {...useFormProps}>
              <S.LanguageSelect name="lang" defaultValue="ru">
                {languageList}
              </S.LanguageSelect>
            </FormProvider>

            {authStore.isAuth ? (
              user
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
          <S.NavDropdown>
            <ul>{navList}</ul>
          </S.NavDropdown>
        </Drawer>
      )}
    </S.Header>
  )
})
