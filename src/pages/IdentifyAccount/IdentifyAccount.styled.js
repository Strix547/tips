import styled from 'styled-components'

import { Heading, Text, ErrorText, WhiteBox } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { Stepper } from 'ui/Stepper/Stepper.styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

export { Heading, Text, FormField, ErrorText }

export const IdentifyAccountPage = styled.div`
  display: flex;
  height: 100vh;

  @media (max-height: 835px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    overflow-y: scroll;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 120px 0 50px;
  box-sizing: border-box;

  ${media.tablet} {
    align-items: center;
    width: 100%;
    padding: 0;
  }

  @media (max-height: 835px) {
    align-items: flex-start;
  }
`

export const Content = styled.div`
  width: 100%;
  outline: none;
  box-sizing: border-box;

  ${Heading} {
    text-align: center;
  }

  ${Stepper} {
    margin-top: 30px;
  }

  ${media.createMedia(500)} {
    width: 100%;
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  @media (max-height: 835px) {
    padding: 50px 0 100px;
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

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: var(--color-gray-600);

  ${media.tablet} {
    display: none;
  }
`

export const Progress = styled.div`
  margin: auto;
`
