import styled from 'styled-components'

import { Text } from 'styled'
import { media } from 'styles/media'

import { Wrapper } from 'landing/new/styled'

export { Wrapper, Text }

export const Footer = styled.footer`
  margin-top: 120px;
  color: #000d26;

  ${media.createMedia(500)} {
    margin-top: 30px;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  border-top: 1px solid rgba(0, 13, 38, 0.15);
  border-bottom: 1px solid rgba(0, 13, 38, 0.15);

  ${media.createMedia(800)} {
    flex-direction: column;
  }
`

export const TopLeft = styled.div`
  font-size: var(--font-size-xs);

  p {
    margin-top: 16px;
    line-height: 16px;
  }

  a {
    line-height: 20px;
  }
`

export const Nav = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 281px);
  grid-gap: 16px 40px;

  ${media.createMedia(1024)} {
    grid-template-columns: repeat(2, 212px);
  }

  ${media.createMedia(800)} {
    margin-top: 40px;
  }

  ${media.createMedia(500)} {
    grid-template-columns: 1fr;
  }
`

export const NavItem = styled.li`
  a {
    font-size: var(--font-size-xs);
  }
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  ${media.createMedia(530)} {
    flex-direction: column;
  }

  ${media.createMedia(360)} {
    align-items: flex-start;
  }
`

export const BottomLeft = styled.div`
  display: flex;
  align-items: center;

  p,
  a {
    font-size: var(--font-size-xs);
    line-height: 16px;
    opacity: 0.6;
  }

  a {
    &:first-of-type {
      margin-left: 32px;
    }

    &:last-of-type {
      position: relative;
      margin-left: 20px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -12px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #000d26;
        opacity: 0.25;
        transform: translateY(-50%);
      }
    }
  }

  ${media.createMedia(360)} {
    flex-direction: column;
    align-items: flex-start;

    a {
      &:first-of-type {
        margin-top: 12px;
        margin-left: 0;
      }

      &:last-of-type {
        margin-top: 8px;
        margin-left: 0;

        &::before {
          display: none;
        }
      }
    }
  }
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }

  ${media.createMedia(360)} {
    margin-top: 12px;
  }
`
