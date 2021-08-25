import Link from 'next/link'

import { Logo } from 'common'
import { Button } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './Sidebar.styled'

import PieChartIcon from '@public/icons/sidebar/pie-chart.svg'
import QrScanIcon from '@public/icons/sidebar/qr-scan.svg'
import BriefCaseIcon from '@public/icons/sidebar/briefcase.svg'
import CreditCardIcon from '@public/icons/sidebar/credit-card.svg'
import UserIcon from '@public/icons/sidebar/user.svg'
import PaperIcon from '@public/icons/sidebar/paper.svg'
import UserGroupIcon from '@public/icons/sidebar/user-group.svg'
import StarIcon from '@public/icons/sidebar/star.svg'
import TagIcon from '@public/icons/sidebar/tag.svg'
import LogoutIcon from '@public/icons/sidebar/logout.svg'

import UserWithLaptopSvg from '@public/icons/sidebar/user-with-laptop.svg'

export const Sidebar = () => {
  const nav = [
    { label: 'Главная', link: '/', icon: <PieChartIcon /> },
    { label: 'Мои QR', link: ROUTES.MY_QR_CODES, icon: <QrScanIcon /> },
    { label: 'Агентам', link: ROUTES.FOR_AGENTS, icon: <BriefCaseIcon /> },
    { label: 'Мои реквизиты', link: ROUTES.MY_REQUISITES, icon: <CreditCardIcon /> },
    { label: 'Персональные данные', link: ROUTES.PERSONAL_DATA, icon: <UserIcon /> },
    { label: 'Мои площадки', link: ROUTES.MY_PLATFORMS, icon: <PaperIcon /> },
    {
      label: 'Мои сотрудники',
      link: ROUTES.MY_EMPLOYEES,
      icon: <UserGroupIcon />
    },
    { label: 'Мои отзывы', link: ROUTES.MY_REVIEWS, icon: <StarIcon /> },
    { label: 'Программа лояльности', link: ROUTES.LOYALTY, icon: <TagIcon /> }
  ]

  const navList = nav.map(({ label, link, icon }) => (
    <S.NavItem key={label}>
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
          <Button>Служба поддержки</Button>
        </S.Support>

        <S.LogoutButton>
          <LogoutIcon />
          Выйти
        </S.LogoutButton>
      </S.Main>
    </S.Sidebar>
  )
}
