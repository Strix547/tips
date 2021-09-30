import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'

export { Text }

export const Info = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

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
  margin-left: auto;

  & > *:not(:last-child) {
    margin-right: 30px;
  }

  li {
    a {
      display: inline-block;
    }
  }
`
