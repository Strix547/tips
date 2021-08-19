import styled from 'styled-components'

import { Box, Content, PointList } from '../Box/Box.styled'

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

    &:nth-child(1) ${Content} {
      width: 390px;
    }

    &:nth-child(2) {
      ${Content} {
        width: 548px;
      }

      ${PointList} li:nth-child(7) {
        margin-bottom: 0;
      }
    }

    &:nth-child(3) ${Content} {
      width: 564px;
    }
  }
`
