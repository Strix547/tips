import styled from 'styled-components'

import { PlatformPaymentCardOptionsPanel } from 'components/Platforms/PaymentCardOptionsPanel/PaymentCardOptionsPanel.styled'

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

  ${PlatformPaymentCardOptionsPanel} {
    width: 720px;
  }

  ${media.createMedia(1000)} {
    flex-wrap: wrap;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }

    ${PlatformPaymentCardOptionsPanel} {
      width: 100%;
    }
  }
`
