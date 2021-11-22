import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { LinkButton, MenuItem, Drawer, Select } from 'ui'
import { Sidebar } from 'layout'
import { Logo } from 'common'

import { ROUTE_NAMES } from 'core/routes'
import { authStore, userStore, localStore } from 'store'

import * as S from './Header.styled'

import FlagRu from '@public/icons/flags/ru.svg'
import FlagUK from '@public/icons/flags/united-kingdom.svg'
import FlagFrance from '@public/icons/flags/france.svg'
import MenuHamburger from '@public/icons/menu-hamburger.svg'
import UserIcon from '@public/icons/user.svg'

export const Header = observer(({ withSidebar }) => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      lang: 'EN'
    }
  })
  const { reset } = useFormProps
  const { t } = useTranslation('common')

  const [isMenuOpen, setMenuOpen] = useState(false)
  const { personalData, isPersonalDataLoading, role } = userStore
  const { lang } = localStore
  const { firstName, lastName, avatar } = personalData
  const currentPathname = router.pathname

  useEffect(() => {
    if (lang) {
      reset({ lang })
    }
  }, [lang, reset])

  const nav = [
    { label: t('recipients'), link: ROUTE_NAMES.RECIPIENTS },
    { label: t('business'), link: ROUTE_NAMES.BUSINESS },
    { label: t('payers'), link: ROUTE_NAMES.PAYERS },
    { label: t('agents'), link: ROUTE_NAMES.AGENTS },
    { label: t('support'), link: ROUTE_NAMES.SUPPORT }
  ]

  const languages = [
    { label: 'RU', value: 'RU', icon: <FlagRu /> },
    { label: 'EN', value: 'EN', icon: <FlagUK /> },
    { label: 'FR', value: 'FR', icon: <FlagFrance /> }
  ]

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  const toAccountPage = () => {
    router.push(role === 'ADMIN' ? ROUTE_NAMES.ADMIN_USERS : ROUTE_NAMES.ACCOUNT)
  }

  const changeLanguange = (lang) => {
    localStore.setLang(lang)
  }

  const navList = nav.map(({ label, link }) => {
    return (
      <S.NavItem key={link} active={currentPathname === link}>
        <Link href={link} prefetch={false}>
          <a>{label}</a>
        </Link>
      </S.NavItem>
    )
  })

  const languageList = languages.map(({ label, value, icon }) => {
    return (
      <MenuItem key={value} value={value} onClick={() => changeLanguange(value)}>
        <Link href={router.pathname} prefetch={false}>
          <a>
            {icon}
            <S.Text>{label}</S.Text>
          </a>
        </Link>
      </MenuItem>
    )
  })

  const langSelect = (
    <FormProvider {...useFormProps}>
      <S.LanguageSelect>
        <Select name="lang">{languageList}</Select>
      </S.LanguageSelect>
    </FormProvider>
  )

  const user =
    !isPersonalDataLoading && authStore.isAuth ? (
      <S.User onClick={toAccountPage}>
        <S.UserAvatar noBorder={avatar}>
          {avatar ? (
            <S.UserAvatarImg>
              <Image src={avatar} width={44} height={44} alt="avatar" />
            </S.UserAvatarImg>
          ) : (
            <UserIcon />
          )}
        </S.UserAvatar>

        <S.UserInfo>
          <S.Text>
            <span>{firstName}</span> <span>{lastName}</span>
          </S.Text>
          <S.Text>{t('my-profile')}</S.Text>
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
            {langSelect}

            {authStore.isAuth ? (
              user
            ) : (
              <LinkButton href={ROUTE_NAMES.AUTH} size="inline">
                {t('logIn')}
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
        <S.DropdownTop
          anchor="top"
          open={isMenuOpen}
          elevation={70}
          onClose={() => toggleMenuOpen()}
        >
          <S.NavDropdown>
            <ul>{navList}</ul>
          </S.NavDropdown>

          <S.DropdownDivider />

          {langSelect}
        </S.DropdownTop>
      )}
    </S.Header>
  )
})
