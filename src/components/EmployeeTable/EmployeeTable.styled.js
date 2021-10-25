import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { media } from 'styles/media'

import { Table } from 'ui/Table/Table.styled'
import { Switch } from 'ui/Switch/Switch.styled'

export { Text }

export const ActionsCell = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  ${Switch} {
    margin-right: 0;
  }

  button {
    padding: 0;
    border: none;
    background: transparent;
  }

  ${media.createMedia(852)} {
    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`

export const CellTooltip = styled.div`
  width: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const EmployeeCard = styled(WhiteBox)``

export const EmployeeCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-gray-200);

  ${Text} {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
`

export const EmployeeCardActions = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  ${Switch} {
    margin-right: 0;
  }
`

export const EmployeeCardBody = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(4, 20px);
  align-items: center;
  grid-gap: 15px 38px;
  padding: 20px;

  ${Text} {
    font-size: var(--font-size-sm);

    &:nth-child(odd) {
      color: var(--color-gray-300);
      font-weight: 500;
    }

    &:nth-child(even) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const EmployeeCardList = styled.div``

export const EmployeeTable = styled(WhiteBox)`
  position: relative;

  ${Table} {
    ${Switch} {
      margin-right: 0;

      .switch-base {
        transform: translate(-8px, -1px);

        &.Mui-checked {
          transform: translate(8px, -1px);
        }
      }
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

      &-row {
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          background: var(--color-gray-600);
          transition: 0.3s;
        }
      }

      &-windowContainer {
      }

      &-columnsContainer {
        border-bottom: 1px solid var(--color-gray-700);
      }
    }
  }

  ${media.createMedia(720)} {
    padding: 0;
    background: transparent;
    box-shadow: none;
    border-radius: 0;

    ${EmployeeCard}:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`
