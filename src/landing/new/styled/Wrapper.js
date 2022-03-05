import styled from 'styled-components'

import { media } from 'styles/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  max-width: 1324px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;

  ${media.createMedia(560)} {
    padding: 0 16px;
  }
`
