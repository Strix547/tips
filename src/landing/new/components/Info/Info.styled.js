import styled from 'styled-components'

import { Text } from 'styled'
import { media } from 'styles/media'

import { Wrapper } from 'landing/new/styled'
import { Button } from 'landing/new/ui/Button/Button.styled'

export { Text, Wrapper }

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 190px 0;
  background: radial-gradient(100% 100% at 100% 100%, #ccff00 0%, #ffaa00 29.83%, #ff0000 100%);
  color: #fff;

  ${Wrapper} {
    max-width: 1140px;
    padding: 0 92px;
  }

  ${media.createMedia(1024)} {
    padding-top: 40px;
    padding-bottom: 120px;
  }

  ${media.createMedia(560)} {
    padding-top: 70px;
    padding-bottom: 50px;

    ${Wrapper} {
      padding: 0 40px;
    }
  }
`

export const ServiceSector = styled.div`
  position: absolute;
  top: -360px;
  right: 0;

  p {
    position: absolute;
    top: 60px;
    left: 60px;
    max-width: 521px;
    font-size: 40px;
    line-height: 48px;
    z-index: 10;
  }

  ${media.createMedia(2000)} {
    right: auto;
    left: 90px;
  }

  ${media.createMedia(1024)} {
    left: 32px;

    p {
      font-size: 32px;
      line-height: 36px;
    }
  }

  ${media.createMedia(650)} {
    top: -240px;
    right: 0;
    left: auto;

    p {
      top: 24px;
      left: 24px;
      font-size: 24px;
      line-height: 32px;
    }
  }
`

export const Steps = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 550px);
  grid-gap: 40px;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -36px;
    width: 100%;
    height: 1px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
  }

  ${media.createMedia(1100)} {
    grid-template-columns: repeat(2, 1fr);

    &::before {
      bottom: -16px;
    }
  }

  ${media.createMedia(760)} {
    grid-template-columns: 1fr;
    grid-gap: 24px;

    &::before {
      display: none;
    }
  }
`

export const Step = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -40px;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
  }

  & > p {
    margin-top: 32px;
    font-weight: 500;
    font-size: var(--font-size-500);
    line-height: 32px;
  }

  ${media.createMedia(1100)} {
    & > p {
      margin-top: 24px;
      font-size: 18px;
      line-height: 26px;
    }

    &::before {
      bottom: -20px;
    }
  }

  ${media.createMedia(760)} {
    &::before {
      display: none;
    }
  }

  ${media.createMedia(500)} {
    & > p {
      margin-top: 12px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`

export const GetTips = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 283px;

  ${media.createMedia(1100)} {
    margin-top: 120px;
  }

  ${media.createMedia(1000)} {
    flex-direction: column-reverse;
    align-items: center;
  }

  ${media.createMedia(760)} {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 60px;
  }
`

export const GetTipsLeft = styled.div`
  h2 {
    max-width: 560px;
    font-size: 60px;
    font-weight: 500;
    line-height: 72px;
  }

  p {
    margin-top: 12px;
    font-size: var(--font-size-500);
    line-height: 32px;
  }

  ${Button} {
    margin-top: 32px;
  }

  ${media.createMedia(1100)} {
    h2 {
      font-size: 48px;
      line-height: 56px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  ${media.createMedia(1000)} {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    h2,
    p {
      text-align: center;
    }

    h2 {
      margin: 0 auto;
    }

    ${Button} {
      margin: 32px auto 0;
    }
  }

  ${media.createMedia(500)} {
    h2,
    p {
      text-align: left;
    }

    h2 {
      margin: 0;
      font-size: 30px;
      line-height: 36px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }

    ${Button} {
      margin: 32px auto 0;
    }
  }
`

export const TipsList = styled.ul`
  width: 480px;
  margin-left: 24px;
  flex-shrink: 0;

  ${media.createMedia(1100)} {
    width: 400px;
  }

  ${media.createMedia(1024)} {
    margin-left: 0;
  }

  ${media.createMedia(520)} {
    width: 100%;
  }
`

export const TipItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 24px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:nth-child(2) {
    margin: 0 20px 12px;
    opacity: 0.75;
  }

  &:nth-child(3) {
    margin: 0 40px 12px;
    opacity: 0.5;
  }

  &:nth-child(4) {
    margin: 0 60px;
    opacity: 0.25;
  }

  svg {
    flex-shrink: 0;
  }

  ${media.createMedia(1100)} {
    padding: 15px;

    svg {
      width: 25px;
      height: 25px;
    }

    &:nth-child(2) {
      margin: 0 15px 12px;
    }

    &:nth-child(3) {
      margin: 0 25px 12px;
    }

    &:nth-child(4) {
      margin: 0 35px;
    }
  }

  ${media.createMedia(520)} {
    padding: 10px;
    border-radius: 20px;

    svg {
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 6px;
    }

    &:nth-child(2) {
      margin: 0 10px 12px;
    }

    &:nth-child(3) {
      margin: 0 15px 12px;
    }

    &:nth-child(4) {
      margin: 0 30px;
    }
  }
`

export const TipItemBody = styled.div`
  margin-left: 20px;

  p {
    line-height: 17px;
    color: #000;

    &:first-child {
      font-weight: 700;
      color: #ff5c33;
    }

    &:last-child {
      margin-top: 6px;
    }
  }

  ${media.createMedia(1100)} {
    p {
      font-size: 14px;
    }
  }

  ${media.createMedia(520)} {
    width: 100%;
    margin-left: 10px;

    p {
      line-height: 12px;
      font-size: 10px;
    }
  }
`

export const TipAmount = styled.span`
  color: #000;
  margin-right: 5px;
`

export const TipTime = styled.div`
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
  color: #000d26;
  opacity: 0.5;

  ${media.createMedia(520)} {
    font-size: 10px;
  }
`

export const ImgLg = styled.div`
  ${media.createMedia(1440)} {
    display: none;
  }
`

export const ImgMd = styled.div`
  display: none;

  ${media.createMedia(1440)} {
    display: block;
  }

  ${media.createMedia(1024)} {
    display: none;
  }
`

export const ImgSm = styled.div`
  display: none;

  ${media.createMedia(1024)} {
    display: block;
  }

  ${media.createMedia(650)} {
    display: none;
  }
`

export const ImgXs = styled.div`
  display: none;

  ${media.createMedia(650)} {
    display: block;
  }
`
