import styled, { css } from 'styled-components'
import { IbanElement } from '@stripe/react-stripe-js'

import { WhiteBox, Label, ErrorText } from 'styled'
import { media } from 'styles/media'
import { Button } from 'ui/Button/Button.styled'

export { Label, ErrorText }

export const Requisites = styled.div``

export const Content = styled(WhiteBox)`
  padding: 40px;

  ${Button} {
    margin-top: 20px;
  }

  ${ErrorText} {
    margin-top: 10px;
  }

  ${media.createMedia(600)} {
    padding: 20px;
  }
`

export const ContentContainer = styled.div`
  width: 400px;

  ${media.tablet} {
    width: 100%;
  }
`

export const CheckboxField = styled.div`
  width: 100%;
  padding: 7px 10px;
  background: var(--color-gray-100);
  border-radius: 8px;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid var(--color-primary-600);
    `}
`

export const IbanContainer = styled.div`
  margin-top: 30px;
`

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
