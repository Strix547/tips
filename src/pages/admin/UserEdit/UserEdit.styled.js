import styled, { css } from 'styled-components'

import { WhiteBox, Label } from 'styled'
import { media } from 'styles/media'

import { Button } from 'ui/Button/Button.styled'

export { Label }

const containerStyles = css`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const Form = styled(WhiteBox).attrs({ as: 'form' })`
  ${containerStyles}
  padding: 40px;

  /* skeleton */
  & > span {
    ${containerStyles}
  }

  ${media.createMedia(500)} {
    padding: 20px;

    & > span {
      padding: 20px;
    }
  }
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 20px 30px;

  ${Label} {
    margin-bottom: 0;
  }
`

export const ActionsRow = styled.div`
  display: flex;
  margin-top: 10px;

  ${Button} {
    max-width: 260px;

    &:last-child {
      margin-left: 15px;
    }
  }
`
