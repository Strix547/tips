import styled from 'styled-components'

import { Heading, Text, Wrapper } from 'styled'

export { Heading, Text, Wrapper }

export const PublicOfferPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  padding: 60px 0;

  ${Text} {
    margin-top: 20px;
  }
`
