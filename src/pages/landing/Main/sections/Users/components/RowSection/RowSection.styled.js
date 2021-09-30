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
  display: inline-flex;
  align-items: center;

  a {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 7px;
    margin-left: 20px;
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

  &:nth-of-type(2),
  &:nth-of-type(3) {
    ${LeftTop} {
      position: relative;

      a {
        position: absolute;
        margin-top: 0;
        margin-left: 0;
      }
    }
  }

  &:nth-of-type(2) {
    ${LeftTop} {
      ${Heading} {
        width: 371px;
      }

      a {
        top: 60px;
        left: 123px;
      }
    }
  }

  &:nth-of-type(3) {
    ${LeftTop} {
      ${Heading} {
        width: 417px;
      }

      a {
        top: 58px;
        left: 249px;
      }
    }
  }

  ${media1110} {
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;

    &:not(:last-child) {
      margin-bottom: 95px;
    }

    &:nth-of-type(2) {
      ${LeftTop} {
        ${Heading} {
          width: 100%;
        }

        a {
          position: relative;
          top: auto;
          left: auto;
          margin-top: 7px;
          margin-left: 20px;
        }
      }
    }

    &:nth-of-type(3) {
      ${LeftTop} {
        flex-direction: column;
        align-items: flex-start;

        ${Heading} {
          width: 100%;
        }

        a {
          position: relative;
          margin-top: 10px;
          top: auto;
          left: auto;
          bottom: auto;
          line-height: 22px;
        }
      }
    }
  }

  ${media.createMedia(730)} {
    &:nth-of-type(2) {
      ${LeftTop} {
        flex-direction: column;
        align-items: flex-start;

        ${Heading} {
          width: 100%;
        }

        a {
          position: relative;
          top: auto;
          left: auto;
          margin-top: 10px;
          margin-left: 0;
          line-height: 22px;
        }
      }
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

      a {
        margin-top: 3px;
      }
    }
  }
`
