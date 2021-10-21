import styled from 'styled-components'

import { WhiteBox } from 'styled'

export { WhiteBox }

export const PlatformFields = styled.div`
  ${WhiteBox} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`
