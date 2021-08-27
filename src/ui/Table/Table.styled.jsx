import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'

import SortIcon from '@public/icons/sort-arrows.svg'
import SortDescendingIcon from '@public/icons/sort-arrows-descending.svg'
import SortAscendingIcon from '@public/icons/sort-arrows-ascending.svg'

export const Table = styled((props) => (
  <DataGrid
    {...props}
    rowHeight={60}
    components={{
      ColumnUnsortedIcon: SortIcon,
      ColumnSortedDescendingIcon: SortDescendingIcon,
      ColumnSortedAscendingIcon: SortAscendingIcon
    }}
    autoHeight
    hideFooter
    disableColumnMenu
    disableSelectionOnClick
  />
))`
  && {
    border: none;
    font-family: 'Formular';
    font-size: var(--font-size-sm);
    color: var(--color-black-100);

    .MuiDataGrid {
      &-window {
        overflow: hidden;
      }

      &-dataContainer {
        margin: 0 30px;
      }

      &-columnsContainer,
      &-cell {
        border-bottom: 1px solid #e0e3e1;
      }

      &-columnHeader,
      &-cell {
        padding: 0;

        &:focus,
        &:focus-within {
          outline: none;
        }
      }

      &-columnHeader {
        &:not(.MuiDataGrid-columnHeader--sorted) {
          &:hover .MuiDataGrid-sortIcon {
            opacity: 1;
          }

          .MuiDataGrid-sortIcon {
            opacity: 1;
          }
        }

        .MuiIconButton-root {
          &:hover {
            background: transparent;
          }
        }
      }

      &-columnsContainer {
        padding: 0 0 0 30px;
      }

      &-cell {
        &:last-child {
          position: relative;

          &::after {
          }
        }
      }

      &-row {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 60px;
          top: 0;
          right: 30px;
          background: #fff;
          z-index: 100;
        }

        &:hover {
          background-color: #fff;
        }

        &:last-child .MuiDataGrid-cell {
          border-bottom: none;
        }
      }

      &-columnSeparator {
        display: none;
      }

      &-columnHeaderTitle {
        color: var(--color-gray-300);
      }

      &-columnHeaderTitleContainer {
        padding: 0;
      }
    }
  }
`
