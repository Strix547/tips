import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { observer } from 'mobx-react-lite'

import { PayTipsQr } from 'landing/new/components'
import { Button } from 'landing/new/ui'
import { MenuItem, Select } from 'ui'

import { localStore } from 'store'
import { localeImg } from 'utils'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './Header.styled'

import LogoSVG from '@public/img/landing/new/logo.svg'
import AppStore from '@public/img/landing/new/app-store.svg'
import GooglePlay from '@public/img/landing/new/google-play.svg'

import PayScreenRu from '@public/img/landing/new/pay-screen-ru.png'
import PayScreenEn from '@public/img/landing/new/pay-screen-en.png'
import PayScreenFr from '@public/img/landing/new/pay-screen-fr.png'
import FlagRu from '@public/icons/flags/ru.svg'
import FlagUK from '@public/icons/flags/united-kingdom.svg'
import FlagFrance from '@public/icons/flags/france.svg'
import MenuHamburger from '@public/icons/menu-hamburger.svg'

export const Header = observer(() => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const useFormProps = useForm({
    defaultValues: {
      lang: 'EN'
    }
  })
  const { reset } = useFormProps

  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    reset({ lang: router.locale })
  }, [reset])

  const languages = [
    { label: 'RU', value: 'ru', icon: <FlagRu /> },
    { label: 'EN', value: 'en', icon: <FlagUK /> },
    { label: 'FR', value: 'fr', icon: <FlagFrance /> }
  ]

  const nav = [
    { label: t('recipients'), href: '#payment-methods' },
    { label: t('business'), href: '#for-business' }
  ]

  const navMobile = [
    { label: t('recipients'), href: '#payment-methods' },
    { label: t('business'), href: '#for-business' },
    { label: t('support-service'), href: ROUTE_NAMES.SUPPORT },
    { label: t('sign-up'), href: ROUTE_NAMES.AUTH }
  ]

  const changeLanguange = (lang) => {
    localStore.setLang(lang)
  }

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  const navItems = nav.map(({ label, href }) => {
    return (
      <S.NavItem key={label}>
        <Link href={href}>{label}</Link>
      </S.NavItem>
    )
  })

  const navMobileItems = navMobile.map(({ label, href }) => {
    return (
      <S.NavItem
        key={label}
        onClick={() => {
          setMenuOpen(false)
        }}
      >
        <Link href={href}>{label}</Link>
      </S.NavItem>
    )
  })

  const languagesItems = languages.map(({ label, value, icon }) => {
    return (
      <MenuItem key={value} value={value} onClick={() => changeLanguange(value)}>
        <Link href={router.pathname} prefetch={false}>
          <a>
            <S.Text>{label}</S.Text>
            {icon}
          </a>
        </Link>
      </MenuItem>
    )
  })

  const langSelect = (
    <FormProvider {...useFormProps}>
      <S.LanguageSelect>
        <Select name="lang">{languagesItems}</Select>
      </S.LanguageSelect>
    </FormProvider>
  )

  return (
    <S.Header>
      <S.Wrapper>
        <S.Top isMenuOpen={isMenuOpen}>
          <S.Logo>
            <Link href="/">
              <LogoSVG />
            </Link>
          </S.Logo>

          <S.TopRight>
            <S.Nav>
              <ul>{navItems}</ul>
            </S.Nav>

            {langSelect}

            <Link href="/auth?utm_source=site&utm_medium=inner&utm_campaign=login">
              {t('logIn')}
            </Link>

            <S.MenuButton type="button" onClick={toggleMenuOpen}>
              <MenuHamburger fill="#fff" />
            </S.MenuButton>
          </S.TopRight>
        </S.Top>

        <S.Body>
          <S.BodyLeft>
            <S.Text>{t('for-those-who-work-service-sector')}</S.Text>

            <S.Text tag="h1">{t('tips-by-qr-fast-safely')}</S.Text>

            <Button>{t('connect-free')}</Button>

            {/* <S.Stores>
              <a href="/">
                <AppStore />
              </a>

              <a href="/">
                <GooglePlay />
              </a>
            </S.Stores> */}
          </S.BodyLeft>

          <S.BodyRight>
            <S.Image>
              <Image
                layout="responsive"
                src={localeImg(router.locale, PayScreenRu, PayScreenEn, PayScreenFr)}
                alt="Tips pay screen"
              />
            </S.Image>

            <PayTipsQr />
          </S.BodyRight>
        </S.Body>
      </S.Wrapper>

      <S.DropdownTop anchor="top" open={isMenuOpen} elevation={70} onClose={() => toggleMenuOpen()}>
        <S.NavDropdown>
          <ul>{navMobileItems}</ul>
        </S.NavDropdown>

        {langSelect}
      </S.DropdownTop>
    </S.Header>
  )
})
