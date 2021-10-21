import styled from 'styled-components'

import { PaymentCardOptionsPanelIndividual } from 'components/Individual/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 30px;
  }

  /* skeleton */
  & > span {
    width: 100%;

    &:nth-of-type(2) {
      max-width: 354px;
    }

    span {
      width: 100% !important;
    }
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
