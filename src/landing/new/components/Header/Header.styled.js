import styled, { css } from 'styled-components'

import { Text } from 'styled'
import { media } from 'styles/media'
import { Wrapper } from 'landing/new/styled'
import { Drawer } from 'ui'
import { Button } from 'landing/new/ui/Button/Button.styled'
import { PayTipsQr, Qr } from 'landing/new/components/PayTipsQr/PayTipsQr.styled'
import { Select } from 'ui/Select/Select.styled'

export { Wrapper, Text }

export const Header = styled.header`
  background: var(--gradient-main);
  color: #fff;

  ${Wrapper} {
    padding: 0;
  }

  ${media.createMedia(560)} {
    background: radial-gradient(
      227.22% 100% at 100% 100%,
      #ccff00 0%,
      #ffaa00 22.16%,
      #ff0000 100%
    );
  }
`

export const Top = styled.div`
  position: relative;
  z-index: 1400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 0 32px;
  transition: 0.3s;

  ${media.createMedia(560)} {
    height: 64px;
    padding: 0 16px;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      background: #ff1301;
    `}
`

export const Logo = styled.div``

export const LanguageSelect = styled.div`
  margin-left: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  box-sizing: border-box;

  ${Select} {
    .icon {
      display: none;
    }

    .select-root {
      height: auto;
      padding: 8px 12px;
      padding-right: 12px;
      border: none;
      background: transparent;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        line-height: 24px;

        svg {
          width: 24px;
          margin-left: 8px;
        }
      }
    }

    .menu-paper {
      margin-top: 17px;
      margin-left: -12px;
      border: none;
      box-sizing: border-box;
      box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
      border-radius: 8px;

      .menu-list {
        li {
          background: #000d26;
        }
      }

      a {
        display: flex;
        align-items: center;
        color: #fff;

        svg {
          width: 24px;
          margin-left: 8px;
        }
      }
    }

    .select-root p,
    .menu-paper p {
      color: #fff;
    }
  }
`

export const TopRight = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-left: 24px;
    padding: 13px 16px;
    background: rgba(0, 13, 38, 0.15);
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  ${media.createMedia(860)} {
    ${LanguageSelect} {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  ${media.createMedia(860)} {
    display: none;
  }
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }

  a {
    color: #fff;
  }
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  padding: 0 32px 70px;

  ${media.createMedia(980)} {
    flex-direction: column;
  }

  ${media.createMedia(560)} {
    margin-top: 24px;
    padding: 0 16px 24px;
  }
`

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0;

  p {
    font-size: var(--font-size-500);
    line-height: 32px;
  }

  h1 {
    max-width: 630px;
    font-size: 60px;
    font-weight: 500;
    line-height: 72px;
    margin-top: 20px;
  }

  ${Button} {
    margin-top: 32px;
  }

  ${media.createMedia(1200)} {
    p {
      font-size: var(--font-size-md);
      line-height: 26px;
    }

    h1 {
      font-size: var(--font-size-100);
      line-height: 56px;
    }
  }

  ${media.createMedia(560)} {
    p {
      font-size: var(--font-size-reg);
      line-height: 24px;
    }

    h1 {
      margin-top: 8px;
      font-size: 30px;
      line-height: 36px;
    }
  }
`

export const Stores = styled.div`
  margin-top: 132px;

  a:last-child {
    margin-left: 12px;
  }
`

export const BodyRight = styled.div`
  display: flex;
  align-items: center;

  ${PayTipsQr} {
    margin-left: -20px;
  }

  ${media.createMedia(1200)} {
    ${PayTipsQr} {
      width: 130px;
      padding: 10px;
      margin-left: -8px;
      border-radius: 10px;

      & > svg {
        width: 55px;
        height: 20px;
      }

      ${Qr} {
        margin-top: 13px;

        svg {
          width: 90px;
          height: 90px;
        }
      }

      p {
        margin-top: 13px;
        font-size: 8px;
        line-height: 10px;
      }
    }
  }

  ${media.createMedia(980)} {
    margin-top: 24px;
  }
`

export const Image = styled.div`
  position: relative;
  width: 320px;
  height: 650px;

  ${media.createMedia(1200)} {
    width: 210px;
    height: 425px;
  }
`

export const MenuButton = styled.button`
  display: none;
  margin-left: 17px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  ${media.createMedia(860)} {
    display: block;
  }
`

export const NavDropdown = styled.nav`
  width: 100vw;
  padding: 119px 16px 0;
  background: #fff;
  transition: 1s;
  box-sizing: border-box;
  z-index: 110;

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:last-child {
      a {
        color: #2da771;
      }
    }

    a {
      font-weight: 700;
      color: #000;
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

  ${media.createMedia(560)} {
    padding-top: 88px;
  }
`

export const DropdownTop = styled(Drawer)`
  .MuiDrawer-paper {
    padding-bottom: 30px;
    background: #fff;
    opacity: 1;
  }

  ${LanguageSelect} {
    width: 80px;
    height: 40px;
    margin-top: 20px;
    margin-left: 16px;
    border: 1px solid rgba(0, 0, 0, 0.25);

    ${Select} {
      overflow: hidden;

      .select-root p {
        color: #000;
      }
    }
  }
`
