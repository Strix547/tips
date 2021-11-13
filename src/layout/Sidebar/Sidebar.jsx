import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Logo } from 'common'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'
import { authStore, userStore, adminStore } from 'store'

import * as S from './Sidebar.styled'

import PieChartIcon from '@public/icons/pie-chart.svg'
import QrScanIcon from '@public/icons/qr-scan.svg'
import BriefCaseIcon from '@public/icons/briefcase.svg'
import CreditCardIcon from '@public/icons/credit-card.svg'
import UserIcon from '@public/icons/user.svg'
import PaperIcon from '@public/icons/paper.svg'
import UserGroupIcon from '@public/icons/user-group.svg'
import StarIcon from '@public/icons/star.svg'
import TagIcon from '@public/icons/tag.svg'
import LogoutIcon from '@public/icons/logout.svg'
import DiscountIcon from '@public/icons/discount.svg'

import UserWithLaptopSvg from '@public/icons/user-with-laptop.svg'

export const Sidebar = observer(() => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()

  const { role } = userStore
  const { isAdminMode } = adminStore

  const isBusinessAccount = role === 'BUSINESS'
  const isAdminAccount = role === 'ADMIN'

  const userNav = [
    { label: t('main-page'), link: ROUTE_NAMES.ACCOUNT, icon: <PieChartIcon /> },
    { label: t('my-qr-codes'), link: ROUTE_NAMES.ACCOUNT_QR_CODES, icon: <QrScanIcon /> },
    { label: t('agents'), link: ROUTE_NAMES.FOR_AGENTS, icon: <BriefCaseIcon /> },
    { label: t('my-bank-info'), link: ROUTE_NAMES.ACCOUNT_REQUISITES, icon: <CreditCardIcon /> },
    { label: t('personal-info'), link: ROUTE_NAMES.ACCOUNT_PERSONAL_DATA, icon: <UserIcon /> },
    {
      label: t('my-working-places'),
      link: ROUTE_NAMES.ACCOUNT_PLATFORMS,
      icon: <PaperIcon />,
      forBusiness: true
    },
    {
      label: t('my-salarees'),
      link: ROUTE_NAMES.ACCOUNT_EMPLOYEES,
      icon: <UserGroupIcon />,
      forBusiness: true
    },
    {
      label: t('my-reviews'),
      link: ROUTE_NAMES.ACCOUNT_REVIEWS,
      icon: <StarIcon fill="#777D82" />,
      forBusiness: true
    },
    { label: t('loyalty-program'), link: ROUTE_NAMES.ACCOUNT_LOYALTY, icon: <TagIcon /> }
  ]

  const adminNav = [
    { label: 'Список пользователей', link: ROUTE_NAMES.ADMIN_USERS, icon: <UserGroupIcon /> },
    {
      label: 'Статистика платежей',
      link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_OUTGOING,
      icon: <PieChartIcon />,
      subNav: [
        { label: 'Исходящие', link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_OUTGOING },
        { label: 'Входящие', link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_INCOMING }
      ]
    },
    { label: 'Комиссии', link: ROUTE_NAMES.ADMIN_COMMISSION, icon: <DiscountIcon /> }
  ]

  const nav = isAdminAccount && !isAdminMode ? adminNav : userNav

  const onSignOut = () => {
    authStore.signOut()
  }

  const onAdminModeOff = () => {
    adminStore.deactiveAdminMode()
  }

  const navList = nav.map(({ label, link, icon, subNav, forBusiness }) => {
    const subNavItems = subNav?.map(({ label, link }) => {
      return (
        <S.SubNavItem key={label} active={pathname === link}>
          <Link href={link}>
            <a>{label}</a>
          </Link>
        </S.SubNavItem>
      )
    })

    const isSomeSubPath = subNav?.map(({ link }) => link).some((link) => link === pathname)

    return (
      <S.NavItem
        key={label}
        active={subNav ? isSomeSubPath : pathname === link}
        bgRed={forBusiness && !isBusinessAccount}
      >
        <Link href={link}>
          <a>
            {icon} {label}
          </a>
        </Link>

        {subNav && <S.SubNav>{subNavItems}</S.SubNav>}
      </S.NavItem>
    )
  })

  return (
    <S.Sidebar>
      <S.Top>
        <Logo />
      </S.Top>

      <S.Main>
        <S.Nav>{navList}</S.Nav>

        {!isAdminAccount ? (
          <S.Support>
            <UserWithLaptopSvg />

            <LinkButton href={ROUTE_NAMES.ACCOUNT_SUPPORT}>Служба поддержки</LinkButton>
          </S.Support>
        ) : null}

        <S.LogoutButton type="button" onClick={() => onSignOut()}>
          <LogoutIcon />
          Выйти
        </S.LogoutButton>

        {isAdminMode ? (
          <S.LogoutAdminButton type="button" onClick={() => onAdminModeOff()}>
            <LogoutIcon />
            Выйти из режима админа
          </S.LogoutAdminButton>
        ) : null}
      </S.Main>
    </S.Sidebar>
  )
})
