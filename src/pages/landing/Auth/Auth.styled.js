import styled from 'styled-components'

import { Heading, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { PhoneField } from 'ui/PhoneField/PhoneField.styled'
import { SwitchField } from 'ui/Switch/Switch.styled'

import { media } from 'styles/media'

const media530 = media.createMedia(530)

export { Heading, Text }

export const SignIn = styled.div`
  display: flex;
  height: 100vh;

  ${media.tablet} {
    height: calc(100vh - 70px);
    background: #f4f5f7;
  }

  ${media530} {
    background: #ffffff;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 120px 20px 50px;
  box-sizing: border-box;

  ${media.tablet} {
    align-items: center;
    width: 100%;
    padding: 0 15px;
  }
`

export const LeftContent = styled.div`
  width: 465px;

  ${Heading} {
    margin-top: 100px;
    font-size: var(--font-size-200);
    line-height: 52px;
  }

  ${PhoneField} {
    margin-top: 40px;
  }

  ${SwitchField} {
    margin-top: 20px;
  }

  ${Button} {
    width: 100%;
    margin-top: 20px;
  }

  ${media.tablet} {
    width: 635px;
    padding: 80px;
    background: #fff;
    border: 1px solid var(--color-gray-600);
    box-shadow: 0px 10px 40px rgba(54, 54, 65, 0.1);
    border-radius: 20px;
    box-sizing: border-box;

    ${Heading} {
      margin-top: 0;
    }
  }

  ${media530} {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: var(--color-gray-600);
`
