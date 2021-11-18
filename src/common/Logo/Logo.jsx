import Link from 'next/link'

import * as S from './Logo.styled'

export const Logo = () => (
  <Link href="/" passHref prefetch={false}>
    <S.Link>
      <span>Fly</span>
      <S.Circle />
      <span>Tips</span>
    </S.Link>
  </Link>
)
