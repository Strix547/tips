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

      &-cell {
        border-bottom: 1px solid #e0e3e1;
      }

      &-columnHeader,
      &-cell {
        padding-left: 0;
        padding-right: 20px;

        &:last-child {
          padding-right: 0;
        }

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
        border-bottom: none;
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
