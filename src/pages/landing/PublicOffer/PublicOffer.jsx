import { Header, Footer } from 'layout'

import * as S from './PublicOffer.styled'

export const PublicOfferPage = () => {
  return (
    <S.PublicOfferPage>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>Публичная оферта‎</S.Heading>
          <S.Text>Text</S.Text>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </S.PublicOfferPage>
  )
}
