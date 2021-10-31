import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'

export { Text }

export const TableRowCard = styled(WhiteBox)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TipCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-gray-200);
  box-sizing: border-box;

  ${Text} {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
`

export const TipCardMain = styled.div`
  padding: 20px;
`

export const TipCardRow = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ${Text} {
    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 20px;

    /* label */
    &:first-child {
      width: 115px;
      color: var(--color-gray-300);
    }
  }
`
