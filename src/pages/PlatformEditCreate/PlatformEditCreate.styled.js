import styled from 'styled-components'

import { gapPolyfill } from 'styled'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(10)}
`
