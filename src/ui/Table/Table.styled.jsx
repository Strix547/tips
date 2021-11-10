import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'

import { NoResultFound } from 'common/NoResultFound/NoResultFound.styled'
import { Switch } from 'ui/Switch/Switch.styled'

import { media } from 'styles/media'

import SortIcon from '@public/icons/sort-arrows.svg'
import SortDescendingIcon from '@public/icons/sort-arrows-descending.svg'
import SortAscendingIcon from '@public/icons/sort-arrows-ascending.svg'

const media750 = media.createMedia(750)

export const Table = styled((props) => (
  <DataGrid
    {...props}
    rowHeight={60}
    components={{
      ColumnUnsortedIcon: SortIcon,
      ColumnSortedDescendingIcon: SortDescendingIcon,
      ColumnSortedAscendingIcon: SortAscendingIcon,
      ...props.components
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

      &-overlay {
        background: #fff;
        font-family: 'Formular';
        font-size: var(--font-size-reg);
        font-weight: 500;
        color: var(--color-black-200);
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

export const TableContainer = styled.div`
  ${Table} {
    ${media.createMedia(750)} {
      display: none;
    }

    .MuiDataGrid {
      &-columnHeader,
      &-cell {
        padding-right: 10px;

        &:first-child {
          padding-left: 30px;
        }

        &:last-child {
          padding-right: 30px;
        }
      }

      &-columnsContainer {
        border-bottom: 1px solid var(--color-gray-700);
      }
    }

    ${Switch} {
      .switch-base {
        transform: translate(-8px, -1px);

        &.Mui-checked {
          transform: translate(8px, -1px);
        }
      }
    }
  }

  ${NoResultFound} {
    margin: 30px 0;
  }

  ${media750} {
    ${NoResultFound} {
      display: none;
    }
  }
`

export const TableSkeleton = styled.div`
  /* margin-top: 60px; */
  margin-bottom: 20px;

  span {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    box-sizing: border-box;
    /* padding: 5px 0; */

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${media750} {
    display: none;
  }
`

export const TableRowCardSkeleton = styled.div`
  display: none;
  /* margin-top: 10px; */

  span {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${media750} {
    display: block;
  }
`

export const TipCardList = styled.ul`
  display: none;
  /* margin-top: 10px; */

  ${NoResultFound} {
    display: none;
  }

  ${media750} {
    display: block;

    ${NoResultFound} {
      display: flex;
    }
  }
`
