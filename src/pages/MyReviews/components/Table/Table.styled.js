import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'
import { media } from 'styles/media'
import {
  TipCardList,
  TipCard,
  TipCardTop,
  TipCardMain,
  TipCardRow,
  RatingCell
} from 'components/TipsTable/TipsTable.styled'
import { Table } from 'ui/Table/Table.styled'

export { Text, TipCardList, TipCard, TipCardTop, TipCardMain, TipCardRow, RatingCell, WhiteBox }

export const ReviewsTable = styled.div`
  margin-top: 20px;

  ${Table} {
    ${media.createMedia(750)} {
      display: none;
    }

    .MuiDataGrid {
      &-columnHeader,
      &-cell {
        padding-right: 10px;

        &:first-child {
          padding-left: 20px;
        }

        &:last-child {
          padding-right: 20px;
        }
      }

      &-columnsContainer {
        border-bottom: 1px solid var(--color-gray-700);
      }
    }
  }
`

export const NoReviewsText = styled(Text)`
  text-align: center;
  font-weight: 500;
`
