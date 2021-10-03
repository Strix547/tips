import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { media } from 'styles/media'

const media1500 = media.createMedia(1500)
const media1070 = media.createMedia(1070)
const media860 = media.createMedia(860)
const media500 = media.createMedia(500)

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

  ${media.createMedia(720)} {
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

  ${media1500} {
    padding: 0 20px;
  }

  ${media1070} {
    height: auto;
    padding: 20px;
  }

  ${media860} {
    flex-direction: column;
  }

  ${media500} {
    padding: 15px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  a {
    color: var(--color-blue-100);
    overflow-wrap: anywhere;
  }

  ${media1500} {
    margin-left: 0;
  }

  ${media860} {
    margin-top: 10px;
  }
`

export const CopyIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
      width: 40px;
      height: 40px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${media860} {
    margin-top: 30px;
    margin-left: 0;
  }

  ${media500} {
    width: 100%;
    justify-content: space-around;

    & > *:not(:last-child) {
      margin-right: 0;
    }

    li a {
      width: 30px;
      height: 30px;
    }
  }
`

export const LinksBlockLeft = styled.div`
  display: flex;
  align-items: center;

  ${Text} {
    color: var(--color-black-200);
  }

  ${media1500} {
    flex-direction: column;
    align-items: flex-start;
  }

  ${media1070} {
    ${Text} {
      width: 100%;
    }

    a {
      margin-left: 0;
    }

    svg {
      margin-top: 5px;
    }
  }

  ${media860} {
    svg {
      margin-top: 0;
    }
  }
`
