import styled from 'styled-components'

import { Heading } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { Sidebar } from 'layout/Sidebar/Sidebar.styled'
import {
  Header,
  Left as HeaderLeft,
  Wrapper as HeaderWrapper,
  Nav as HeaderNav
} from 'layout/Header/Header.styled'

import { media } from 'styles/media'

const media1280 = media.createMedia(1280)

export { Heading }

export const AccountLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';

  ${Sidebar} {
    grid-area: sidebar;
  }

  ${Header} {
    position: relative;
    grid-area: header;
    z-index: 100;
  }

  ${HeaderLeft} {
    display: none;
  }

  ${HeaderWrapper} {
    max-width: 100%;
    padding: 0 20px;
    margin: 0;
    box-sizing: border-box;
  }

  ${HeaderNav} {
    margin-left: 0;
  }

  ${media1280} {
    display: block;
  }

  ${media.tablet} {
    ${HeaderWrapper} {
      padding: 0 15px;
    }
  }

  ${({ styles }) => styles}
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  width: calc(100vw - 320px);
  min-height: calc(100vh - 70px - 100px);
  padding: 40px 20px 60px;
  background: #f9fafc;

  ${media1280} {
    width: 100%;
    min-height: calc(100vh - 70px);
    box-sizing: border-box;
  }

  ${media.tablet} {
    padding: 30px 15px 45px;
  }

  ${media.mobile} {
    padding: 30px 15px 30px;
  }
`

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  ${Heading} {
    color: #121212;
  }

  ${Button} {
    padding: 0 20px;
    height: 50px;

    svg {
      transform: rotate(45deg);
      path {
        stroke: #fff;
      }
    }
  }
`
