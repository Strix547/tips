import styled from 'styled-components'

import { RecipientCardContainer, Heading as HeadingCommon } from 'styled'

export { RecipientCardContainer }

export const Heading = styled(HeadingCommon)`
  color: ${({ $color = 'var(--color-black-200)' }) => $color};
`
