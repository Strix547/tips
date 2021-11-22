import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { TableSkeleton } from 'ui/Table/Table.styled'
import { media } from 'styles/media'

export const ReviewsTable = styled(WhiteBox)`
  margin-top: 20px;

  ${TableSkeleton} {
    margin-top: 20px;
  }

  ${media.createMedia(750)} {
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }
`
