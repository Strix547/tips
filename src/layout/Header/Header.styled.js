import styled from 'styled-components'

import { Wrapper } from 'styled'
import { Button } from 'ui/Button/Button.styled'

export { Wrapper }

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(46, 51, 68, 0.05);

  ${Wrapper} {
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
`

export const Nav = styled.nav`
  margin-left: 145px;

  ul {
    display: flex;

    li {
      &:not(:last-child) {
        margin-right: 30px;
      }

      a {
        font-weight: 500;
      }
    }
  }
`

export const Right = styled.div`
  margin-left: auto;

  ${Button} {
    height: 48px;
    padding: 0 40px;
  }
`
