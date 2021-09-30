import styled from 'styled-components'

import { WhiteBox, Text, gapPolyfill } from 'styled'

export { Text }

export const Info = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(30)}
  padding: calc(30px - 15px) calc(40px - 15px);

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
  ${gapPolyfill(30)}
  margin-left: auto;

  li {
    a {
      display: inline-block;
    }
  }
`
