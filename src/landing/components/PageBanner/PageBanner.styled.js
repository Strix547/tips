import styled from 'styled-components'

import { Heading, Text, Wrapper, gapPolyfill } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { media } from 'styles/media'

const media630 = media.createMedia(630)

export { Heading, Wrapper }

export const PageBanner = styled.section`
  height: 650px;
  background: linear-gradient(96.58deg, #f7f8fb 36.86%, #f7f7fb 83.4%, #f9effb 129.94%);
  overflow: hidden;

  ${Wrapper} {
    position: relative;
    justify-content: center;
    height: 100%;
  }

  ${media.laptop} {
    height: 1096px;
    padding-top: 80px;
    box-sizing: border-box;

    ${Wrapper} {
      justify-content: flex-start;
    }
  }

  ${media.tablet} {
    height: auto;
    padding-bottom: 30px;
  }
`

export const Left = styled.div`
  position: relative;
  width: 575px;
  z-index: 10;

  ${media.laptop} {
    margin: 0 auto;
  }

  ${media.tablet} {
    margin: 0;
  }

  ${media630} {
    width: 100%;

    ${Heading} {
      font-size: var(--font-size-300);
      line-height: 42px;
    }
  }
`

export const Subtitle = styled(Text)`
  max-width: 560px;
  margin-top: 30px;
  font-size: var(--font-size-600);
  font-weight: 500;
  line-height: 28px;

  ${media.mobile} {
    margin-top: 20px;
    font-size: var(--font-size-md);
  }
`

export const FeatureList = styled.ul`
  margin-top: 20px;

  li {
    position: relative;
    padding-left: 32px;
    font-size: var(--font-size-md);
    font-weight: 500;
    line-height: 28px;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    svg {
      position: absolute;
      top: 8px;
      left: 0;
      width: 20px;
      height: 14px;
    }
  }
`

export const ActionRow = styled.div`
  display: flex;
  ${gapPolyfill(20)}
  margin-top: calc(20px - 10px);

  ${Button}:first-child {
    box-shadow: 0px 15px 30px rgba(84, 167, 92, 0.15);
  }

  ${media630} {
    flex-direction: column;

    ${Button} {
      width: 260px;
    }
  }
`

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 100vw;
  height: 100%;

  ${media.tablet} {
    position: static;
    margin-top: 30px;
  }
`

export const Img = styled.div`
  position: absolute;
  width: 1015px;
  left: 482px;
  z-index: 10;

  ${media.laptop} {
    left: 50%;
    transform: translateX(-50%);
    bottom: -69px;
  }

  ${media.tablet} {
    display: none;
  }
`

export const ImgMobile = styled.div`
  display: none;
  justify-content: center;
  width: 355px;

  ${media.tablet} {
    display: flex;
  }

  ${media.mobile} {
    justify-content: flex-start;
  }
`
