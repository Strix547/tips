import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from 'common'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'
import { authStore, userStore } from 'store'

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

import UserWithLaptopSvg from '@public/icons/user-with-laptop.svg'

export const Sidebar = observer(() => {
  const { pathname } = useRouter()

  const isBusinessAccount = userStore.role === 'BUSINESS'

  const nav = [
    { label: 'Главная', link: ROUTE_NAMES.ACCOUNT, icon: <PieChartIcon /> },
    { label: 'Мои QR', link: ROUTE_NAMES.ACCOUNT_QR_CODES, icon: <QrScanIcon /> },
    { label: 'Агентам', link: ROUTE_NAMES.FOR_AGENTS, icon: <BriefCaseIcon /> },
    { label: 'Мои реквизиты', link: ROUTE_NAMES.ACCOUNT_REQUISITES, icon: <CreditCardIcon /> },
    { label: 'Персональные данные', link: ROUTE_NAMES.ACCOUNT_PERSONAL_DATA, icon: <UserIcon /> },
    {
      label: 'Мои площадки',
      link: ROUTE_NAMES.ACCOUNT_PLATFORMS,
      icon: <PaperIcon />,
      forBusiness: true
    },
    {
      label: 'Мои сотрудники',
      link: ROUTE_NAMES.ACCOUNT_EMPLOYEES,
      icon: <UserGroupIcon />,
      forBusiness: true
    },
    {
      label: 'Мои отзывы',
      link: ROUTE_NAMES.ACCOUNT_REVIEWS,
      icon: <StarIcon fill="#777D82" />,
      forBusiness: true
    },
    { label: 'Программа лояльности', link: ROUTE_NAMES.ACCOUNT_LOYALTY, icon: <TagIcon /> }
  ]

  const onSignOut = () => {
    authStore.signOut()
  }

  const navList = nav.map(({ label, link, icon, forBusiness }) => (
    <S.NavItem key={label} active={pathname === link} bgRed={forBusiness && !isBusinessAccount}>
      <Link href={link}>
        <a>
          {icon} {label}
        </a>
      </Link>
    </S.NavItem>
  ))

  return (
    <S.Sidebar>
      <S.Top>
        <Logo />
      </S.Top>

      <S.Main>
        <S.Nav>{navList}</S.Nav>

        <S.Support>
          <UserWithLaptopSvg />

          <LinkButton href={ROUTE_NAMES.ACCOUNT_SUPPORT}>Служба поддержки</LinkButton>
        </S.Support>

        <S.LogoutButton type="button" onClick={() => onSignOut()}>
          <LogoutIcon />
          Выйти
        </S.LogoutButton>
      </S.Main>
    </S.Sidebar>
  )
})
