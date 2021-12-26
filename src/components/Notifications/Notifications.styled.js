import styled from 'styled-components'

import { media } from 'styles/media'

export const Notifications = styled.div`
  position: absolute;

  .Toastify__toast {
    font-family: 'Formular';
    font-size: var(--font-size-reg);
    line-height: 20px;
    color: #fff;

    &--success {
      background: var(--color-primary-200);
    }

    &--error {
      background: var(--color-red-100);
    }

    &--info,
    &--warning {
      color: var(--color-black-200);

      .Toastify__toast-icon svg {
        fill: var(--color-black-200);
      }
    }

    &-icon {
      svg {
        fill: #fff;
      }
    }
  }

  ${media.mobile} {
    .Toastify__toast-container {
      width: 80vw;
      left: auto;
      right: 20px;
      bottom: 20px;
    }

    .Toastify__toast:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`
