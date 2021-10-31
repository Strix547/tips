import styled, { css } from 'styled-components'

import { Text, Heading } from 'styled'
import { media } from 'styles/media'

import { Img as PageBannerImg } from 'landing/components/PageBanner/PageBanner.styled'

export { Text }

export const Main = styled.main`
  ${media.laptop} {
    ${PageBannerImg} {
      left: 50%;
    }
  }

  ${media.mobile} {
    ${PageBannerImg} {
      left: -14px;
      transform: none;
    }
  }
`

export const sectionStyles = css`
  margin: 120px 0;
  padding: 0;

  ${Heading}:first-child {
    display: none;
  }

  ${Text} {
    width: 970px;
    margin: 0 auto;
    font-size: var(--font-size-md);
    line-height: 28px;
    text-align: center;
  }

  a {
    width: 260px;
    margin: 15px auto 0;
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
