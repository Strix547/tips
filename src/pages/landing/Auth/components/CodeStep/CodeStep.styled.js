import styled from 'styled-components'
import ReactCodeInput from 'react-verification-code-input'

import { FormField } from 'ui/FormField/FormField.styled'

export const CodeStep = styled.div`
  width: 330px;
`

export const SendText = styled.p`
  margin-top: 20px;
  line-height: 22px;
`

export const Label = styled.p`
  margin-top: 20px;
  font-weight: 500;
  line-height: 22px;
`

export const CodeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 10px;

  ${FormField} {
    .form-field-input-root {
      padding-left: 30px;

      input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          appearance: none;
          margin: 0;
        }
      }
    }
  }
`

export const CodeInput = styled(ReactCodeInput)`
  width: 100% !important;

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 15px;
  }

  && {
    input {
      width: 70px !important;
      height: 56px !important;
      border: 1px solid var(--color-gray-400);
      border-right: 1px solid var(--color-gray-400);
      border-radius: 6px;
      font-family: 'Formular';
      font-size: var(--font-size-md);
      color: var(--color-black-100);

      &:focus {
        border-color: var(--color-gray-400);
        caret-color: var(--color-black-100);

        & + input {
          border-left: 1px solid var(--color-gray-400);
        }
      }
    }
  }
`

export const CountdownText = styled.p`
  margin-top: 20px;
  font-size: var(--font-size-sm);
  line-height: 20px;
  text-align: center;
`

export const SendCodeButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 0;
  font-family: 'Formular';
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-primary-200);
  text-decoration: underline;
  text-align: center;
  background: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    transition: 0.3s;
  }
`
