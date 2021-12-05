import Link from 'next/link'

import * as S from './Logo.styled'

import LogoSvg from '@public/icons/logo.svg'

export const Logo = ({ href = '/' }) => (
  <Link href={href} passHref prefetch={false}>
    <S.Link>
      <LogoSvg />
    </S.Link>
  </Link>
)
