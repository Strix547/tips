import Link from 'next/link'

import * as S from './Logo.styled'

import LogoSvg from '@public/icons/logo.svg'

export const Logo = () => (
  <Link href="/" passHref prefetch={false}>
    <S.Link>
      <LogoSvg />
      {/* <span>Fly</span>
      <S.Circle />
      <span>Tips</span> */}
    </S.Link>
  </Link>
)
