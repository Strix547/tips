import styled from 'styled-components'
import { IbanElement } from '@stripe/react-stripe-js'

import { Text, Label } from 'styled'
import { FieldsLabel } from '../../IdentifyAccount.styled'

export { FieldsLabel, Text, Label }

export const CreditCardStep = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  ${FieldsLabel} {
    margin-bottom: 20px;
  }
`

export const Agreement = styled.div`
  display: flex;
  align-items: center;

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

export const IbanContainer = styled.div``

export const Iban = styled(IbanElement)`
  padding: 14px 20px;
  font-family: 'Formular';
  font-size: var(--font-size-md);
  border: 1px solid var(--color-gray-400);
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-height: 835px) {
    padding: 14px 20px;
  }
`
