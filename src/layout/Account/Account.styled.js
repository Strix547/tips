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
    grid-area: header;
  }

  ${HeaderLeft} {
    display: none;
  }

  ${HeaderWrapper} {
    max-width: 100%;
    padding: 0 30px;
    margin: 0;
    box-sizing: border-box;
  }

  ${HeaderNav} {
    margin-left: 0;
  }
`

export const Content = styled.main`
  grid-area: content;
  padding: 40px 30px 60px;
  background: #f9fafc;
`

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

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
