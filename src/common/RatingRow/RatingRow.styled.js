import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const RatingRow = styled.div`
  ${Text} {
    font-weight: 500;
    color: var(--color-black-200);
    text-align: center;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 10px;
  background: var(--color-gray-100);
  border-radius: 40px;
`
