import styled from 'styled-components'

import { Heading } from 'styled'
import { media } from 'styles/media'

const media650 = media.createMedia(650)

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > img {
    box-shadow: 0px 3.88px 15.52px rgba(49, 52, 61, 0.05);
  }
`

export const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background: #fff;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.2);
  border-radius: 15px;
`

export const ImgContainer = styled.div`
  height: 273px;
  border-radius: 20px;
  box-shadow: 0px 5px 30px rgba(157, 157, 159, 0.2);

  &:nth-child(2) {
    height: 223px;
  }
`

export const Content = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
`

export const Title = styled(Heading).attrs({ level: 4 })`
  ${media650} {
    font-size: var(--font-size-500);
    line-height: 32px;
  }
`

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;

  ${media650} {
    font-size: var(--font-size-reg);
    line-height: 22px;
  }
`

export const PointList = styled.ul`
  margin-top: 20px;

  li {
    position: relative;
    padding-left: 25px;
    line-height: 22px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    svg {
      position: absolute;
      top: 6px;
      left: 0;
    }
  }

  ${media650} {
    margin-top: 15px;
  }
`

export const Box = styled.li`
  padding: 30px;
  background: var(--color-gray-100);
  border: 2px solid var(--color-gray-200);
  box-sizing: border-box;
  border-radius: 20px;

  &:not(:last-child) {
    ${Content} {
      padding-left: 12px;
    }
  }

  ${media.laptop} {
    width: 670px;
    box-sizing: border-box;
  }

  ${media.createMedia(700)} {
    width: 100%;
  }

  ${media650} {
    padding: 20px;

    &:not(:last-child) {
      ${Content} {
        padding-left: 0;
      }
    }
  }
`
