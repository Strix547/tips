import styled, { css } from 'styled-components'

import { WhiteBox, RecipientCard, RecipientCardTop, Heading } from 'styled'

import { media } from 'styles/media'

export const RecipientCardContainer = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  border-radius: 0;
  box-sizing: border-box;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
    `}

  ${Heading} {
    margin-bottom: 30px;
  }

  ${RecipientCard} {
    width: 600px;
    margin: auto;
  }

  ${RecipientCardTop} {
    padding-bottom: 25px;
  }

  ${media.createMedia(700)} {
    padding: 30px 0;

    ${Heading} {
      padding: 0 15px;
    }

    ${RecipientCard} {
      width: calc(100% - 30px);
      margin: 0 15px;
      padding: 0;
      border: none;
    }

    ${RecipientCardTop} {
      margin: 0 15px;
    }
  }
`
