import styled from 'styled-components'

import { WhiteBox } from 'styled'

export const Content = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  height: calc(100% - 72px); /* 72px - layout title */
  padding: 50px 0;
  box-sizing: border-box;
`
