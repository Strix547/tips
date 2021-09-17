import styled from 'styled-components'

import { PaymentCardOptionsPanelBusiness } from 'components/Business/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${PaymentCardOptionsPanelBusiness} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;
    gap: 20px;

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
