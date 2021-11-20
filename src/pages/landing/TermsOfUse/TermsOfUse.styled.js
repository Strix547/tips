import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const Main = styled.main`
  padding: 30px;
  margin: 0 15px;

  ${Text}:not(:last-child) {
    margin-bottom: 20px;
  }
`
