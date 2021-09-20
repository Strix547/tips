import styled from 'styled-components'

import { WhiteBox } from 'styled'

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;

  /* skeleton */
  & > span {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
