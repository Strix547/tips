import styled from 'styled-components'

import { media } from 'styles/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${media.laptop} {
    box-sizing: border-box;
  }

  ${media.tablet} {
    padding: 0 15px;
  }
`
