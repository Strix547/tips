import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const UserCountRow = styled.div`
  display: flex;
  margin: 20px 0;

  ${Text} {
    line-height: 22px;

    &:last-child {
      margin-left: 5px;
      font-weight: 500;
    }
  }
`
