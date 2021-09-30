import styled from 'styled-components'

import { gapPolyfill } from 'styled'
import { PaymentCardOptionsPanelIndividual } from 'components/Individual/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;
  ${gapPolyfill(30)}

  ${PaymentCardOptionsPanelIndividual} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;
    ${gapPolyfill(20)}

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
