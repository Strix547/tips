import styled from 'styled-components'

import { media } from 'styles/media'

import { Img as PageBannerImg } from 'landing/components/PageBanner/PageBanner.styled'

export const Main = styled.main`
  ${PageBannerImg} {
    left: 318px;
  }

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
