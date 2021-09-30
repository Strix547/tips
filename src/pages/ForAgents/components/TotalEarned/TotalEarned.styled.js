import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { media } from 'styles/media'

const media720 = media.createMedia(720)

export { Text }

export const TotalEarned = styled(WhiteBox)`
  display: flex;
  align-items: center;
  padding: 20px 40px;

  ${media720} {
    padding: 20px;
  }
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

  ${media720} {
    margin-left: 10px;
    font-size: var(--font-size-600);
  }
`
