import Link from 'next/link'

import * as S from './Logo.styled'

import LogoSvg from '@public/icons/logo.svg'

export const Logo = ({ href = '/', logo }) => (
  <Link href={href} passHref prefetch={false}>
    <S.Link>{logo || <LogoSvg />}</S.Link>
  </Link>
)
