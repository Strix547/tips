import styled, { css } from 'styled-components'

import { Text, Label } from 'styled'

export { Text, Label }

export const Autocomplete = styled.div`
  position: relative;

  && {
    .form-field-input-root.autocomplete-input-root {
      flex-wrap: nowrap;
      padding: 0 15px 0 20px;

      .autocomplete-input:first-child,
      input {
        height: 40px;
        caret-color: transparent;
      }
    }
  }

  .autocomplete-no-options {
    padding: 8px 15px;
    font-family: 'Formular';
    font-size: var(--font-size-reg);
    color: var(--color-black-100);
  }

  .autocomplete-focused .form-field-input-root {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .autocomplete-end-adornment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    right: 15px;

    button {
      width: 100%;
      height: 100%;
      padding: 0;
      margin-right: 0;

      &:hover {
        background: transparent;
      }
    }

    svg {
      margin-top: 3px;
    }
  }

  ${({ haveError }) => {
    return (
      haveError &&
      css`
        && {
          .form-field-input-root.autocomplete-input-root {
            border-color: var(--color-red-100);

            input::placeholder {
                color: var(--color-red-100);
              }
            }
          }
        }
      `
    )
  }}
`

export const Paper = styled.div`
  && {
    margin-top: -1px;
    padding: 0;
    border: 1px solid var(--color-gray-400);
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
  }

  ul {
    padding: 0;
    max-height: 188px;
    border-radius: var(--border-radius-280);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    li {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      min-height: 22px;
      font-family: Formular;
      font-size: var(--font-size-reg);
      color: var(--color-black-100);
      background: #fff;
      box-sizing: border-box;

      /* couldn't find object for change classname */
      &.Mui-selected {
        font-weight: var(--font-weight-md);

        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 12px;
          height: 10px;
        }
      }

      &:not(:last-child) {
      }

      &:hover {
        background: #fff;
      }

      &[data-focus='true'] {
        background: #fff;
      }
    }
  }

  && {
    padding: 0;
    border: 1px solid var(--color-gray-400);
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 20px 40px rgba(34, 45, 61, 0.08);
  }
`

export const Popper = styled.div`
  position: absolute;
  left: 0;
  max-height: 189px;
  width: 100% !important;
  padding: 0;
  background: #fff;
  border: 1px solid var(--color-biege-100);
  border-top: none;
  border-radius: var(--border-radius-280);
  box-shadow: none;
  z-index: 100;
`

export const ErrorText = styled(Text)`
  position: absolute;
  left: 15px;
  bottom: -16px;
  margin-top: 0;
  font-family: var(--ff-hn);
  font-size: var(--font-size-xs-1);
  line-height: 1.66;
  color: var(--color-red-100);
`
