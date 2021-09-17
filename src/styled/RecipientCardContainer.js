import styled, { css } from 'styled-components'

import { WhiteBox, RecipientCard, RecipientCardTop, RecipientCardMain, Heading } from 'styled'

import { media } from 'styles/media'

export const RecipientCardContainer = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  box-sizing: border-box;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
    `}

  ${Heading} {
    background: #fff;
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
      width: 100%;
      border: none;
    }

    ${RecipientCardTop} {
      padding-top: 0;
      margin: 0 15px;
    }

    ${RecipientCardMain} {
      padding-bottom: 0;
    }
  }
`
