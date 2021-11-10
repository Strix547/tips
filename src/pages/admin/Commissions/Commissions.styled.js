import styled from 'styled-components'

import { WhiteBox, Text, ErrorText } from 'styled'
import { media } from 'styles/media'

import { Button } from 'ui/Button/Button.styled'
import { FormField } from 'ui/FormField/FormField.styled'

export { Text, ErrorText }

export const Content = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 40px;

  /* skeleton */
  & > span {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${Text} {
    line-height: 22px;
  }

  ${media.tablet} {
    padding: 30px;
  }

  ${media.createMedia(500)} {
    padding: 20px;

    ${Text} {
      font-size: var(--font-size-sm);
      line-height: 20px;
    }
  }
`

export const Form = styled.form`
  width: 300px;
  margin-top: 30px;

  ${FormField} {
    margin-bottom: 20px;
  }

  ${ErrorText} {
    margin-bottom: 20px;
  }

  ${Button} {
    align-self: flex-start;
  }

  ${media.createMedia(500)} {
    margin-top: 20px;

    ${Button} {
      width: 100%;
    }
  }
`

export const Skeleton = styled.div`
  & > span {
    span {
      margin-bottom: 20px;
    }
  }
`
