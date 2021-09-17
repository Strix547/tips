import styled from 'styled-components'

import { Heading, Text, ErrorText } from 'styled'
import { Modal } from 'ui/Modal/Modal.styled'
import { Button } from 'ui/Button/Button.styled'
import { Stepper } from 'ui/Stepper/Stepper.styled'
import { FormField } from 'ui/FormField/FormField.styled'

export { Heading, Text, FormField, ErrorText }

export const AccountIdentifyModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  /* overlay */
  & > div:first-child {
    cursor: default;
  }
`

export const Content = styled.div`
  width: 500px;
  padding: 25px 0;
  background: #ffffff;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;

  ${Heading} {
    text-align: center;
  }

  ${Stepper} {
    margin-top: 30px;
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
`

export const Step = styled.div`
  margin-top: 30px;
  padding: 0 50px;

  ${ErrorText} {
    margin-top: 15px;
  }
`
