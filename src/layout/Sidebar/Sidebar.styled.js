import styled, { css } from 'styled-components'

import { Button } from 'ui/Button/Button.styled'

import { Text } from 'styled'
import { media } from 'styles/media'

export { Text }

export const Sidebar = styled.aside`
  position: fixed;
  width: 280px;
  height: 100vh;

  ${media.createMedia(1280)} {
    position: static;
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding-left: 30px;
  border-right: 1px solid #ebecef;
  border-bottom: 1px solid #ebecef;
  box-sizing: border-box;
`

export const Main = styled.div`
  margin: 40px 10px 0;
  padding-bottom: 20px;
`

export const Nav = styled.ul``

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  /* my qr */
  &:nth-child(2) {
    a {
      svg path:nth-child(n + 5) {
        fill: #777d82;
        stroke: #777d82;
        transition: 0.3s;
      }
    }

    &:hover svg path:nth-child(n + 5) {
      fill: var(--color-primary-200);
      stroke: var(--color-primary-200);
      transition: 0.3s;
    }
  }

  a {
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 15px;
    font-weight: 500;
    border-radius: 10px;
    color: var(--color-black-200);
    transition: 0.3s;
    box-sizing: border-box;
    transition: 0.3s;

    &:hover {
      background: #e2f7e9;
      color: var(--color-primary-200);
      transition: 0.3s;

      svg {
        fill: var(--color-primary-200);
        transition: 0.3s;
      }
    }
  }

  svg {
    margin-right: 15px;
    transition: 0.3s;
  }

  ${({ active, bgRed }) =>
    active &&
    css`
      & > a {
        color: var(--color-primary-200);
      }

      svg {
        fill: var(--color-primary-200);
      }

      &:nth-child(2) {
        a svg path:nth-child(n + 5) {
          fill: var(--color-primary-200);
          stroke: var(--color-primary-200);
          transition: 0.3s;
        }
      }

      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        a {
          background: ${bgRed ? '#fef5f5' : 'transparent'};
        }
      }
    `}

  ${({ bgRed }) =>
    bgRed &&
    css`
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        background: #fef5f5;

        &:hover {
          background: #fef5f5;
        }
      }

      &:nth-child(6) {
        margin-top: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(7) {
        border-radius: 0;
      }

      &:nth-child(8) {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
`

export const Support = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 70px;
  padding: 20px;
  height: 140px;
  border-radius: 20px;
  background: var(--color-primary-500);
  box-sizing: border-box;

  svg {
    position: absolute;
    width: 112.1px;
    height: 100px;
    left: 20px;
    bottom: 84px;
  }

  ${Button} {
    min-width: 220px;
    padding: 0;
  }
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  padding-left: 15px;
  font-family: Formular;
  font-size: var(--font-size-reg);
  font-weight: 500;
  color: var(--color-black-200);
  border: none;
  border-radius: 10px;
  background: #f4f5f7;
  transition: 0.3s;
  cursor: pointer;
  box-sizing: border-box;

  svg {
    margin-right: 15px;
    transition: 0.3s;
  }

  &:hover {
    color: var(--color-primary-200);

    background: #e2f7e9;
    svg {
      fill: var(--color-primary-200);
      transition: 0.3s;
    }
  }
`

export const LogoutAdminButton = styled(LogoutButton)`
  font-size: 15px;
`

export const SubNav = styled.ul``

export const SubNavItem = styled(NavItem)`
  a {
    padding-left: 54px;
  }
`

export const AdminViewPanel = styled.div`
  margin-left: auto;
  margin-right: 5px;

  ${Text} {
    margin-bottom: 5px;
    font-size: var(--font-size-sm);
  }
`
