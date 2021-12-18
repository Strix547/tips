import styled, { css } from 'styled-components'

import { Wrapper, Heading, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { CheckboxRow } from 'ui/Checkbox/Checkbox.styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { PhoneField } from 'ui/PhoneField/PhoneField.styled'

import { media } from 'styles/media'

const media640 = media.createMedia(640)
const media450 = media.createMedia(450)

export { Text }

export const sectionStyles = css`
  overflow-x: hidden;

  ${Wrapper} > ${Heading}:first-of-type {
    margin-bottom: 30px;
    position: relative;
    z-index: 10;
  }

  ${media.mobile} {
    ${Wrapper} > ${Heading}:first-of-type {
      font-size: var(--font-size-500);
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
`

export const Content = styled.div`
  position: relative;
`

export const Subtitle = styled.p`
  position: relative;
  width: 666px;
  margin: 0 auto;
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  z-index: 10;

  ${media.createMedia(696)} {
    width: 100%;
  }

  ${media.mobile} {
    font-size: var(--font-size-reg);
    line-height: 22px;
  }
`

export const FormContainer = styled.div`
  position: relative;
  width: 610px;
  margin: 40px auto 0;
  padding: 40px 20px 20px;
  background: #ffffff;
  border: 1px solid var(--color-gray-600);
  box-shadow: 0px 10px 40px rgba(54, 54, 65, 0.1);
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 10;

  ${FormField}, ${PhoneField} {
    margin-bottom: 20px;
  }

  ${Button} {
    width: 100%;
  }

  ${CheckboxRow} {
    margin-bottom: 20px;
  }

  ${media640} {
    width: 100%;
  }

  ${media450} {
    margin-top: 30px;
    padding-top: 30px;
  }
`

export const Form = styled.form`
  width: 450px;
  margin: 0 auto;

  ${media640} {
    width: 100%;
  }
`

export const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  min-height: 80px;
  background: rgba(59, 199, 107, 0.1);
  border-radius: 15px;

  ${Text} {
    width: 100%;
    padding: 10px 15px;
    text-align: center;
    line-height: 28px;
    box-sizing: border-box;
  }

  a {
    font-weight: 500;
    color: var(--color-primary-200);
    border-bottom: 1px dashed var(--color-primary-200);
  }

  ${media450} {
    ${Text}, a {
      font-size: var(--font-size-sm);
      line-height: 20px;
    }
  }
`

export const GreenDotes = styled.div`
  position: absolute;
  width: 156px;
  height: 152px;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${GreenDotes} {
    &:nth-child(1) {
      top: -58px;
      left: -35px;
    }

    &:nth-child(2) {
      right: -35px;
      bottom: -27px;
    }
  }

  ${media.createMedia(750)} {
    display: none;
  }
`
