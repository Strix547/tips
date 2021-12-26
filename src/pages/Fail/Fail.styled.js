import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'

export { Text }

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);

  ${Text} {
    font-size: var(--font-size-500);
    font-weight: 700;
    line-height: 32px;
    text-align: center;
  }
`
