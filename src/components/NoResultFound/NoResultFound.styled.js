import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const NoResultFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;

  ${Text} {
    font-size: var(--font-size-600);
  }
`
