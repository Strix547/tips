import styled, { css } from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

const media1030 = media.createMedia(1030)
const media740 = media.createMedia(740)
const media570 = media.createMedia(570)

export { Text }

export const sectionStyles = css`
  position: relative;
  overflow-x: hidden;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 570px;
  padding: 50px;
  background: #fff;
  box-shadow: 0px 10px 40px rgba(20, 32, 60, 0.05);
  border-radius: 20px;
  box-sizing: border-box;

  ${Button} {
    margin-top: 35px;
  }

  ${media1030} {
    position: relative;
    padding: 50px 40px;
    z-index: 10;
  }

  ${media740} {
    width: 100%;
  }

  ${media570} {
    justify-content: flex-start;
    padding: 30px;

    ${Button} {
      margin-top: 30px;
      padding: 0 20px;
    }
  }
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;

  ${media570} {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`

export const CardLeft = styled.div`
  ${Text} {
    &:nth-child(1) {
      font-size: var(--font-size-500);
      font-weight: 500;
      line-height: 32px;
    }

    &:nth-child(2) {
      margin-top: 20px;
      font-size: var(--font-size-md);
      line-height: 28px;
    }
  }

  ${media570} {
    ${Text}:nth-child(1) {
      margin-top: 20px;
    }
  }

  ${media.mobile} {
    ${Text} {
      &:nth-child(1) {
        font-size: var(--font-size-md);
        line-height: 28px;
      }

      &:nth-child(2) {
        margin-top: 10px;
        font-size: var(--font-size-reg);
        line-height: 22px;
      }
    }

    ${Button} {
      width: 100%;
      margin-top: 30px;
      padding: 0 40px;
    }
  }
`

export const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  margin-left: 30px;
  font-size: 50px;
  font-weight: 700;
  color: var(--color-blue-100);
  border: 1px dashed var(--color-blue-100);
  border-radius: 50%;
  box-sizing: border-box;

  ${media570} {
    margin-left: 0;
  }
`

export const Img = styled.div`
  width: 436px;

  ${media1030} {
    position: absolute;
    width: 436px;
    height: 367px;
    left: 522px;
  }

  ${media740} {
    display: none;
  }
`
