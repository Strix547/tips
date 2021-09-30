import styled from 'styled-components'

import { Text, WhiteBox } from 'styled'
import { media } from 'styles/media'

export { Text }

export const Content = styled(WhiteBox)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  svg {
    width: calc(100% - 40px);
    margin: 0 20px;
  }

  ${Text} {
    max-width: 800px;
    margin-top: 30px;
    font-size: var(--font-size-md);
    line-height: 28px;
    text-align: center;
  }

  ${media.tablet} {
    ${Text} {
      max-width: 508px;
    }
  }

  ${media.mobile} {
    ${Text} {
      margin-top: 0;
      max-width: 280px;
    }
  }
`
