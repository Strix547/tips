import styled from 'styled-components'

import { Label, WhiteBox } from 'styled'
import { media } from 'styles/media'

export { Label }

export const Filter = styled(WhiteBox)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  padding: 30px;

  ${media.createMedia(950)} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }

  ${media.createMedia(500)} {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

export const Column = styled.div``
