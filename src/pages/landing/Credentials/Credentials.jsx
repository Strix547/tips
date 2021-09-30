import { Header, Footer } from 'layout'

import * as S from './Credentials.styled'

export const CredentialsPage = () => {
  return (
    <S.CredentialsPage>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>Реквизиты и информация</S.Heading>
          <S.Text>Text</S.Text>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </S.CredentialsPage>
  )
}
