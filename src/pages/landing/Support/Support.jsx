import { Header, Footer } from 'layout'
import { SupportForm } from 'components'

import * as S from './Support.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'
import LineSvg from '@public/img/landing/line.svg'

export const SupportPage = () => {
  return (
    <>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>Служба поддержки</S.Heading>

          <SupportForm />

          <S.Background>
            <GreenDotesSvg />
            <LineSvg />
            <GreenDotesSvg />
          </S.Background>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </>
  )
}
