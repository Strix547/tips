import { css } from 'styled-components'

import { Heading, Text } from 'styled'

import { media } from 'styles/media'

export { Text }

export const sectionStyles = css`
  margin: 120px 0;
  padding: 0;

  ${Heading}:first-of-type {
    margin-bottom: 30px;
  }

  ${Text} {
    width: 970px;
    margin: 0 auto;
    font-size: var(--font-size-md);
    line-height: 28px;
    text-align: center;
  }

  ${media.createMedia(1010)} {
    ${Text} {
      width: 100%;
    }
  }

  ${media.tablet} {
    margin: 80px 0;
    padding: 0;
  }

  ${media.createMedia(560)} {
    margin: 60px 0;
    padding: 0;

    ${Text} {
      text-align: justify;
    }
  }
`
