import styled from 'styled-components'

import { Text, Label } from 'styled'
import { media } from 'styles/media'

import { PhoneField } from 'ui/PhoneField/PhoneField.styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { Wrapper } from 'landing/new/styled'
import { Button } from 'landing/new/ui/Button/Button.styled'

export { Text, Wrapper }

export const Consultation = styled.div`
  margin-top: 480px;

  ${media.createMedia(1024)} {
    margin-top: 326px;
  }

  ${media.createMedia(650)} {
    margin-top: 270px;
  }
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  background: #f0f5fa;
  border-radius: 24px;
  width: 100%;
  box-sizing: border-box;

  ${media.createMedia(1200)} {
    padding: 40px;
  }

  ${media.createMedia(1024)} {
    padding: 24px;
  }

  ${media.createMedia(840)} {
    flex-direction: column;
  }
`

export const Comment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  align-self: center;
  background: #fff;
  border-radius: 50%;
  flex-shrink: 0;

  ${media.createMedia(840)} {
    margin-right: 0;
  }
`

export const Left = styled.div`
  display: flex;

  ${media.createMedia(840)} {
    flex-direction: column;
  }
`

export const LeftText = styled.div`
  max-width: 475px;
  min-width: 300px;

  h5 {
    font-size: var(--font-size-500);
    font-weight: 500;
    line-height: 32px;
  }

  p {
    margin-top: 16px;
    line-height: 24px;
  }

  ${media.createMedia(840)} {
    h5,
    p {
      text-align: center;
    }

    h5 {
      margin-top: 20px;
    }

    p {
      margin-top: 8px;
    }
  }

  ${media.createMedia(400)} {
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export const Form = styled.div`
  max-width: 400px;
  width: 100%;
  margin-left: 20px;

  ${FormField} {
    .form-field-input-root {
      height: 48px;
      border-radius: 12px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: #d9dbdf;
      background: #fff;
      border-bottom: none;

      input {
        font-size: var(--font-size-reg);

        &::placeholder {
          font-size: var(--font-size-reg);
          color: #000d26;
          opacity: 0.4;
        }
      }
    }
  }

  ${PhoneField} {
    ${Label} {
      display: none;
    }

    .react-tel-input {
      .form-control {
        height: 48px;
        border-radius: 12px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-color: #d9dbdf;
        font-size: var(--font-size-reg);

        &::placeholder {
          font-size: var(--font-size-reg);
          color: #000d26;
          opacity: 0.4;
        }
      }

      .flag-dropdown {
        height: 48px;
      }
    }
  }

  ${Button} {
    width: 100%;
    margin-top: 12px;
  }

  ${media.createMedia(840)} {
    margin-top: 20px;
    margin-left: 0;
  }
`
