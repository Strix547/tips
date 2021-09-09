import styled from 'styled-components'

import { RecipientCardOptionsPanel } from 'components/RecipientCardOptionsPanel/RecipientCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;
  grid-gap: 30px;

  ${RecipientCardOptionsPanel} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;
    grid-gap: 20px;

    ${RecipientCardOptionsPanel} {
      width: 100%;
    }
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;

    ${RecipientCardOptionsPanel} {
      width: 100%;
    }
  }
`
