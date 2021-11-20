import styled from 'styled-components'

import { Wrapper, Heading, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

const media1110 = media.createMedia(1110)
const media560 = media.createMedia(560)

export { Wrapper, Heading, Text }

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 510px;

  ${Button} {
    width: auto;
    margin-top: 30px;
  }

  ${media1110} {
    width: 100%;
  }
`

export const LeftTop = styled.div`
  ${Heading} {
    display: inline-block;

    span {
      padding-right: 20px;
    }
  }

  a {
    display: inline-block;
    vertical-align: middle;
    font-size: var(--font-size-reg);
    font-weight: 500;
    color: var(--color-primary-200);

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-top: 2px;
      margin-left: 14px;
    }
  }

  ${media.createMedia(600)} {
    ${Heading} {
      span {
        padding-right: 0;
      }
    }

    a {
      display: block;
      margin-top: 5px;
    }
  }
`

export const Subtitle = styled.p`
  margin-top: 20px;
  font-size: var(--font-size-600);
  font-weight: 500;
  line-height: 28px;

  ${media560} {
    font-size: var(--font-size-md);
  }
`

export const FeatureList = styled.ul`
  margin-top: 20px;

  li {
    position: relative;
    padding-left: 15px;
    font-size: var(--font-size-md);
    color: var(--color-black-200);
    line-height: 28px;

    &::before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      width: 5px;
      height: 5px;
      background: var(--color-black-200);
      border-radius: 50%;
    }
  }

  ${media560} {
    li {
      font-size: var(--font-size-reg);
      line-height: 22px;

      &::before {
        top: 9px;
      }
    }
  }
`

export const ImgContainer = styled.div`
  position: relative;
  width: 524px;
  /* box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.3); */

  img {
    position: relative;
    z-index: 10;
  }

  ${media1110} {
    margin-top: 75px;
  }

  ${media.createMedia(554)} {
    width: 100%;
  }

  ${media.createMedia(500)} {
    margin-top: 65px;
  }
`

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: linear-gradient(158.25deg, #d9f4e2 10.73%, #f7fffa 91.83%);
  transform: translate(-50%, -50%);

  ${media.createMedia(480)} {
    width: 300px;
    height: 300px;
  }
`

export const RowSection = styled.div`
  display: flex;
  flex-direction: ${({ $reversed }) => ($reversed ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 190px;
  }

  ${media1110} {
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;

    &:not(:last-child) {
      margin-bottom: 95px;
    }
  }

  ${media560} {
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 65px;
    }

    ${LeftTop} {
      ${Heading} {
        font-size: var(--font-size-500);
        line-height: 32px;
      }
    }
  }
`
