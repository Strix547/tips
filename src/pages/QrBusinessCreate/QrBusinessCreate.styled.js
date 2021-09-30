import styled from 'styled-components'

import { gapPolyfill } from 'styled'
import { PaymentCardOptionsPanelBusiness } from 'components/Business/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;
  ${gapPolyfill(30)}

  ${PaymentCardOptionsPanelBusiness} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;
    ${gapPolyfill(20)}

    ${PaymentCardOptionsPanelBusiness} {
      width: 100%;
    }
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;

    ${PaymentCardOptionsPanelBusiness} {
      width: 100%;
    }
  }
`
