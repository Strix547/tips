import styled from 'styled-components'

import { SupportForm, ThemeRow, Textarea } from 'components/SupportForm/SupportForm.styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { Button } from 'ui/Button/Button.styled'
import { Dropzone } from 'ui/Dropzone/Dropzone.styled'

import { media } from 'styles/media'

export const Content = styled.div`
  ${SupportForm} {
    align-items: center;
    width: 100%;
    padding: 30px 30px 40px;
    box-shadow: 0px 5px 20px rgba(49, 52, 61, 0.05);
    border-radius: 10px;
    border: none;

    & > * {
      width: 1000px;
    }
  }

  ${Button} {
    margin: 0;
  }

  ${media.createMedia(1440)} {
    ${SupportForm} {
      align-items: flex-start;

      & > * {
        width: 100%;
      }
    }

    ${ThemeRow} {
      width: 840px;
    }

    ${FormField}, ${Textarea}, ${Dropzone}, ${Button} {
      width: 500px;
    }
  }

  ${media.createMedia(1000)} {
    ${SupportForm} {
      padding: 30px 50px;

      ${ThemeRow} {
        width: 100%;
      }
    }
  }

  ${media.tablet} {
    ${SupportForm} {
      ${FormField}, ${Textarea}, ${Dropzone}, ${Button} {
        width: 100%;
      }
    }
  }

  ${media.createMedia(600)} {
    ${SupportForm} {
      padding: 20px;
    }
  }
`
