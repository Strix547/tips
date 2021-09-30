import styled from 'styled-components'

import { WhiteBox, gapPolyfill } from 'styled'

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(20)}
  padding: calc(40px - 10px);

  /* skeleton */
  & > span {
    display: flex;
    flex-direction: column;
    ${gapPolyfill(20)}
  }
`
