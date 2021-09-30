import styled from 'styled-components'

import { PaymentCardOptionsPanelIndividual } from 'components/Individual/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 30px;
  }

  ${PaymentCardOptionsPanelIndividual} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }

    ${PaymentCardOptionsPanelIndividual} {
      width: 100%;
    }
  }
`
