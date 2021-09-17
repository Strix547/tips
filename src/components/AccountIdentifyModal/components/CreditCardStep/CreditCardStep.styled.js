import styled from 'styled-components'
import { IbanElement } from '@stripe/react-stripe-js'

import { Text } from 'styled'
import { FieldsLabel } from '../../AccountIdentifyModal.styled'

export { FieldsLabel, Text }

export const CreditCardStep = styled.div`
  input {
    font-family: 'Formular' !important;
    color: red !important;
  }
`

export const Agreement = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  ${Text} {
    margin-left: 15px;
  }

  a {
    margin-left: 5px;
    color: var(--color-primary-200);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

export const Iban = styled(IbanElement)`
  margin-top: 20px;
  padding: 14px 20px;
  font-family: 'Formular';
  font-size: var(--font-size-md);
  border: 1px solid var(--color-gray-400);
  border-radius: 8px;
  box-sizing: border-box;
`
