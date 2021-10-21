import styled, { css } from 'styled-components'

import { ContentHead } from 'layout/Account/Account.styled'
import { PlatformCard } from 'components/Platforms/Card/Card.styled'

import { media } from 'styles/media'

export const layoutStyles = css`
  ${media.createMedia(500)} {
    ${ContentHead} {
      flex-direction: column;
      align-items: flex-start;

      & > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 25px;

  /* skeleton */
  & > span {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 25px;
  }

  ${media.createMedia(400)} {
    ${PlatformCard} {
      width: 100%;
      box-sizing: border-box;
    }
  }
`
