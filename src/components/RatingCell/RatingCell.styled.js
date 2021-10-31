import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const RatingCell = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  ${Text} {
    font-weight: 500;
  }
`
