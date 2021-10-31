import styled, { css } from 'styled-components'

import { Label } from 'styled'

export { Label }

export const PhoneField = styled.div`
  position: relative;

  .react-tel-input {
    .form-control {
      width: 100%;
      height: 56px;
      padding: 0 20px 0 50px;
      border: 1px solid var(--color-gray-400);
      border-radius: 8px;
      font-family: 'Formular';
      font-size: var(--font-size-reg);
      color: var(--color-black-200);
      box-sizing: border-box;

      &::placeholder {
        color: var(--color-gray-300);
      }

      &:focus {
        border-color: none;
        outline: none;
        box-shadow: none;
      }
    }

    .special-label {
      display: none;
    }

    .flag-dropdown {
      height: 54px;
      background: transparent;
      border: none;
      top: 1px;
      left: 0;

      .selected-flag {
        display: flex;
        justify-content: center;
        width: 50px;
        background: transparent;
        padding: 0;
      }

      &.open {
        background: transparent;
      }

      .arrow {
        display: none;
      }
    }
  }

  ${({ error }) =>
    error &&
    css`
      .react-tel-input .form-control {
        border-color: var(--color-red-100);

        &::placeholder {
          color: var(--color-red-100);
        }
      }
    `}
`
