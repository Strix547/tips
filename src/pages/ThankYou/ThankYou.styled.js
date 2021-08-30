import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'

export { Text }

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${Text} {
    width: 310px;
    text-align: center;
    font-size: var(--font-size-500);
    font-weight: 700;
    margin-top: 30px;
  }
`
