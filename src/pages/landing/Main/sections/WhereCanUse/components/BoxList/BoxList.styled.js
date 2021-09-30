import styled from 'styled-components'

import { gapPolyfill } from 'styled'
import { Box, Top, Content, PointList, ImgContainer } from '../Box/Box.styled'
import { media } from 'styles/media'

export const BoxList = styled.ul`
  display: grid;
  grid-template-columns: repeat(12, 70px);
  grid-gap: 30px;

  ${Box} {
    &:nth-child(1),
    &:nth-child(4) {
      grid-column: span 5;
    }

    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 7;
    }

    &:nth-child(1) ${PointList}, &:nth-child(2) ${PointList} {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: space-between;
    }

    &:nth-child(1) {
      ${ImgContainer} {
        img {
          max-height: 264px !important;
        }
      }

      ${Content} {
        width: 390px;
      }
    }

    &:nth-child(2) {
      ${ImgContainer} {
        padding-left: 26px;
      }

      ${Content} {
        width: 548px;
      }

      ${PointList} li:nth-child(7) {
        margin-bottom: 0;
      }
    }

    &:nth-child(3) {
      ${ImgContainer} {
        div:nth-child(1) img {
          max-height: 273px !important;
        }
      }
      ${Content} {
        width: 564px;
      }
    }

    &:nth-child(4) {
      ${ImgContainer} {
        img {
          max-height: 264px !important;
        }
      }
    }
  }

  ${media.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${gapPolyfill(30)}

    ${Box} {
      &:nth-child(1),
      &:nth-child(4) {
        ${Top} {
          width: 410px;
          margin: 0 auto;
        }
      }
    }
  }

  ${media.createMedia(700)} {
    ${Box} {
      &:nth-child(2) {
        ${Top} {
          width: 410px;
          margin: 0 auto;
        }

        ${ImgContainer} {
          padding-left: 0;

          img {
            max-height: 270px !important;
          }
        }
      }

      &:nth-child(3) {
        ${ImgContainer} {
          height: auto;

          div:nth-child(1) img {
            max-height: 460px !important;
          }
          margin: 0 auto;
        }
      }
    }
  }

  ${media.createMedia(650)} {
    ${gapPolyfill(20)}

    ${Box} {
      &:nth-child(1) ${PointList}, &:nth-child(2) ${PointList} {
        display: flex;
        flex-direction: column;
      }

      &:nth-child(2) ${PointList} li:nth-child(7) {
        margin-bottom: 10px;
      }

      &:nth-child(1) ${Content}, &:nth-child(2) ${Content}, &:nth-child(3) ${Content} {
        width: 100%;
      }
    }
  }

  ${media.createMedia(490)} {
    ${Box} {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(4) {
        ${Top} {
          width: 100%;
        }
      }
    }
  }
`
