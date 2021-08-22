import Link from 'next/link'

import * as S from './Logo.styled'

export const Logo = () => (
  <Link href="/" passHref>
    <S.Link>
      <span>Tips</span>
      <S.Circle />
      <span>me</span>
    </S.Link>
  </Link>
)
