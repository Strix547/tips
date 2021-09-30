import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { media } from 'styles/media'

const media1070 = media.createMedia(1070)
const media720 = media.createMedia(720)

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

  ${media720} {
    padding: 20px;
  }
`

export const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 60px 0 20px;
  background: var(--color-gray-100);
  border-radius: 10px;

  ${media1070} {
    height: auto;
    padding: 20px;
  }

  ${media720} {
    flex-direction: column;
  }
`

export const CopyIcon = styled.div`
  position: relative;
  margin-left: 10px;
  cursor: pointer;

  ${media720} {
    margin-left: 0;
  }
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

  ${media720} {
    margin-top: 30px;
    margin-left: 0;
  }
`

export const LinksBlockLeft = styled.div`
  display: flex;
  align-items: center;

  ${Text} {
    color: var(--color-black-200);
  }

  a {
    margin-left: 30px;
    color: var(--color-blue-100);
    overflow-wrap: anywhere;
  }

  ${media1070} {
    align-items: flex-start;
    flex-wrap: wrap;

    ${Text} {
      width: 100%;
    }

    a {
      margin-top: 10px;
      margin-left: 0;
    }

    svg {
      margin-top: 5px;
    }
  }

  ${media720} {
    flex-direction: column;
  }
`
