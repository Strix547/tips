import styled, { css } from 'styled-components'

import { media } from 'styles/media'

import { ContentHead } from 'layout/Account/Account.styled'
import { PlatformCard } from 'components/Platforms/Card/Card.styled'

const platformsGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 25px;
`

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

export const PlatformsGrid = styled.div`
  ${platformsGridStyles}

  ${media.createMedia(400)} {
    ${PlatformCard} {
      width: 100%;
      box-sizing: border-box;
    }
  }
`

export const PlatformsGridSkeleton = styled.div`
  & > span {
    ${platformsGridStyles}
  }
`
