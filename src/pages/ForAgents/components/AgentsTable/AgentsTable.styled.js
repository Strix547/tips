import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { StatisticRow } from 'components/StatisticRow/StatisticRow.styled'
import { TimePeriodFilter } from 'components/TimePeriodFilter/TimePeriodFilter.styled'
import { Table } from 'ui/Table/Table.styled'

export const AgentsTable = styled(WhiteBox)``

export const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 30px 0;

  ${TimePeriodFilter} {
    width: auto;
  }
`

export const TableContainer = styled.div`
  position: relative;
  width: calc(100% - 60px);
  margin: 10px 30px 0;

  /* ${Table} {
    .MuiDataGrid {
      &-cell {
        &:nth-child(1),
        &:nth-child(2) {
          font-weight: 500;
        }
      }

      &-columnsContainer {
        border-bottom: 1px solid #e0e3e1;
      }
    }
  }

  ${StatisticRow} {
    position: absolute;
    top: 60px;
    left: -30px;
    width: calc(100% + 60px);
    border-top: 1px solid #e0e3e1;
    border-bottom: 1px solid #e0e3e1;
    z-index: 10;

    &:last-child {
      top: auto;
      bottom: 0;
      border-top: 2px solid #e0e3e1;
    }
  } */
`
