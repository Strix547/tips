import styled from 'styled-components'

import { WhiteBox, Heading } from 'styled'

import { media } from 'styles/media'

export { Heading }

export const PaymentAndRequisites = styled(WhiteBox)`
  padding: 30px 40px;

  ${media.createMedia(570)} {
    padding: 20px;
  }
`
