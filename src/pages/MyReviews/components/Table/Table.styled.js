import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'
import { media } from 'styles/media'

import { TipCardList } from 'components/TipsTable/TipsTable.styled'
import { Table } from 'ui/Table/Table.styled'

export { Text, TipCardList, WhiteBox }

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
