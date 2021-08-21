import styled from 'styled-components'

import { Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { CheckboxRow } from 'ui/Checkbox/Checkbox.styled'
import { FormField } from 'ui/FormField/FormField.styled'

export { Text }

export const Content = styled.div`
  position: relative;
`

export const Subtitle = styled.p`
  width: 666px;
  margin: 0 auto;
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;
  text-align: center;
`

export const FormContainer = styled.div`
  position: relative;
  width: 610px;
  margin: 40px auto 0;
  padding: 40px 20px 20px;
  background: #ffffff;
  border: 1px solid #f7f9fb;
  box-shadow: 0px 10px 40px rgba(54, 54, 65, 0.1);
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 10;

  ${FormField} {
    margin-bottom: 20px;
  }

  ${Button} {
    width: 100%;
  }

  ${CheckboxRow} {
    margin-bottom: 20px;
  }
`

export const Form = styled.form`
  width: 450px;
  margin: 0 auto;
`

export const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 80px;
  background: rgba(59, 199, 107, 0.1);
  border-radius: 15px;

  ${Text} {
    width: 385px;
    text-align: center;
    line-height: 28px;
  }

  a {
    font-weight: 500;
    color: var(--color-primary-200);
    border-bottom: 1px dashed var(--color-primary-200);
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  svg {
    position: absolute;

    /* green dotes */
    &:nth-child(1) {
      top: -58px;
      left: -35px;
    }

    /* line */
    &:nth-child(2) {
      top: 110px;
      left: -709px;
    }

    /* green dotes */
    &:nth-child(3) {
      right: -35px;
      bottom: -27px;
    }
  }
`
