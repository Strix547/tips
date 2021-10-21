import styled from 'styled-components'

import { Heading, Text, ErrorText } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { Stepper } from 'ui/Stepper/Stepper.styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

const media1460 = media.createMedia(1460)

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
    justify-content: center;
    margin: 30px auto 0;

    &::before,
    &::after {
      width: calc((50vw - 585px) / 2);
    }

    .MuiStepConnector-root {
      max-width: 256px;
    }
  }

  ${media1460} {
    ${Stepper} {
      &::before,
      &::after {
        width: 58px;
      }

      .MuiStepConnector-root {
        max-width: 100%;
      }
    }
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
  font-weight: 700;
`

export const Step = styled.div`
  max-width: 600px;
  margin: 30px auto 0;
  padding: 0 50px;

  ${ErrorText} {
    margin-top: 15px;
  }

  ${media1460} {
    max-width: 100%;
  }

  ${media.createMedia(500)} {
    padding: 0 15px;
  }
`

export const StepNav = styled.div`
  display: flex;
  max-width: 600px;
  margin: 30px auto 0;
  padding: 0 50px;

  ${Button} {
    min-width: 140px;

    &:last-child {
      margin-left: auto;
    }
  }

  ${media1460} {
    max-width: 100%;
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
