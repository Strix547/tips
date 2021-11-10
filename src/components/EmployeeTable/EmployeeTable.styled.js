import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { media } from 'styles/media'

import { TableSkeleton } from 'ui/Table/Table.styled'

export { Text }

export const EmployeeTable = styled(WhiteBox)`
  position: relative;

  ${TableSkeleton} {
    margin: 0;
    overflow: hidden;

    span {
      padding: 0;
      border-radius: 0;

      & > *:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }

  ${media.createMedia(750)} {
    padding: 0;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }
`

export const CellTooltip = styled.div`
  width: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
