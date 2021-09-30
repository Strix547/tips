import { Header, Footer } from 'layout'

import * as S from './PrivacyPolicy.styled'

export const PrivacyPolicyPage = () => {
  return (
    <S.PrivacyPolicyPage>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>Положение о конфиденциальности‎</S.Heading>
          <S.Text>Text</S.Text>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </S.PrivacyPolicyPage>
  )
}
