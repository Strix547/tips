import styled from 'styled-components'

import { PaymentCardOptionsPanelIndividual } from 'components/Individual/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${PaymentCardOptionsPanelIndividual} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;
    gap: 20px;

    ${PaymentCardOptionsPanelIndividual} {
      width: 100%;
    }
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;

    ${PaymentCardOptionsPanelIndividual} {
      width: 100%;
    }
  }
`
