import styled, { css } from 'styled-components'
import { IbanElement } from '@stripe/react-stripe-js'

import { WhiteBox, Text, Label, ErrorText } from 'styled'
import { media } from 'styles/media'
import { Button } from 'ui/Button/Button.styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { Dropzone } from 'ui/Dropzone/Dropzone.styled'

export { Label, Text, ErrorText }

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
  /* margin-top: 30px; */
`

export const Iban = styled(IbanElement)`
  padding: 14px 20px;
  font-family: 'Formular';
  font-size: var(--font-size-md);
  border: 1px solid var(--color-gray-400);
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-height: 835px) {
    padding: 14px 20px;
  }
`

export const Agreement = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  ${Text} {
    margin-left: 10px;
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

export const DropzoneImage = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 20px;

  img {
    width: auto !important;
    height: auto !important;
    min-width: auto !important;
    min-height: auto !important;
  }
`

export const RequisitesDataForm = styled.form`
  ${Text}:first-child {
    margin-bottom: 20px;
    font-weight: 700;
  }

  ${FormField}, ${Dropzone} {
    background-color: #fff;
  }

  ${Button} {
    margin-top: 20px;
  }

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
