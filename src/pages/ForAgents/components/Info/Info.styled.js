import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'

export { Text }

export const Info = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  padding: 30px 40px;

  ${Text} {
    color: var(--color-black-200);
    line-height: 22px;
  }
`

export const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 60px 0 20px;
  background: var(--color-gray-100);
  border-radius: 10px;

  & > ${Text} {
    color: var(--color-black-200);
  }

  & > a {
    margin-left: 30px;
    color: var(--color-blue-100);
  }
`

export const CopyIcon = styled.div`
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`

export const Networks = styled.ul`
  display: flex;
  grid-gap: 30px;
  margin-left: auto;

  li {
    a {
      display: inline-block;
    }
  }
`
