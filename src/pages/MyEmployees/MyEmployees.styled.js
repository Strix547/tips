import { css } from 'styled-components'

import { media } from 'styles/media'

import { ContentHead } from 'layout/Account/Account.styled'

export const layoutStyles = css`
  ${media.createMedia(530)} {
    ${ContentHead} {
      flex-direction: column;
      align-items: flex-start;

      & > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`
