import styled from 'styled-components'

import { Wrapper, Heading, Text } from 'styled'

import { media } from 'styles/media'

export { Wrapper, Heading, Text }

export const Main = styled.main`
  padding: 80px 0;
  overflow-x: hidden;

  ${Wrapper} {
    position: relative;
  }

  ${Heading} {
    text-align: center;
    margin-bottom: 40px;
  }

  ${media.tablet} {
    ${Heading} {
      font-size: var(--font-size-200);
      line-height: 52px;
    }
  }

  ${media.mobile} {
    padding: 40px 0;

    ${Heading} {
      font-size: var(--font-size-500);
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  svg {
    position: absolute;

    /* green dotes left */
    &:nth-child(1) {
      top: 20px;
      left: -173px;
    }

    /* green dotes right */
    &:nth-child(2) {
      right: -180px;
      bottom: 144px;
    }
  }

  ${media.createMedia(1350)} {
    svg {
      &:nth-child(1) {
        left: -112px;
      }

      &:nth-child(2) {
        right: -112px;
      }
    }
  }

  ${media.createMedia(750)} {
    display: none;
  }
`
