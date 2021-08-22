import styled from 'styled-components'

import { Heading, Text, Wrapper } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { media } from 'styles/media'

const media630 = media.createMedia(630)

export { Heading, Text, Wrapper }

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

  ${media630} {
    height: auto;
    padding-bottom: 518px;
  }
`

export const Left = styled.div`
  position: relative;
  width: 590px;
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

export const FeatureList = styled.ul``

export const ActionRow = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 30px;

  ${Button}:first-child {
    box-shadow: 0px 15px 30px rgba(84, 167, 92, 0.15);
  }

  ${media630} {
    flex-direction: column;
    margin-top: 20px;

    ${Button} {
      width: 260px;

      &:last-child:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
`

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 100vw;
  height: 100%;
`

export const Img = styled.div`
  position: absolute;
  left: 482px;
  z-index: 10;

  ${media.laptop} {
    left: 50%;
    transform: translateX(-50%);
    bottom: -69px;
  }

  ${media.tablet} {
    left: -80px;
    transform: none;
  }

  ${media630} {
    left: 50%;
    bottom: -495px;
    transform: translateX(-50%);
  }

  ${media.mobile} {
    left: -15px;
    transform: none;
  }
`
