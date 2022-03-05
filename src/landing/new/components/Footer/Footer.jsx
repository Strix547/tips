import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './Footer.styled'

import LogoSVG from '@public/img/landing/new/logo-black.svg'
import InstagramIcon from '@public/img/landing/new/social/instagram.svg'
import FacebookIcon from '@public/img/landing/new/social/facebook.svg'
import YoutubeIcon from '@public/img/landing/new/social/youtube.svg'
import TelegramIcon from '@public/img/landing/new/social/telegram.svg'

export const Footer = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const nav = [
    { label: t('about'), link: ROUTE_NAMES.ABOUT_US },
    { label: t('faq'), link: ROUTE_NAMES.FAQ },
    { label: t('support-service'), link: ROUTE_NAMES.SUPPORT },
    { label: t('blog'), link: 'https://flytipscom.medium.com', target: '_blank' },
    { label: t('logIn'), link: ROUTE_NAMES.AUTH },
    { label: t('sign-up'), link: ROUTE_NAMES.AUTH }
  ]

  const social = [
    { label: 'instagram', icon: <InstagramIcon />, link: 'https://www.instagram.com/flytips_com/' },
    { label: 'facebook', icon: <FacebookIcon />, link: '/' },
    { label: 'youtube', icon: <YoutubeIcon />, link: '/' },
    { label: 'telegram', icon: <TelegramIcon />, link: 'https://t.me/FlyTipsBot' }
  ]

  const navItems = nav.map(({ label, link, target }) => {
    return (
      <S.NavItem key={label}>
        {target ? (
          <a href={link} target="_blank">
            {label}
          </a>
        ) : (
          <Link href={link}>{label}</Link>
        )}
      </S.NavItem>
    )
  })

  const socialItems = social.map(({ label, icon, link }) => {
    return (
      <li key={label}>
        <a href={link} target="_blank">
          {icon}
        </a>
      </li>
    )
  })

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Top>
          <S.TopLeft>
            <LogoSVG />

            <S.Text>
              {locale === 'fr'
                ? '178 rue du Faubourg Saint Honoré 75008 Paris'
                : '7/F MW Tower 111 Bonham Srand Sheung Wan, Hong Kong'}
            </S.Text>

            <Link href="mailto:support@flytips.com">support@flytips.com</Link>
          </S.TopLeft>

          <S.Nav>{navItems}</S.Nav>
        </S.Top>

        <S.Bottom>
          <S.BottomLeft>
            <S.Text>© 2022 FlyTips.com</S.Text>

            <Link href={ROUTE_NAMES.TERMS_OF_USE} passHref>
              <a target="_blank">{t('terms-of-use')}</a>
            </Link>

            <Link href={ROUTE_NAMES.PRIVACY_POLICY} passHref>
              <a target="_blank">{t('privacy-policy')}</a>
            </Link>
          </S.BottomLeft>

          <S.SocialLinksList>{socialItems}</S.SocialLinksList>
        </S.Bottom>
      </S.Wrapper>
    </S.Footer>
  )
}
