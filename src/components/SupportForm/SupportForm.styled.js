import styled, { css } from 'styled-components'

import { Text, Label } from 'styled'
import { Button } from 'ui/Button/Button.styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { Dropzone } from 'ui/Dropzone/Dropzone.styled'

import { media } from 'styles/media'

const media570 = media.createMedia(570)

export { Text, Label }

export const SupportForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    margin-top: 10px;
  }

  ${Dropzone} {
    height: 60px;
  }

  ${Button} {
    margin: 10px auto 0;
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

export const ThemeRow = styled.div``

export const ThemeRadioGroup = styled(RadioGroup)`
  && {
    display: flex;
  }

  gap: 10px;
  margin-top: 15px;
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
  transition: 0.1s;

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

export const Files = styled.div``
