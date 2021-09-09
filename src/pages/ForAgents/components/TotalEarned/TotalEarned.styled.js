import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'

export { Text }

export const TotalEarned = styled(WhiteBox)`
  display: flex;
  align-items: center;
  padding: 20px 40px;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  margin-left: 30px;
  background: var(--color-primary-500);
  border-radius: 10px;
  font-size: var(--font-size-400);
  font-weight: 700;
  color: var(--color-primary-300);
`
