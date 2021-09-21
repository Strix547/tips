import styled from 'styled-components'

import { Heading, Text, ErrorText, WhiteBox } from 'styled'
import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { Stepper } from 'ui/Stepper/Stepper.styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

export { Heading, Text, FormField, ErrorText }

export const AccountIdentifyModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  /* overlay */
  & > div:first-child {
    background-color: #fff !important;
    cursor: default;
  }
`

export const Content = styled(WhiteBox)`
  width: 500px;
  padding: 25px 0;
  outline: none;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(49, 52, 61, 0.05);
  border: 1px solid var(--color-gray-200);

  ${Heading} {
    text-align: center;
  }

  ${Stepper} {
    margin-top: 30px;
  }

  ${media.createMedia(500)} {
    width: 100%;
    border-radius: 0;
  }

  @media (max-height: 835px) {
    padding: 15px 0;
    height: 100vh;
    overflow-y: scroll;

    ${FormField} .form-field-input-root {
      height: 46px;
    }
  }
`

export const FieldsLabel = styled(Text)`
  margin-bottom: 10px;
  font-weight: 700;
`

export const StepNav = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0 50px;

  ${Button} {
    min-width: 140px;

    &:last-child {
      margin-left: auto;
    }
  }

  ${media.createMedia(500)} {
    padding: 0 15px;
  }
`

export const Step = styled.div`
  margin-top: 30px;
  padding: 0 50px;

  ${ErrorText} {
    margin-top: 15px;
  }

  ${media.createMedia(500)} {
    padding: 0 15px;
  }
`
