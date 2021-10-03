import styled, { css } from 'styled-components'

import { Label } from 'styled'

export { Label }

export const DatePicker = styled.div`
  .react-datepicker {
    display: flex;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e8e8f6;
    box-shadow: 0px 10px 30px rgba(42, 55, 66, 0.15);
    border-radius: 10px;
    font-family: 'Formular';
    box-sizing: border-box;

    &__input-container {
      input {
        width: 100%;
        height: 56px;
        margin-top: 0;
        padding-left: 20px;
        font-size: var(--font-size-md);
        border: 1px solid var(--color-gray-400);
        border-radius: 8px;
        transition: 0.3s;
        box-sizing: border-box;
        outline: none;
      }
    }

    &__triangle {
      &::before,
      &::after {
        display: none;
      }
    }

    &__navigation {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 20px;
      background: var(--color-gray-100);
      border-radius: 50%;

      span {
        position: absolute;
        top: 10px;
        left: 11.5px;
        right: auto;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent;

        &::before,
        &::after {
          display: none;
        }
      }

      &--previous {
        left: 20px;

        span {
          border-width: 6px 7px 6px 0;
          border-right-color: var(--color-gray-300);
        }
      }

      &--next {
        right: 20px;

        span {
          left: 13.5px;
          border-width: 6px 0 6px 7px;
          border-left-color: var(--color-gray-300);
        }
      }
    }

    &__header {
      padding: 0;
      background: #fff;
      border-bottom: none;
    }

    &__current-month {
      font-size: var(--font-size-reg);
      font-weight: 500;
      color: var(--color-black-200);
      line-height: 32px;
    }

    &__day-names {
      display: flex;
      margin-top: 35px;
      margin-bottom: 0;

      & > *:not(:last-child) {
        margin-right: 12px;
      }
    }

    &__day-name {
      width: 30px;
      height: 18px;
      margin: 0;
      font-size: var(--font-size-xs);
      color: var(--color-gray-300);
      text-transform: uppercase;
      line-height: 18px;
    }

    &__month {
      display: grid;
      grid-gap: 12px;
      margin: 15px 0 0 0;

      &-container:not(:last-child) {
        margin-right: 40px;
      }
    }

    &__day {
      position: relative;
      width: 30px;
      margin: 0;
      border-radius: 0;
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--color-black-200);
      line-height: 30px;
      transition: background color 0.3s;

      &:not(:last-child) {
        margin-right: 12px;
      }

      &:hover {
        background: var(--color-gray-100);
        transition: background color 0.3s;
      }

      &--selected {
      }

      &--keyboard-selected {
        background: #fff;
        color: var(--color-black-200);
      }

      &--in-range,
      &--in-selecting-range,
      &--selected {
        background: var(--color-gray-100);

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 0;
          width: 12px;
          height: 30px;
          background: var(--color-gray-100);
        }

        &::before {
          left: -6px;
        }

        &::after {
          right: -6px;
        }

        &:last-of-type::after {
          display: none;
        }
      }

      &--range-start,
      &--range-end,
      &--selected,
      &--selecting-range-start {
        background: var(--color-primary-200);
        border-radius: 50%;
        color: #fff;

        &:hover {
          background: var(--color-primary-200);
          border-radius: 50%;
          color: #fff;
        }

        &::before,
        &::after {
          display: none;
        }
      }

      &--range-start,
      &--selecting-range-start {
        z-index: 10;

        & + div::before {
          width: 27px;
          left: -27px;
        }
      }

      &--in-range,
      &--in-selecting-range {
        &::after {
          width: 27px;
          right: -27px;
        }
      }

      &--range-end,
      &--selecting-range-end {
        z-index: 10;
      }

      &--in-selecting-range {
        &:hover {
          background: var(--color-primary-200);
          border-radius: 50%;
          color: #fff;

          &::before,
          &::after {
            display: none;
          }
        }
      }

      &--outside-month {
        background: var(--color-gray-100);
        color: var(--color-gray-300);
        border-radius: 50%;

        &::before,
        &::after {
          background: #fff;
          margin-top: -20px;
        }

        &::before {
          left: -6px;
        }

        &::after {
          right: -6px;
        }

        &:hover {
          background: var(--color-primary-200);
          border-radius: 50%;
          color: #fff;
        }
      }
    }
  }

  ${({ haveError }) =>
    haveError &&
    css`
      .react-datepicker {
        &__input-container {
          input {
            border-color: var(--color-red-100);

            &::placeholder {
              color: var(--color-red-100);
            }
          }
        }
      }
    `}
`
