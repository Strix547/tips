import styled from 'styled-components'

import { WhiteBox, RecipientCard, RecipientCardTop, RecipientCardMain } from 'styled'

import { media } from 'styles/media'

export const RecipientCardContainer = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  box-sizing: border-box;

  ${media.createMedia(700)} {
    padding: 30px 0;
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
