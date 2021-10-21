import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'
import { Button } from 'ui/Button/Button.styled'

import { media } from 'styles/media'

const media675 = media.createMedia(675)

export { Text }

export const Content = styled(WhiteBox)`
  flex: 1;
  padding: 30px 40px;

  ${Text} {
    font-size: var(--font-size-md);
    font-weight: 500;
    line-height: 28px;
    text-align: center;
  }

  ${media675} {
    padding: 20px;
  }
`

export const ActionsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ${Button}:last-child {
    margin-left: 20px;
  }

  ${media675} {
    flex-direction: column;

    ${Button}:last-child {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`
