import Link from 'next/link'

import { Logo } from 'common'

import { ROUTES } from 'core/routes'

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

export const Sidebar = () => {
  const nav = [
    { label: 'Главная', link: '/', icon: <PieChartIcon /> },
    { label: 'Мои QR', link: ROUTES.ACCOUNT_MY_QR_CODES, icon: <QrScanIcon /> },
    { label: 'Агентам', link: ROUTES.FOR_AGENTS, icon: <BriefCaseIcon /> },
    { label: 'Мои реквизиты', link: ROUTES.ACCOUNT_MY_REQUISITES, icon: <CreditCardIcon /> },
    { label: 'Персональные данные', link: ROUTES.ACCOUNT_PERSONAL_DATA, icon: <UserIcon /> },
    { label: 'Мои площадки', link: ROUTES.ACCOUNT_MY_PLATFORMS, icon: <PaperIcon /> },
    {
      label: 'Мои сотрудники',
      link: ROUTES.ACCOUNT_MY_EMPLOYEES,
      icon: <UserGroupIcon />
    },
    { label: 'Мои отзывы', link: ROUTES.ACCOUNT_MY_REVIEWS, icon: <StarIcon fill="#777D82" /> },
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

          <Link href={ROUTES.SUPPORT} prefetch passHref>
            <S.LinkButton>Служба поддержки</S.LinkButton>
          </Link>
        </S.Support>

        <S.LogoutButton>
          <LogoutIcon />
          Выйти
        </S.LogoutButton>
      </S.Main>
    </S.Sidebar>
  )
}
