import styled from 'styled-components'

import { WhiteBox, Heading } from 'styled'

import { media } from 'styles/media'

export { Heading }

export const BarChart = styled(WhiteBox)`
  position: relative;
  width: 100%;
  height: 350px;
  padding: 30px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 30px 20px 20px;
  }

  ${media.mobile} {
    ${Heading} {
      font-size: var(--font-size-md);
    }
  }
`

export const BarContainer = styled.div`
  height: 250px;
  margin-top: 30px;
`

export const Month = styled.p`
  position: absolute;
  left: 30px;
  bottom: 30px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black-200);

  ${media.tablet} {
    left: 20px;
  }

  ${media.createMedia(470)} {
  }
`
