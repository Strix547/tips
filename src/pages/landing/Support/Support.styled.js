import styled, { css } from 'styled-components'
import {} from '@material-ui/core'

import { Wrapper, Heading, Text } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

const media570 = media.createMedia(570)

export { Wrapper, Heading, Text }

export const Main = styled.main`
  padding: 80px 0;
  overflow-x: hidden;

  ${Wrapper} {
    position: relative;
  }

  ${Heading} {
    text-align: center;
    margin-bottom: 40px;
  }

  ${media.tablet} {
    ${Heading} {
      font-size: var(--font-size-200);
      line-height: 52px;
    }
  }

  ${media.mobile} {
    padding: 40px 0;

    ${Heading} {
      font-size: var(--font-size-500);
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
`

export const Form = styled.form`
  position: relative;
  width: 770px;
  margin: 0 auto;
  padding: 30px 50px;
  background: #fff;
  border: 1px solid #f7f9fb;
  box-shadow: 0px 10px 40px rgba(54, 54, 65, 0.1);
  border-radius: 20px;
  z-index: 10;
  box-sizing: border-box;

  ${FormField} {
    margin-top: 30px;
  }

  ${Button} {
    margin: 30px auto 0;
  }

  ${media.createMedia(800)} {
    width: 100%;
  }

  ${media570} {
    padding: 20px;
  }

  ${media.mobile} {
    ${Button} {
      width: 100%;
    }
  }
`

export const Faq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 30px;
  background: rgba(59, 199, 107, 0.1);
  border-radius: 15px;
  box-sizing: border-box;

  ${Text} {
    color: var(--color-black-200);

    &:nth-child(1) {
      font-size: var(--font-size-600);
      font-weight: 700;
      line-height: 22px;
    }

    &:nth-child(2) {
      margin-top: 10px;
      font-weight: 500;
      line-height: 22px;
    }
  }

  a {
    font-weight: 500;
    color: var(--color-primary-200);
    border-bottom: 1px dashed var(--color-primary-200);
  }

  ${media570} {
    padding: 20px;

    ${Text} {
      &:nth-child(1) {
        font-size: var(--font-size-md);
        line-height: 28px;
      }

      &:nth-child(2) {
        font-size: var(--font-size-sm);
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
`

export const ThemeLabel = styled.p`
  margin-top: 20px;
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;
`

export const ThemeRadioGroup = styled(RadioGroup)`
  && {
    flex-direction: row;
  }

  grid-gap: 10px;
  margin-top: 15px;

  .form-control-label-root {
    & > span:first-child {
      position: absolute;
      opacity: 0;
    }
  }
`

export const ThemeRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 30px;
  background: #ffffff;
  border: 1px solid var(--color-gray-400);
  border-radius: 20px;
  font-family: 'Formular';
  font-size: var(--font-size-reg);
  font-weight: 500;
  color: var(--color-black-200);
  transition: 0.3s;

  ${media570} {
    height: 44px;
    padding: 0 20px;
    border-radius: 50px;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: var(--color-primary-200);
      background: var(--color-primary-200);
      color: #fff;
    `}
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid var(--color-gray-400);
  border-radius: 6px;
  font-family: Formular;
  font-size: var(--font-size-md);
  color: var(--color-black-100);
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-300);
  }
`

export const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  border: 1px dashed var(--color-gray-400);
  border-radius: 6px;
  cursor: pointer;
  box-sizing: border-box;

  ${Text} {
    margin-left: 15px;
    color: var(--color-black-200);
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

    /* green dotes left */
    &:nth-child(1) {
      top: 20px;
      left: -173px;
    }

    /* line */
    &:nth-child(2) {
      top: 110px;
      left: -709px;
    }

    /* green dotes right */
    &:nth-child(3) {
      right: -180px;
      bottom: 144px;
    }
  }

  ${media.createMedia(1350)} {
    svg {
      &:nth-child(1) {
        left: -112px;
      }

      &:nth-child(3) {
        right: -112px;
      }
    }
  }

  ${media.createMedia(750)} {
    display: none;
  }
`
