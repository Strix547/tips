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
      &:nth-child(1) img {
        width: 96px;
        height: 40px;
      }

      &:nth-child(2) img {
        width: 98px;
        height: 40px;
      }

      &:nth-child(3) img {
        width: 100px;
        height: 32px;
      }

      &:nth-child(4) img {
        width: 64px;
        height: 48px;
      }

      &:nth-child(5) img {
        width: 116px;
        height: 32px;
      }

      &:nth-child(6) img {
        width: 140px;
        height: 24px;
      }

      &:nth-child(7) img {
        width: 62px;
        height: 48px;
      }

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
        &:nth-child(1) img {
          width: 48px;
          height: 20px;
        }

        &:nth-child(2) img {
          width: 49px;
          height: 20px;
        }

        &:nth-child(3) img {
          width: 50px;
          height: 16px;
        }

        &:nth-child(4) img {
          width: 32px;
          height: 24px;
        }

        &:nth-child(5) img {
          width: 58px;
          height: 16px;
        }

        &:nth-child(6) img {
          width: 70px;
          height: 12px;
        }

        &:nth-child(7) img {
          width: 31px;
          height: 24px;
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
      }
    }
  }
`
