import { Header, Footer } from 'layout'

import * as S from './AboutUs.styled'

export const AboutUsPage = () => {
  return (
    <S.AboutUsPage>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>О «FlyTips.com»‎</S.Heading>
          <S.Text>Text</S.Text>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </S.AboutUsPage>
  )
}
