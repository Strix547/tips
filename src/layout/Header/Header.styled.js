import styled, { css } from 'styled-components'

import { Wrapper, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { Select } from 'ui/Select/Select.styled'

import { media } from 'styles/media'

export const media1000 = media.createMedia(1000)

export { Wrapper, Text }

export const Header = styled.header``

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(46, 51, 68, 0.05);
  z-index: 120;

  ${Wrapper} {
    flex-direction: row;
    align-items: center;
    height: 100%;
  }

  ${media.laptop} {
    ${Wrapper} {
      justify-content: space-between;
    }
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const MenuButton = styled.button`
  margin-right: 20px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  ${media.mobile} {
    margin-right: 15px;
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
        transition: 0.3s;

        &:hover {
          color: var(--color-primary-200);
          transition: 0.3s;
        }
      }
    }
  }

  ${media.laptop} {
    margin-left: 0;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${Button} {
    height: 48px;
    margin-left: 20px;
    padding: 0 40px;

    ${media.mobile} {
      margin-left: 15px;
      padding: 0 30px;
    }
  }

  ${media.laptop} {
    margin-left: 0;
  }
`

export const LanguageSelect = styled(Select)`
  .icon {
    right: 0;
  }

  .select-root {
    display: flex;
    align-items: center;
    padding: 0;
    padding-right: 0;
    border: none;
  }

  .menu-paper {
    margin-top: 17px;
    margin-left: -8px;
    background: #ffffff;
    border: 1px solid var(--color-gray-600);
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
    border-radius: 10px;
  }

  .select-root p,
  .menu-paper p {
    margin-left: 8px;
    font-weight: 500;
    color: #787576;
  }
`

export const MenuHamburger = styled.nav`
  position: absolute;
  left: 0;
  top: -250px;
  width: 100vw;
  height: 250px;
  padding: 30px 20px;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(46, 51, 68, 0.05);
  transition: 1s;
  box-sizing: border-box;
  z-index: 110;

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    a {
      font-weight: 500;
      line-height: 22px;
      transition: 0.3s;

      &:hover {
        color: var(--color-primary-200);
        transition: 0.3s;
      }
    }
  }

  ${({ open }) =>
    open &&
    css`
      top: 70px;
      transition: 1s;
    `}
`

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: -100vh;
  width: 100vw;
  height: 100vh;
  background: rgba(16, 17, 18, 0.3);
  transition: top 0.9s ease-in-out 0.1s;
  cursor: pointer;
  z-index: 100;

  ${({ open }) =>
    open &&
    css`
      top: 0;
      transition: top 0.9s ease-in-out 0.1s;
    `}
`
