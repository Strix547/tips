import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { StatisticRow } from './components/StatisticRow/StatisticRow.styled'
import { Table } from 'ui/Table/Table.styled'

export const TipsTable = styled(WhiteBox)`
  margin-top: 20px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 0 30px;
`

export const TableContainer = styled.div`
  position: relative;
  padding-top: 60px;

  ${StatisticRow} {
    &:first-child {
      position: absolute;
      top: 60px;
      width: 100%;
      border-bottom: 1px solid #e0e3e1;
      z-index: 10;
    }

    &:last-child {
      border-top: 2px solid #e0e3e1;
    }
  }

  & ${Table} {
    .MuiDataGrid {
      &-columnsContainer {
        position: absolute;
        top: -56px;
      }

      &-cell {
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(4) {
          font-weight: 500;
        }
      }
    }
  }
`
