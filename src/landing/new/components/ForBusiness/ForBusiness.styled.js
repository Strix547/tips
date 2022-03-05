import styled from 'styled-components'

import { Text } from 'styled'
import { media } from 'styles/media'

import { Wrapper } from 'landing/new/styled'
import { Button } from 'landing/new/ui/Button/Button.styled'

export { Text, Wrapper }

export const ForBusiness = styled.div`
  position: relative;
  padding-top: 240px;
  padding-bottom: 600px;
  background: #000d26;
  color: #fff;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 720px;
    left: 0;
  }

  &::before {
    top: 0;
    background: radial-gradient(
      100% 100% at 100% 0%,
      rgba(255, 170, 0, 0.5) 0%,
      rgba(255, 0, 0, 0) 100%
    );
  }

  &::after {
    bottom: 0;
    background: radial-gradient(
      100% 100% at 100% 0%,
      rgba(255, 170, 0, 0.5) 0%,
      rgba(255, 0, 0, 0) 100%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  ${media.createMedia(1170)} {
    padding-top: 120px;
  }

  ${media.createMedia(1024)} {
    padding-bottom: 356px;
  }

  ${media.createMedia(760)} {
    padding-top: 50px;
  }
`

export const Top = styled.div`
  position: relative;
  max-width: 1140px;
  padding: 0 60px;
  margin: 0 auto;
  z-index: 10;

  h2 {
    max-width: 1140px;
    margin-top: 12px;
    font-size: 60px;
    line-height: 72px;
  }

  ${Button} {
    margin-top: 32px;
  }

  ${media.createMedia(1170)} {
    h2 {
      font-size: 48px;
      line-height: 56px;
    }
  }

  ${media.createMedia(760)} {
    padding: 0 24px;

    h2 {
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
    }
  }
`

export const ForBusinessText = styled.p`
  display: inline-block;
  background: linear-gradient(45deg, #ffaa00, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: var(--font-size-500);
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  ${media.createMedia(1100)} {
    font-size: 18px;
  }

  ${media.createMedia(760)} {
    font-size: 16px;
  }
`

export const CountersList = styled.ul`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
  margin-top: 120px;

  ${media.createMedia(1170)} {
    margin-top: 56px;
  }

  ${media.createMedia(760)} {
    margin-top: 30px;
  }

  ${media.createMedia(720)} {
    grid-gap: 8px;
  }
`

export const CounterItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 24px;
    font-size: 24px;
  }

  ${media.createMedia(1170)} {
    p {
      font-size: 18px;
    }
  }

  ${media.createMedia(830)} {
    p {
      font-size: 14px;
    }
  }

  ${media.createMedia(720)} {
    p {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
`

export const CounterCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  font-weight: 500;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(-135deg, #ff0000, #ffcc00);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  ${media.createMedia(830)} {
    width: 96px;
    height: 96px;
  }
`

export const CounterCount = styled.span`
  font-size: 80px;

  ${media.createMedia(830)} {
    font-size: 50px;
  }
`

export const CounterSymbol = styled.span`
  font-size: 30px;
  margin-bottom: 30px;

  ${media.createMedia(830)} {
    font-size: 16px;
  }
`

export const AdvantagesGrid = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'a a'
    'b c';

  grid-gap: 20px;
  margin-top: 120px;

  h4 {
    font-size: var(--font-size-500);
    font-weight: 500;
    line-height: 28px;
  }

  p {
    line-height: 24px;
    margin-top: 12px;
  }

  ${media.createMedia(1170)} {
    margin-top: 60px;
  }

  ${media.createMedia(960)} {
    display: flex;
    flex-direction: column;
  }

  ${media.createMedia(760)} {
    margin-top: 30px;
  }
`

export const ControlTransparency = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background: radial-gradient(50% 157.5% at 50% 100%, #ffaa00 0%, #ff0000 100%);
  grid-area: a;
  border-radius: 24px;
  overflow: hidden;

  img {
    position: relative;
    bottom: -40px;
  }

  ${media.createMedia(1170)} {
    height: 400px;
    box-sizing: border-box;

    img {
      position: absolute;
      right: -110px;
    }
  }

  ${media.createMedia(960)} {
    grid-area: none;
    flex-direction: column;
    height: auto;
    padding-bottom: 384px;

    img {
      right: 50%;
      bottom: 0;
      transform: translateX(50%);
    }
  }

  ${media.createMedia(700)} {
    padding: 24px;
    padding-bottom: 0;

    img {
      position: static;
      transform: none;
      margin-top: 24px;
    }
  }
`

export const ControlTransparencyLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    margin-top: auto;
  }

  p {
    max-width: 540px;
  }

  ${Button} {
    margin-top: 24px;
  }

  ${media.createMedia(1170)} {
    max-width: 390px;
  }

  ${media.createMedia(960)} {
    h4 {
      margin-top: 20px;
    }
  }
`

export const BasedOnData = styled.div`
  grid-area: b;
  padding: 40px;
  background: radial-gradient(100% 129.17% at 100% 0%, #1f4799 0%, #000d26 100%);
  border-radius: 24px;

  h4 {
    margin-top: 68px;
  }

  ${media.createMedia(960)} {
    grid-area: none;

    h4 {
      margin-top: 24px;
    }
  }

  ${media.createMedia(700)} {
    padding: 24px;
  }

  ${media.createMedia(425)} {
    svg {
      width: 100%;
    }
  }
`

export const IncreaseEngaged = styled.div`
  grid-area: c;
  padding: 40px;
  background: radial-gradient(100% 129.17% at 0% 0%, #ffaa00 0%, #ff0000 100%);
  border-radius: 24px;

  h4 {
    margin-top: 72px;
  }

  ${media.createMedia(960)} {
    grid-area: none;

    h4 {
      margin-top: 24px;
    }
  }

  ${media.createMedia(700)} {
    padding: 24px;
  }
`

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const CommentItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:nth-child(3) {
    opacity: 0.5;
  }

  &:nth-child(4) {
    opacity: 0.15;
  }
`

export const CommentSmile = styled.div`
  height: 48px;
  flex-shrink: 0;
`

export const CommentBody = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-left: 4px;
  padding-left: 16px;
  padding-right: 12px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 24px;

  span {
    font-weight: 500;
    color: #000d26;
    margin-right: 9px;
  }
`

export const BusinessTypes = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 120px;

  h3 {
    font-size: 43px;
    line-height: 56px;
    margin-top: 12px;
  }

  ${Button} {
    margin-top: 32px;
  }

  ${media.createMedia(1170)} {
    margin-top: 60px;

    h3 {
      font-size: 36px;
      line-height: 44px;
    }
  }

  ${media.createMedia(760)} {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    margin-top: 53px;
  }

  ${media.createMedia(600)} {
    h3 {
      font-size: 28px;
      line-height: 32px;
    }

    ${Button} {
      margin-top: 24px;
    }
  }
`

export const TextGradient = styled(Text)`
  display: inline-block;
  margin-top: 32px;
  font-size: var(--font-size-500);
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1em;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;

  ${media.createMedia(1170)} {
    font-size: 18px;
    line-height: 26px;
  }

  ${media.createMedia(600)} {
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
  }
`

export const SmallBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${TextGradient} {
    background: linear-gradient(45deg, #bfff40, #00cc66);
  }
`

export const NetworkEstablishments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${TextGradient} {
    background: linear-gradient(45deg, #ffaa00, #ff0000);
  }
`

export const AcceptDonations = styled.div`
  position: absolute;
  bottom: -360px;
  left: 0;
  border-radius: 0px 24px 24px 0px;
  overflow: hidden;
  z-index: 10;

  ${media.createMedia(2000)} {
    width: calc(100% - 90px);
  }

  ${media.createMedia(1024)} {
    width: calc(100% - 32px);
    bottom: -240px;
  }

  ${media.createMedia(650)} {
    width: 100%;
    bottom: -220px;
  }
`

export const AcceptDonationsBody = styled.div`
  position: absolute;
  left: 330px;
  top: 148px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 540px;

  h3 {
    margin-top: 32px;
    font-size: var(--font-size-100);
    line-height: 56px;
  }

  p {
    margin-top: 32px;
    font-size: var(--font-size-500);
    line-height: 29.35px;
  }

  svg {
    width: 64px;
    height: 64px;
  }

  ${Button} {
    margin-top: 32px;
  }

  ${media.createMedia(1440)} {
    left: 90px;
  }

  ${media.createMedia(1024)} {
    top: 50px;
    left: 32px;

    h3 {
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-size: 20px;
      line-height: 24px;
    }
  }

  ${media.createMedia(650)} {
    top: 103px;
    left: 16px;

    h3 {
      font-size: 28px;
      line-height: 32px;
    }

    p {
      margin-top: 16px;
      font-size: 16px;
      line-height: 20px;
    }

    h3,
    p,
    ${Button} {
      max-width: 296px;
    }
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
