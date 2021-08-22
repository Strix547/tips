import styled from 'styled-components'

import { Wrapper, Heading, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { media } from 'styles/media'

const media1000 = media.createMedia(1000)

export { Wrapper, Heading, Text }

export const Left = styled.div`
  width: 510px;

  ${Button} {
    margin-top: 30px;
  }

  ${media1000} {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
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
`

export const ImgContainer = styled.div`
  position: relative;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.3);

  img {
    position: relative;
    z-index: 10;
  }

  ${media1000} {
    margin-top: 95px;
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
`

export const RowSection = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
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

  ${media1000} {
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 115px;
    }

    &:nth-child(2) ${LeftTop} ${Heading}, ${LeftTop} &:nth-child(3) ${Heading} {
      width: 100%;
    }
  }
`
