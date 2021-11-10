import styled, { css } from 'styled-components'

import { Wrapper, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { Select } from 'ui/Select/Select.styled'

import { media } from 'styles/media'

export const media1100 = media.createMedia(1100)

export { Wrapper, Text }

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(46, 51, 68, 0.05);
  z-index: 120;

  ${Wrapper} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  ${media.laptop} {
    ${Wrapper} {
      justify-content: space-between;
    }
  }
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

export const Left = styled.div`
  display: ${({ withSidebar }) => (withSidebar ? 'none' : 'flex')};
  align-items: center;

  ${MenuButton} {
    display: none;
  }

  ${media1100} {
    ${MenuButton} {
      display: block;
    }
  }

  ${({ withSidebar }) =>
    withSidebar &&
    css`
      ${media.createMedia(1280)} {
        display: flex !important;

        ${MenuButton} {
          display: block;
        }
      }
    `}
`

export const Nav = styled.nav`
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

  ${media1100} {
    display: none;
  }

  ${media.laptop} {
    margin-left: 0;
  }

  ${({ withSidebar }) =>
    withSidebar &&
    css`
      ${media.createMedia(1280)} {
        display: none;
      }
    `}
`

export const Right = styled.div`
  display: flex;
  align-items: center;

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

export const User = styled.div`
  display: flex;
  margin-left: 30px;
  cursor: pointer;

  ${media.createMedia(700)} {
    margin-left: 20px;
  }
`

export const UserSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  ${media.createMedia(540)} {
    & > span:first-child {
      display: none;
    }

    & > span:last-child span {
      width: 44px !important;
      height: 44px !important;
    }
  }
`

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: var(--color-gray-600);
  border: 1px solid var(--color-gray-200);
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;

  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none;
    `}
`

export const UserInfo = styled.div`
  margin-left: 15px;

  ${Text} {
    /* fullName */
    &:first-child {
      max-width: 170px;
      font-weight: 500;
      line-height: 22px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    /* email */
    &:last-child {
      font-size: var(--font-size-sm);
      color: #62687a;
      line-height: 20px;
    }
  }

  ${media.createMedia(540)} {
    display: none;
  }
`

export const LanguageSelect = styled(Select)`
  width: 80px;

  .icon {
    right: 0;
  }

  .select-root {
    display: flex;
    align-items: center;
    padding: 0;
    padding-right: 0;
    border: none;

    & > svg {
      width: 20px;
      border-radius: 50%;
      border: 1px solid var(--color-gray-200);
    }
  }

  .menu-paper {
    margin-top: 17px;
    margin-left: -8px;
    background: #ffffff;
    border: 1px solid var(--color-gray-600);
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
    border-radius: 10px;

    svg {
      width: 20px;
      border-radius: 50%;
      border: 1px solid var(--color-gray-200);
    }
  }

  .select-root p,
  .menu-paper p {
    margin-left: 8px;
    font-weight: 500;
    color: #787576;
  }
`

export const NavDropdown = styled.nav`
  width: 100vw;
  height: 320px;
  padding: 100px 20px 30px;
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

  cursor: pointer;
  z-index: 100;

  ${({ open }) =>
    open &&
    css`
      top: 0;
    `}
`

export const Header = styled.header`
  position: relative;
  z-index: 1400;
`

export const NavItem = styled.li`
  ${({ active }) =>
    active &&
    css`
      a {
        color: var(--color-primary-200);
      }
    `}
`

export const UserAvatarImg = styled.div`
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
`
