import styled from 'styled-components'

import { Wrapper } from 'landing/new/styled'
import { media } from 'styles/media'

export { Wrapper }

export const PaymentMethods = styled.div`
  padding-top: 80px;
  padding-bottom: 440px;
  overflow-x: hidden;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    li {
      img {
        filter: grayscale(1);
      }
    }
  }

  ${media.createMedia(960)} {
    ul {
      width: 873px;
      justify-content: space-between;

      li {
        img {
          max-height: 24px;
        }
      }
    }
  }

  ${media.createMedia(650)} {
    padding-top: 26px;
    padding-bottom: 264px;

    ul {
      width: 530px;

      li {
        &:not(:last-child) {
          margin-right: 20px;
        }

        img {
          max-height: 24px;
        }
      }
    }
  }
`
