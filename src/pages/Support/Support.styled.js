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
`
