import styled, { css } from 'styled-components'

import { WhiteBox } from 'styled'
import { media } from 'styles/media'

import { Button } from 'ui/Button/Button.styled'

export const FormContainer = styled(WhiteBox).attrs({ as: 'form' })`
  display: flex;
  flex-direction: column;
  padding: 40px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  /* skeleton */
  & > span {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${Button} {
    align-self: flex-start;
  }

  ${media.createMedia(500)} {
    padding: 20px;

    ${Button} {
      width: 100%;
    }
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 448px;

  ${({ big }) =>
    big &&
    css`
      height: 772px;
    `}
`
