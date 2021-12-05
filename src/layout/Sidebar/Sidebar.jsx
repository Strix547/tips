import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Logo } from 'common'
import { LinkButton, Switch } from 'ui'

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
  const { pathname, locale } = useRouter()

  const { role } = userStore
  const isBusinessAccount = role === 'BUSINESS'
  const isAdminAccount = role === 'ADMIN'

  const useFormProps = useForm({
    defaultValues: {
      adminView: isAdminAccount
    }
  })
  const { watch } = useFormProps

  const { isAdminMode } = adminStore
  const adminView = watch('adminView')

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
    { label: t('users-list'), link: ROUTE_NAMES.ADMIN_USERS, icon: <UserGroupIcon /> },
    {
      label: t('payment-statistics'),
      link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_OUTGOING,
      icon: <PieChartIcon />,
      subNav: [
        { label: t('outgoing'), link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_OUTGOING },
        { label: t('incoming'), link: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS_INCOMING }
      ]
    },
    { label: t('commissions'), link: ROUTE_NAMES.ADMIN_COMMISSION, icon: <DiscountIcon /> }
  ]

  const nav = isAdminAccount && !isAdminMode && adminView ? adminNav : userNav

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
          <Link href={link} prefetch={false} locale={locale}>
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
        <Link href={link} prefetch={false} locale={locale}>
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
        <Logo href={ROUTE_NAMES.ACCOUNT} />

        {isAdminAccount && (
          <S.AdminViewPanel>
            <S.Text>{t('admin')}</S.Text>

            <FormProvider {...useFormProps}>
              <Switch name="adminView" />
            </FormProvider>
          </S.AdminViewPanel>
        )}
      </S.Top>

      <S.Main>
        <S.Nav>{navList}</S.Nav>

        {!isAdminAccount ? (
          <S.Support>
            <UserWithLaptopSvg />

            <LinkButton href={ROUTE_NAMES.ACCOUNT_SUPPORT}>{t('support')}</LinkButton>
          </S.Support>
        ) : null}

        <S.LogoutButton type="button" onClick={() => onSignOut()}>
          <LogoutIcon />
          {t('exit')}
        </S.LogoutButton>

        {isAdminMode ? (
          <S.LogoutAdminButton type="button" onClick={() => onAdminModeOff()}>
            <LogoutIcon />
            {t('exit-admin-mode')}
          </S.LogoutAdminButton>
        ) : null}
      </S.Main>
    </S.Sidebar>
  )
})
