import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const AvatarIndividual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Text} {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: center;
    font-weight: 700;
    line-height: 22px;
  }
`

export const Avatar = styled.div`
  border-radius: 10px;
  overflow: hidden;
`
